// app/api/slice/route.ts
import { NextRequest, NextResponse } from "next/server";
import { generateGcode } from "@/lib/stl-slicer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    
    const axis = parseInt(formData.get("axis") as string || "3");
    const center = formData.get("center") as string || "90,90";
    const bedCenter = formData.get("bedCenter") as string || "100,100";
    const layerHeight = parseFloat(formData.get("layerHeight") as string || "0.05");
    const rotFixed = parseFloat(formData.get("rotFixed") as string || "0");
    const recenter = formData.get("recenter") === "1";
    const nozzleDiameter = parseFloat(formData.get("nozzleDiameter") as string || "0.4");

    if (!file) {
      return NextResponse.json({ error: "Dosya yüklenmedi." }, { status: 400 });
    }

    console.log(`[Backend] ✓ STL dosyası alındı: ${file.name}`);
    console.log(`[Backend] 📊 Parametreler: axis=${axis}, center=${center}, layer=${layerHeight}mm, rot-fixed=${rotFixed}°`);

    // Read STL buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Generate G-code using TypeScript slicer
    console.log("[Backend] 🚀 STL slicing başlatılıyor (Node.js)...");
    const gcode = generateGcode(buffer, {
      layerHeight,
      rotFixed,
      center,
      bedCenter,
      nozzleDiameter,
      axis,
      recenter
    });
    
    console.log("[Backend] ✓ G-code başarıyla oluşturuldu!");

    // Return G-code file
    return new NextResponse(gcode, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${file.name.replace(/\.[^.]+$/, '')}.gcode"`,
      },
    });
  } catch (error: any) {
    console.error("[Backend] ❌ HATA:", error);
    return NextResponse.json(
      { error: `Slicing hatası: ${error.message}` },
      { status: 500 }
    );
  }
}

// app/api/slice/route.ts
import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import os from "os";

// Real STL slicer with Python script
function runPythonSlicer(
  inputPath: string,
  outputPath: string,
  axis: string,
  center: string,
  bedCenter: string,
  layerHeight: string,
  nozzleDiameter: string,
  rotFixed: string,
  recenter: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    const scriptPath = "C:\\Users\\emree\\atlas3d-slicer-next-app\\slicer.py";
    const args = [
      "wsl", "python3", scriptPath.replace(/\\/g, '/').replace(/^([A-Z]):/, (_, drive) => `/mnt/${drive.toLowerCase()}`),
      inputPath.replace(/\\/g, '/').replace(/^([A-Z]):/, (_, drive) => `/mnt/${drive.toLowerCase()}`),
      outputPath.replace(/\\/g, '/').replace(/^([A-Z]):/, (_, drive) => `/mnt/${drive.toLowerCase()}`),
      layerHeight,
      rotFixed,
      center,
      bedCenter,
      nozzleDiameter,
      axis,
      recenter
    ];

    console.log(`[Backend] 🔧 Python slicer: ${args.join(" ")}`);
    
    const process = spawn(args[0], args.slice(1));
    let stdout = "";
    let stderr = "";

    process.stdout.on("data", (data) => { 
      stdout += data.toString(); 
      console.log("[Slicer]", data.toString().trim());
    });
    process.stderr.on("data", (data) => { stderr += data.toString(); });

    process.on("close", (code) => {
      if (code === 0) {
        console.log("[Backend] ✓ Python slicer başarılı");
        resolve();
      } else {
        console.error(`[Backend] ❌ Python slicer hata: ${code}`);
        console.error("[Backend] STDERR:", stderr);
        reject(new Error(`Python slicer failed (Code ${code}): ${stderr || stdout}`));
      }
    });

    process.on("error", (err) => {
      reject(new Error(`Python slicer başlatılamadı: ${err.message}`));
    });
  });
}



export async function POST(request: NextRequest) {
  let inputPath: string | null = null;
  let outputPath: string | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    
    const axis = formData.get("axis") as string || "3";
    const center = formData.get("center") as string || "90,90";
    const bedCenter = formData.get("bedCenter") as string || "100,100";
    const layerHeight = formData.get("layerHeight") as string || "0.05";
    const rotFixed = formData.get("rotFixed") as string || "0";
    const recenter = formData.get("recenter") as string || "0";
    const slicer = formData.get("slicer") as string || "Mandoline";
    const nozzleDiameter = formData.get("nozzleDiameter") as string || "0.4";

    if (!file) {
      return NextResponse.json({ error: "Dosya yüklenmedi." }, { status: 400 });
    }

    const tempDir = os.tmpdir();
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    const fileName = file.name.replace(/[^a-z0-9.]/gi, '-');
    
    inputPath = path.join(tempDir, `${timestamp}-${random}-${fileName}`);
    outputPath = path.join(tempDir, `${timestamp}-${random}-output.gcode`);

    // Save uploaded file
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(inputPath, buffer);
    console.log(`[Backend] ✓ STL dosyası kaydedildi: ${inputPath}`);
    console.log(`[Backend] 📊 Parametreler: axis=${axis}, center=${center}, layer=${layerHeight}mm, rot-fixed=${rotFixed}°`);

    // Generate 4-axis G-code with Python slicer
    console.log("[Backend] 🚀 STL slicing başlatılıyor (Python)...");
    await runPythonSlicer(inputPath, outputPath, axis, center, bedCenter, layerHeight, nozzleDiameter, rotFixed, recenter);
    
    console.log("[Backend] ✓ G-code başarıyla oluşturuldu!");

    // Return G-code file
    const gcodeBuffer = await fs.readFile(outputPath);
    const response = new NextResponse(gcodeBuffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${file.name.replace(/\.[^.]+$/, '')}.gcode"`,
      },
    });

    // Cleanup
    try {
      await fs.unlink(inputPath);
      await fs.unlink(outputPath);
      console.log("[Backend] 🧹 Geçici dosyalar temizlendi");
    } catch (cleanupErr: any) {
      console.error(`[Backend] Temizlik hatası:`, cleanupErr);
    }

    return response;

  } catch (error: any) {
    console.error("[Backend] ❌ HATA:", error);

    if (inputPath) {
      try { await fs.unlink(inputPath); } catch {}
    }
    if (outputPath) {
      try { await fs.unlink(outputPath); } catch {}
    }

    return NextResponse.json(
      { error: error.message || "Bilinmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}

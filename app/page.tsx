// app/page.tsx

"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import logo1 from "./assets/logo1.jpeg";
import logo2 from "./assets/logo2.jpeg";
import LoadingSpinner from "./components/LoadingSpinner";

// İkonlar: npm install lucide-react
import { Upload, Cpu, Settings, Triangle, Loader2 } from 'lucide-react';

export default function SlicerPage() {
  const [file, setFile] = useState<File | null>(null);
  
  // Makine Ayarları
  const [axis, setAxis] = useState("3");
  const [center, setCenter] = useState("90,90");
  const [bedCenter, setBedCenter] = useState("100,100");
  const [layerHeight, setLayerHeight] = useState("0.05");
  const [rotFixed, setRotFixed] = useState("0"); // Sabit rotasyon açısı
  const [recenter, setRecenter] = useState(true); // Modeli ortala
  
  // Slicer Ayarları
  const [slicer, setSlicer] = useState("Cura");
  const [nozzleDiameter, setNozzleDiameter] = useState("0.4");
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Lütfen bir model dosyası seçin.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setProgress("STL dosyası yükleniyor...");

    try {
      // Harici API'ye query parametreleriyle istek at
      const apiUrl = new URL("https://batuhantekin.icu/novus/slice-with-file");
      apiUrl.searchParams.append("axis", axis);
      apiUrl.searchParams.append("layer_height", layerHeight);
      apiUrl.searchParams.append("nozzle_diameter", nozzleDiameter);
      apiUrl.searchParams.append("fill_density", "0");
      apiUrl.searchParams.append("rot_fixed", rotFixed);
      apiUrl.searchParams.append("output", `${file.name.replace(/\.[^.]+$/, '')}.gcode`);
      apiUrl.searchParams.append("verbose", "true");

      // FormData'yı yeniden oluştur (sadece dosya)
      const apiFormData = new FormData();
      apiFormData.append("model_file", file);

      setProgress("Slicing işlemi başlatılıyor...");
      
      const response = await fetch(apiUrl.toString(), {
        method: "POST",
        body: apiFormData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Hatası (${response.status}): ${errorText}`);
      }

      setProgress("G-code indiriliyor...");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      
      const originalName = file.name.split('.').slice(0, -1).join('.');
      a.download = `${originalName}_conic.gcode`;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setProgress("");
    }
  };

  // className prop'larındaki "styles." ön ekini kaldırdık
  return (
    <>
      <main className="main">
        {/* Sol üst logo */}
        <div className="topLeftLogo">
          <Image src={logo1} alt="Atlas 3D Logo" width={180} height={80} priority />
        </div>

        <div className="panel">
          
          <div className="header">
            <Image src={logo2} alt="Logo" className="headerLogo" width={60} height={60} />
            <div className="headerContent">
              <h1>Novus Kontrol Paneli</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form">

            <div className="formGroup">
              <label htmlFor="file-upload" className="label">
                Model Dosyası (.stl, .obj, .off)
              </label>
              <label htmlFor="file-upload" className="fileDropzone">
                <Upload size={32} className="fileIcon" />
                {file ? (
                  <p className="fileName">{file.name}</p>
                ) : (
                  <>
                    <p><span className="fileHighlight">Yüklemek için tıklayın</span> veya sürükleyip bırakın</p>
                    <p className="fileHint">STL, OBJ veya OFF</p>
                  </>
                )}
              </label>
              <input 
                id="file-upload" 
                type="file" 
                className="fileInputHidden"
                accept=".stl,.obj,.off"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              />
            </div>

            <div className="settingsSection">
              <h2 className="subHeader">
                <Cpu size={20} />
                <span>Makine Ayarları</span>
              </h2>
              
              <div className="grid">
                <div className="formGroup">
                  <label htmlFor="axis" className="label">
                    Eksen Sayısı
                  </label>
                  <select
                    id="axis"
                    value={axis}
                    onChange={(e) => setAxis(e.target.value)}
                    className="select"
                  >
                    <option value="3">3 Eksen</option>
                    <option value="4">4 Eksen (Varsayılan)</option>
                    <option value="5">5 Eksen</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="rotFixed" className="label">
                    Sabit Rotasyon Açısı (°)
                  </label>
                  <input
                    id="rotFixed"
                    type="number"
                    value={rotFixed}
                    onChange={(e) => setRotFixed(e.target.value)}
                    className="input"
                    placeholder="0"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="layerHeight" className="label">
                    Katman Yüksekliği (mm)
                  </label>
                  <input
                    id="layerHeight"
                    type="number"
                    step="0.01"
                    value={layerHeight}
                    onChange={(e) => setLayerHeight(e.target.value)}
                    className="input"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="center" className="label">
                    Konik Merkez (x,y)
                  </label>
                  <input
                    id="center"
                    type="text"
                    value={center}
                    onChange={(e) => setCenter(e.target.value)}
                    className="input"
                    placeholder="0,0"
                    required
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="bedCenter" className="label">
                    Tabla Merkezi (x,y)
                  </label>
                  <input
                    id="bedCenter"
                    type="text"
                    value={bedCenter}
                    onChange={(e) => setBedCenter(e.target.value)}
                    className="input"
                    placeholder="100,100"
                    required
                  />
                </div>

                <div className="formGroup" style={{ gridColumn: '1 / -1' }}>
                  <label className="checkboxLabel">
                    <input
                      type="checkbox"
                      checked={recenter}
                      onChange={(e) => setRecenter(e.target.checked)}
                      className="checkbox"
                    />
                    <span>Modeli Yeniden Ortala (--recenter)</span>
                  </label>
                  <p className="checkboxHint">
                    Modeli X-Y düzleminde otomatik ortalar
                  </p>
                </div>
              </div>
            </div>

            <div className="settingsSection">
              <h2 className="subHeader">
                <Settings size={20} />
                <span>Slicer Ayarları</span>
              </h2>
              
              <div className="grid">
                <div className="formGroup">
                  <label htmlFor="slicer" className="label">
                    Slicer Yazılımı
                  </label>
                  <select
                    id="slicer"
                    value={slicer}
                    onChange={(e) => setSlicer(e.target.value)}
                    className="select"
                  >
                    <option value="Cura">Cura (Önerilen)</option>
                    <option value="Slic3r">Slic3r</option>
                    <option value="PrusaSlicer">PrusaSlicer</option>
                  </select>
                </div>

                <div className="formGroup">
                  <label htmlFor="nozzleDiameter" className="label">
                    Nozzle Çapı (mm)
                  </label>
                  <input
                    id="nozzleDiameter"
                    type="number"
                    step="0.1"
                    value={nozzleDiameter}
                    onChange={(e) => setNozzleDiameter(e.target.value)}
                    className="input"
                    required
                  />
                </div>
              </div>
              
              
            </div>

            {error && (
              <div className="errorBox">
                <Triangle size={20} />
                <div>
                  <span style={{ fontWeight: 600 }}>Hata:</span> {error}
                </div>
              </div>
            )}

            {isLoading && <LoadingSpinner progress={progress} />}

            <div className="buttonGroup">
              <button
                type="submit"
                disabled={isLoading || !file}
                className="button"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="loader" />
                    Slicing...
                  </>
                ) : (
                  "Slice et ve G-code İndir"
                )}
              </button>
            </div>

          </form>
        </div>
      </main>
      {/*
        TÜM CSS KODLARI BURADA
        <style jsx> etiketi, bu stillerin sadece bu bileşen için geçerli olmasını sağlar.
      */}
      <style jsx>{`
        .main {
          display: flex;
          min-height: 100vh;
          width: 100%;
          align-items: center;
          justify-content: center;
          background-color: #121212;
          color: #e0e0e0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding: 1rem;
          position: relative;
        }
        
        .topLeftLogo {
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 1000;
        }
        
        .topLeftLogo img {
          width: 180px;
          height: auto;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5));
        }
        
        .panel {
          width: 100%;
          max-width: 42rem;
          border: 1px solid #333;
          background-color: #1e1e1e;
          border-radius: 0.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          padding: 2rem;
        }
        .header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: 600;
          border-bottom: 1px solid #333;
          padding-bottom: 1rem;
        }
        
        .headerLogo {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }
        
        .headerContent {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }
        
        .header :global(svg) { /* İkon gibi alt bileşenleri seçmek için :global() gerekir */
          color: #3b82f6;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .subHeader {
          font-size: 1.125rem;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .formGroup {
          display: flex;
          flex-direction: column;
        }
        .label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #a0a0a0;
          margin-bottom: 0.5rem;
        }
        .input,
        .select {
          width: 100%;
          background-color: #2c2c2c;
          border: 1px solid #444;
          color: #e0e0e0;
          border-radius: 0.375rem;
          padding: 0.75rem;
          font-size: 1rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus,
        .select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        .select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.75rem center;
          background-repeat: no-repeat;
          background-size: 1.25em;
          padding-right: 2.5rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .fileDropzone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 9rem;
          border: 2px dashed #444;
          border-radius: 0.5rem;
          cursor: pointer;
          background-color: #252525;
          transition: background-color 0.2s, border-color 0.2s;
          text-align: center;
          padding: 1rem;
        }
        .fileDropzone:hover {
          background-color: #2c2c2c;
          border-color: #555;
        }
        .fileDropzone :global(svg) { /* :global() kullanımı */
          color: #666;
          margin-bottom: 0.75rem;
        }
        .fileDropzone p {
          margin: 0;
          font-size: 0.875rem;
          color: #888;
        }
        .fileHighlight {
          font-weight: 600;
          color: #3b82f6;
        }
        .fileHint {
          font-size: 0.75rem;
          color: #666;
          margin-top: 0.25rem;
        }
        .fileName {
          font-weight: 600;
          color: #3b82f6;
          font-size: 1rem;
        }
        .fileInputHidden {
          display: none;
        }
        .settingsSection,
        .buttonGroup {
          border-top: 1px solid #333;
          padding-top: 1.5rem;
        }
        .button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem 1.25rem;
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          background-color: #3b82f6;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: background-color 0.2s, opacity 0.2s;
        }
        .button:hover {
          background-color: #2563eb;
        }
        .button:disabled {
          background-color: #4b5563;
          color: #9ca3af;
          cursor: not-allowed;
          opacity: 0.7;
        }
        .loader {
          animation: spin 1s linear infinite;
        }
        .errorBox {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background-color: rgba(220, 38, 38, 0.1);
          border: 1px solid #dc2626;
          color: #f87171;
          padding: 1rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }
        .infoBox {
          margin-top: 1rem;
          padding: 0.75rem;
          background-color: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 0.375rem;
        }
        .checkboxLabel {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #e0e0e0;
        }
        .checkbox {
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
          accent-color: #3b82f6;
        }
        .checkboxHint {
          margin: 0.5rem 0 0 1.75rem;
          font-size: 0.75rem;
          color: #888;
        }
        
        /* Animasyon (Keyframes) tanımı */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
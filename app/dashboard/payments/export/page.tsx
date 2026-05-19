"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type ReportType = "revenue" | "outstanding" | "history" | "clients";
type FileFormat = "pdf" | "csv" | "excel";
type DatePreset = "today" | "7days" | "month" | "custom";

export default function ExportReportPage() {
  const router = useRouter();

  // --- Interactive Form Component States ---
  const [reportType, setReportType] = useState<ReportType>("revenue");
  const [datePreset, setDatePreset] = useState<DatePreset>("month");
  const [startDate, setStartDate] = useState("2023-11-01");
  const [endDate, setEndDate] = useState("2023-11-30");
  const [fileFormat, setFileFormat] = useState<FileFormat>("pdf");
  const [downloadToDevice, setDownloadToDevice] = useState(true);
  const [emailDelivery, setEmailDelivery] = useState("");
  
  // Async UI micro-interaction engine tracking state
  const [exportStatus, setExportStatus] = useState<"idle" | "generating" | "success">("idle");

  const handleExportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (exportStatus !== "idle") return;

    // Trigger state change chain matching original micro-interactions
    setExportStatus("generating");

    setTimeout(() => {
      setExportStatus("success");
      
      // Reset button layout state after completion payload presentation loop completes
      setTimeout(() => {
        setExportStatus("idle");
      }, 2000);
    }, 1800);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen relative font-sans antialiased selection:bg-[#afc8f0]">
      {/* Dynamic Font & Material Symbols Core CDNs */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Top Application Navigation Bar Element */}
      <header className="fixed top-0 w-full z-50 bg-[#f8f9fa] shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center justify-between px-4 h-[72px] border-b border-[#e1e3e4]">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#edeeef] transition-colors duration-200 active:scale-95"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-[#000613]">arrow_back</span>
          </button>
          <h1 className="text-[20px] font-semibold tracking-normal text-[#000613]">
            Export Report
          </h1>
        </div>
        <button 
          type="button"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#edeeef] transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-[#43474e]">more_vert</span>
        </button>
      </header>

      {/* Form Context wrapper canvas */}
      <main className="pt-[96px] pb-36 px-4 max-w-lg mx-auto space-y-6">
        <form onSubmit={handleExportSubmit} className="space-y-6">
          
          {/* 1. Report Type Radio Array Grid Option Fields */}
          <section className="animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.1s]">
            <h2 className="text-[12px] font-semibold text-[#43474e] mb-3 uppercase tracking-wider">
              Report Type
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] grid grid-cols-1 gap-2 border border-[#e1e3e4]/60">
              
              {[
                { id: "revenue", label: "Revenue Report", icon: "analytics" },
                { id: "outstanding", label: "Outstanding Invoices", icon: "pending_actions" },
                { id: "history", label: "Payment History", icon: "history_edu" },
                { id: "clients", label: "Client List", icon: "group" },
              ].map((item) => (
                <div key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => setReportType(item.id as ReportType)}
                    className={`w-full flex items-center justify-between px-4 py-3 border rounded-lg transition-all text-left ${
                      reportType === item.id
                        ? "border-[#001f3f] bg-[#001f3f] text-white"
                        : "border-[#c4c6cf] bg-white text-[#191c1d] hover:bg-[#f3f4f5]"
                    }`}
                  >
                    <span className="text-[14px] font-medium">{item.label}</span>
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Date Filter Frame Logic Bounds Config */}
          <section className="animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.2s]">
            <h2 className="text-[12px] font-semibold text-[#43474e] mb-3 uppercase tracking-wider">
              Date Range
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] space-y-4 border border-[#e1e3e4]/60">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "today", label: "Today" },
                  { id: "7days", label: "Last 7 Days" },
                  { id: "month", label: "This Month" },
                  { id: "custom", label: "Custom" },
                ].map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setDatePreset(preset.id as DatePreset)}
                    className={`px-4 py-2 rounded-full text-[14px] transition-colors font-medium ${
                      datePreset === preset.id
                        ? "bg-[#001f3f] text-white"
                        : "bg-[#edeeef] text-[#191c1d] hover:bg-[#001f3f]/10"
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#74777f] uppercase ml-1">Start Date</label>
                  <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#001f3f] transition-colors">
                    <input
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-[14px] text-[#191c1d]"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-[#74777f] uppercase ml-1">End Date</label>
                  <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#001f3f] transition-colors">
                    <input
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-[14px] text-[#191c1d]"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Export Compilation Target Extension Format Selector block */}
          <section className="animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.3s]">
            <h2 className="text-[12px] font-semibold text-[#43474e] mb-3 uppercase tracking-wider">
              File Format
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex gap-3 border border-[#e1e3e4]/60">
              {[
                { id: "pdf", label: "PDF", icon: "picture_as_pdf" },
                { id: "csv", label: "CSV", icon: "csv" },
                { id: "excel", label: "Excel", icon: "table_view" },
              ].map((format) => (
                <button
                  key={format.id}
                  type="button"
                  onClick={() => setFileFormat(format.id as FileFormat)}
                  className={`flex-1 flex flex-col items-center justify-center p-3 border-2 rounded-lg font-semibold transition-all ${
                    fileFormat === format.id
                      ? "border-[#001f3f] bg-[#001f3f]/5 text-[#001f3f]"
                      : "border-[#c4c6cf] bg-white text-[#43474e] hover:border-[#191c1d]"
                  }`}
                >
                  <span className="material-symbols-outlined mb-1">{format.icon}</span>
                  <span className="text-[12px]">{format.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 4. Delivery Pipelines Target Method Switch */}
          <section className="animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.4s]">
            <h2 className="text-[12px] font-semibold text-[#43474e] mb-3 uppercase tracking-wider">
              Delivery Method
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] space-y-4 border border-[#e1e3e4]/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#43474e]">file_download</span>
                  <div>
                    <p className="text-[14px] text-[#191c1d] font-medium">Download to Device</p>
                    <p className="text-[11px] text-[#43474e]">Save file directly to downloads folder</p>
                  </div>
                </div>
                
                {/* Controlled Switch Element */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={downloadToDevice}
                    onChange={(e) => setDownloadToDevice(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#e1e3e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#006d37]"></div>
                </label>
              </div>

              <hr className="border-[#c4c6cf]" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#43474e]">mail</span>
                  <p className="text-[14px] text-[#191c1d] font-medium">Send to Email</p>
                </div>
                <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#001f3f] transition-colors">
                  <input
                    className="w-full bg-transparent border-none p-0 focus:ring-0 text-[14px] text-[#191c1d]"
                    placeholder="billing@company.com"
                    type="email"
                    value={emailDelivery}
                    onChange={(e) => setEmailDelivery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Informational Toast Callout Notice Box Area */}
          <div className="bg-[#001f3f]/5 border-l-4 border-[#001f3f] p-4 rounded-r-lg flex gap-3 animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.5s]">
            <span className="material-symbols-outlined text-[#001f3f]">info</span>
            <p className="text-[12px] leading-relaxed text-[#2f486a]">
              Reports are generated using real-time data metrics. Highly complex Revenue calculation data frameworks might consume roughly 30 seconds to run completely before delivery execution pipelines initiate.
            </p>
          </div>

          {/* Fixed Lower CTA Submission Drawer Controls */}
          <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa] to-transparent pt-8 z-40 flex justify-center">
            <button
              type="submit"
              disabled={exportStatus === "generating"}
              className={`w-full max-w-lg mx-auto flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-[20px] font-semibold shadow-lg transition-all duration-200 active:scale-95 ${
                exportStatus === "success"
                  ? "bg-[#006d37] text-white shadow-[0_8px_24px_rgba(0,109,55,0.3)]"
                  : "bg-[#001f3f] text-white hover:bg-[#000613] shadow-[0_8px_24px_rgba(0,31,63,0.3)] disabled:opacity-80"
              }`}
            >
              {exportStatus === "idle" && (
                <>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    file_export
                  </span>
                  <span>Export Report</span>
                </>
              )}

              {exportStatus === "generating" && (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Generating...</span>
                </>
              )}

              {exportStatus === "success" && (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span>Report Sent!</span>
                </>
              )}
            </button>
          </div>
        </form>
      </main>

      {/* Global CSS Injector for Keyframes Animations Fallbacks */}
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

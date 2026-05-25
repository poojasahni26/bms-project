"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Fixed: Added missing Link import

type ReportType = "revenue" | "outstanding" | "history" | "clients";
type FileFormat = "pdf" | "csv" | "excel";
type DatePreset = "today" | "7days" | "month" | "custom";

export default function ExportReportPage() {
  const router = useRouter();

  // --- Sidebar Responsive States ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Fixed: Added missing sidebar state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Fixed: Added missing toggle logic

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
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen flex relative font-sans antialiased selection:bg-[#afc8f0]">
      {/* Dynamic Font & Material Symbols Core CDNs */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Navigation Drawer */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white">bolt</span>
          </div>
          <h1 className="text-xl text-[#064e3b] font-bold">Green Telecom BMS</h1>
        </div>

        <nav className="flex-1 space-y-1 text-lg px-4">
          <Link href="/dashboard" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/invoices" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-sm font-medium">Invoices</span>
          </Link>
          <Link href="/dashboard/payments" className="text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-medium">Payments</span>
          </Link>
          <Link href="/dashboard/clients" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Clients</span>
          </Link>
          <Link href="/dashboard/reports" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm font-medium">Reports</span>
          </Link>
          <Link href="/dashboard/settings" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>

        {/* User Profile Footer */}
        <div className="px-6 mb-10 flex items-center gap-3 border-t border-[#c9c4d8]/30 pt-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0">
            <img
              alt="Operations Manager"
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-slate-800 font-semibold text-sm truncate">Operations Manager</span>
            <span className="text-slate-500 text-xs">Admin User</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 w-full">
        {/* Top App Bar */}
        <header className="w-full sticky top-0 z-50 bg-white border-b border-[#c9c4d8] px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-[#f0f4fb] rounded-full transition-colors" onClick={toggleSidebar}>
              <span className="material-symbols-outlined text-[#064e3b]">menu</span>
            </button>
            <h1 className="hidden md:block text-xl text-[#064e3b] font-bold">Billing Management</h1>
            <h1 className="md:hidden text-xl text-[#064e3b] font-bold">BMS</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-xl px-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#484555] opacity-60 group-focus-within:text-[#064e3b] transition-colors">search</span>
              <input 
                className="w-full bg-[#f0f4fb] border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#064e3b]/20 transition-all placeholder:text-[#484555] placeholder:opacity-50 text-[#191c1d]" 
                placeholder="Search invoices, clients, or reports..." 
                type="text" 
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-[#f0f4fb] rounded-full transition-colors relative">
              <span className="material-symbols-outlined text-[#064e3b]">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-[#c9c4d8]/30">
              <div className="w-8 h-8 rounded-full bg-[#064e3b] flex items-center justify-center text-white text-xs font-bold">
                GT
              </div>
            </div>
          </div>
        </header>

        {/* Form Context wrapper canvas */}
        <main className="pt-8 pb-36 px-4 max-w-lg mx-auto w-full space-y-6">
          <form onSubmit={handleExportSubmit} className="space-y-6">
            
            {/* 1. Report Type Radio Array Grid Option Fields */}
            <section className="animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.1s]">
              <h2 className="text-[12px] font-semibold text-[#064e3b] mb-3 uppercase tracking-wider">
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
                          ? "border-[#064e3b] bg-[#064e3b] text-white"
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
              <h2 className="text-[12px] font-semibold text-[#064e3b] mb-3 uppercase tracking-wider">
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
                          ? "bg-[#064e3b] text-white"
                          : "bg-[#edeeef] text-[#191c1d] hover:bg-[#064e3b]/10"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-[#74777f] uppercase ml-1">Start Date</label>
                    <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#064e3b] transition-colors">
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
                    <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#064e3b] transition-colors">
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
              <h2 className="text-[12px] font-semibold text-[#064e3b] mb-3 uppercase tracking-wider">
                File Format
              </h2>
              <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex gap-3 border border-[#e1e3e4]/60">
                {[
                  { id: "pdf", label: "PDF", icon: "picture_as_pdf" },
                  { id: "csv", label: "CSV", icon: "csv" },
                  { id: "excel", label: "Excel", icon: "table_view" },
                ].map((format) => (
                  <button
                    type="button"
                    key={format.id}
                    onClick={() => setFileFormat(format.id as FileFormat)}
                    className={`flex-1 flex flex-col items-center justify-center p-3 border-2 rounded-lg font-semibold transition-all ${
                      fileFormat === format.id
                        ? "border-[#064e3b] bg-[#064e3b]/5 text-[#064e3b]"
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
              <h2 className="text-[12px] font-semibold text-[#064e3b] mb-3 uppercase tracking-wider">
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
                    <div className="w-11 h-6 bg-[#e1e3e4] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#064e3b]"></div>
                  </label>
                </div>

                <hr className="border-[#c4c6cf]" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#43474e]">mail</span>
                    <p className="text-[14px] text-[#191c1d] font-medium">Send to Email</p>
                  </div>
                  <div className="flex items-center border border-[#c4c6cf] rounded-lg px-3 py-2 bg-white focus-within:border-[#064e3b] transition-colors">
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
            <div className="bg-[#064e3b]/5 border-l-4 border-[#064e3b] p-4 rounded-r-lg flex gap-3 animate-[fadeUp_0.4s_ease-out_forwards] [animation-delay:0.5s]">
              <span className="material-symbols-outlined text-[#064e3b]">info</span>
              <p className="text-[12px] leading-relaxed text-slate-700">
                Reports are generated using real-time data metrics. Highly complex Revenue calculation data frameworks might consume roughly 30 seconds to run completely before delivery execution pipelines initiate.
              </p>
            </div>

            {/* Fixed Lower CTA Submission Drawer Controls */}
            <div className="fixed bottom-0 left-0 lg:left-[280px] w-full lg:w-[calc(100%-280px)] p-4 bg-gradient-to-t from-[#f8f9fa] via-[#f8f9fa] to-transparent pt-8 z-40 flex justify-center">
              <button
                type="submit"
                disabled={exportStatus === "generating"}
                className={`w-full max-w-lg flex items-center justify-center gap-3 py-4 px-6 rounded-lg text-[20px] font-semibold shadow-lg transition-all duration-200 active:scale-95 ${
                  exportStatus === "success"
                    ? "bg-[#006d37] text-white shadow-[0_8px_24px_rgba(0,109,55,0.3)]"
                    : "bg-[#064e3b] text-white hover:bg-[#043327] shadow-[0_8px_24px_rgba(6,78,59,0.3)] disabled:opacity-80"
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
      </div>

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
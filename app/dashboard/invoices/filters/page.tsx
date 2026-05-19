"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function InvoiceFiltersPage() {
  // State management for interactive filters
  const [status, setStatus] = useState<string>("All");
  const [dateRange, setDateRange] = useState<string>("This Month");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [minAmount, setMinAmount] = useState<string>("");
  const [maxAmount, setMaxAmount] = useState<string>("");
  const [clientSearch, setClientSearch] = useState<string>("");

  // Helper reset function
  const handleReset = () => {
    setStatus("All");
    setDateRange("This Month");
    setStartDate("");
    setEndDate("");
    setMinAmount("");
    setMaxAmount("");
    setClientSearch("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Execute filter logic using active states
    console.log({ status, dateRange, startDate, endDate, minAmount, maxAmount, clientSearch });
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen flex flex-col font-sans antialiased selection:bg-[#afc8f0]">
      {/* Material Icons and Font Link tags loaded cleanly */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
      />

      {/* Top App Bar Header */}
      <header className="fixed top-0 w-full z-50 bg-[#f8f9fa] shadow-sm flex justify-between items-center h-[72px] px-6 border-b border-[#c4c6cf]/50">
        <div className="flex items-center gap-4">
          <Link
            href="/dashboard/invoices"
            className="p-2 transition-colors duration-200 cursor-pointer hover:bg-[#edeeef] rounded-full flex items-center justify-center text-[#43474e]"
          >
            <span className="material-symbols-outlined">close</span>
          </Link>
          <h1 className="text-[20px] leading-[1.4] font-semibold text-[#000613]">
            Filters
          </h1>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-[#000613] font-bold hover:bg-[#edeeef] px-4 py-2 rounded-lg transition-colors duration-200 text-[14px]"
        >
          Reset
        </button>
      </header>

      {/* Main Filter Control Canvas */}
      <main className="flex-1 mt-[72px] mb-[88px] px-6 py-8 space-y-8 overflow-y-auto max-w-xl lg:max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Filter Group: Status */}
          <section className="space-y-4">
            <h2 className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#43474e]">
              STATUS
            </h2>
            <div className="flex flex-wrap gap-2">
              {["All", "Paid", "Pending", "Overdue", "Draft"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className={`px-4 py-2 rounded-lg border text-[14px] leading-[1.5] transition-all duration-200 ${
                    status === item
                      ? "border-[#000613] bg-[#001f3f] text-white font-medium"
                      : "border-[#c4c6cf] bg-white text-[#43474e] hover:bg-[#edeeef]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          {/* Filter Group: Date Range */}
          <section className="space-y-4">
            <h2 className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#43474e]">
              DATE RANGE
            </h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {["Today", "Last 7 Days", "This Month", "Custom"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setDateRange(item)}
                  className={`p-3 rounded-lg border text-center text-[14px] transition-all duration-200 ${
                    dateRange === item
                      ? "border-[#000613] bg-[#001f3f] text-white font-medium"
                      : "border-[#c4c6cf] bg-white text-[#191c1d] hover:bg-[#edeeef]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Dynamic input render based on "Custom" configuration visibility triggers */}
            <div className="flex gap-4 sm:flex-row flex-col">
              <div className="flex-1 space-y-2">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#74777f]">
                  START DATE
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-white border border-[#c4c6cf] rounded-lg p-3 pr-10 text-[14px] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors"
                    placeholder="YYYY-MM-DD"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <label className="text-[12px] font-semibold tracking-[0.05em] text-[#74777f]">
                  END DATE
                </label>
                <div className="relative">
                  <input
                    className="w-full bg-white border border-[#c4c6cf] rounded-lg p-3 pr-10 text-[14px] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors"
                    placeholder="YYYY-MM-DD"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Filter Group: Amount Range */}
          <section className="space-y-4">
            <h2 className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#43474e]">
              AMOUNT RANGE
            </h2>
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <span className="absolute left-3 top-3.5 text-[#43474e] text-[14px] font-medium">$</span>
                <input
                  className="w-full bg-white border border-[#c4c6cf] rounded-lg p-3 pl-8 text-[14px] font-medium focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Min"
                  type="number"
                  value={minAmount}
                  onChange={(e) => setMinAmount(e.target.value)}
                />
              </div>
              <div className="w-4 h-px bg-[#c4c6cf]"></div>
              <div className="flex-1 relative">
                <span className="absolute left-3 top-3.5 text-[#43474e] text-[14px] font-medium">$</span>
                <input
                  className="w-full bg-white border border-[#c4c6cf] rounded-lg p-3 pl-8 text-[14px] font-medium focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="Max"
                  type="number"
                  value={maxAmount}
                  onChange={(e) => setMaxAmount(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Filter Group: Client Search & Selection */}
          <section className="space-y-4">
            <h2 className="text-[12px] font-semibold tracking-[0.05em] uppercase text-[#43474e]">
              CLIENT
            </h2>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-3 text-[#43474e]">
                search
              </span>
              <input
                className="w-full bg-white border border-[#c4c6cf] rounded-lg p-3 pl-10 text-[14px] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors"
                placeholder="Search clients..."
                type="text"
                value={clientSearch}
                onChange={(e) => setClientSearch(e.target.value)}
              />
            </div>
            
            {/* Hardcoded Sample Output Options styled with Tailwind core classes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#c4c6cf] hover:bg-[#edeeef] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#6bfe9c] text-[#00210c] flex items-center justify-center font-bold text-[12px]">
                    AC
                  </div>
                  <span className="text-[14px] font-medium text-[#191c1d]">
                    Acme Corp.
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#c4c6cf] group-hover:text-[#191c1d] transition-colors">
                  chevron_right
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-[#c4c6cf] hover:bg-[#edeeef] transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4e3ff] text-[#001c3a] flex items-center justify-center font-bold text-[12px]">
                    GT
                  </div>
                  <span className="text-[14px] font-medium text-[#191c1d]">
                    Global Tech
                  </span>
                </div>
                <span className="material-symbols-outlined text-[#c4c6cf] group-hover:text-[#191c1d] transition-colors">
                  chevron_right
                </span>
              </div>
            </div>
          </section>

          {/* Sticky Lower Action Drawer Footing */}
          <div className="flex flex-col gap-3 pt-4">
            <button 
              className="w-full h-14 bg-slate-950 text-white text-base font-semibold rounded-lg shadow-lg active:scale-[0.98] transition-all hover:bg-slate-800 flex items-center justify-center gap-2" 
              type="submit"
            >
             Show Invoice
            </button>
           </div>
        </form>
      </main>

      {/* Sidebar Quick Tip Card Container Element visible on Desktop viewports */}
      <aside className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 w-80 bg-white rounded-xl shadow-lg p-6 space-y-6 border border-[#c4c6cf]/40">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-[#6bfe9c]/20 flex items-center justify-center text-[#00743a] shrink-0">
            <span className="material-symbols-outlined">receipt_long</span>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold text-[#000613] leading-none mb-1">
              Quick Tip
            </h4>
            <p className="text-[14px] text-[#43474e] leading-relaxed">
              Filter by "Overdue" to prioritize collections and follow up processes efficiently.
            </p>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden bg-[#e1e3e4]">
          <img
            alt="Financial Desktop Analytics Panel Rendering UI metrics layout design overview"
            className="object-cover w-full h-full opacity-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqfe8sqPFc9KhP4Xevewstl8HcnsuiMdULGawJ94IFpCKXU5pQ5Wv9RM2Aym0gSvhGXSC8P6_GxCBaCa7XLUuQslhzBEPO0ZhG28lolJsIAspmBA_VOlhhzUps3hu2t1RxsySNMUwCmigTfPp_9IucYnMgc0hCDVmioGmeyOPgV5McstGsZe1eBTcTa5CYzUOjxg_SIClmKY2N2rvZ_830RKcQ1SCNlh5lgusfOCPsoJyVKgYaonY-tk1vNJ5ajgRgwnmTMYEVW3Y"
          />
        </div>
      </aside>
    </div>
  );
}
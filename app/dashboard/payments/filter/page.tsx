"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type StatusType = "Completed" | "Pending" | "Failed" | "Refunded";
type DatePresetType = "Today" | "Last 7 Days" | "This Month" | "Custom";
type PaymentMethodType = "Bank Transfer" | "Credit Card" | "Mobile Money";

export default function PaymentFiltersPage() {
  const router = useRouter();

  // --- Layout State Management ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- React State Management Engine ---
  const [selectedStatuses, setSelectedStatuses] = useState<StatusType[]>(["Pending"]);
  const [selectedDatePreset, setSelectedDatePreset] = useState<DatePresetType>("Last 7 Days");
  const [startDate, setStartDate] = useState("01/10/2023");
  const [endDate, setEndDate] = useState("08/10/2023");
  const [selectedMethods, setSelectedMethods] = useState<PaymentMethodType[]>(["Credit Card"]);
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  // --- Sidebar Toggle Handlers ---
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // --- Toggle Handlers ---
  const handleToggleStatus = (status: StatusType) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const handleToggleMethod = (method: PaymentMethodType) => {
    setSelectedMethods((prev) =>
      prev.includes(method) ? prev.filter((m) => m !== method) : [...prev, method]
    );
  };

  const handleReset = () => {
    setSelectedStatuses([]);
    setSelectedDatePreset("Custom");
    setStartDate("");
    setEndDate("");
    setSelectedMethods([]);
    setMinAmount("");
    setMaxAmount("");
  };

  const handleApplyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    const filterPayload = {
      statuses: selectedStatuses,
      datePreset: selectedDatePreset,
      startDate,
      endDate,
      methods: selectedMethods,
      amountRange: { min: minAmount, max: maxAmount },
    };
    console.log("Applying structural filters criteria:", filterPayload);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen relative font-sans antialiased flex">
      {/* Material Design Font and Icon Delivery Nodes */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Navigation Drawer */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col flex-shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
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

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col min-w-0">
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
                className="w-full bg-[#f0f4fb] border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#064e3b]/20 transition-all placeholder:text-[#484555] placeholder:opacity-50" 
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

        {/* Main Canvas Context Structure */}
        <main className="pt-8 pb-[120px] px-6 max-w-lg mx-auto w-full">
          <form onSubmit={handleApplyFilters} className="space-y-6">
            
            {/* 1. Status Section */}
            <section className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              <h3 className="text-[12px] font-bold tracking-wider text-[#064e3b] mb-3 px-1 uppercase">
                STATUS
              </h3>
              <div className="flex flex-wrap gap-2">
                {(["Completed", "Pending", "Failed", "Refunded"] as StatusType[]).map((status) => {
                  const isActive = selectedStatuses.includes(status);
                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => handleToggleStatus(status)}
                      className={`px-4 py-2 rounded-lg border text-[14px] font-medium transition-all active:scale-95 ${
                        isActive
                          ? "bg-[#064e3b] text-white border-[#064e3b] shadow-sm"
                          : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#064e3b]/5 hover:border-[#064e3b]/30"
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 2. Date Range Section */}
            <section className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              <h3 className="text-[12px] font-bold tracking-wider text-[#064e3b] mb-3 px-1 uppercase">
                DATE RANGE
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {(["Today", "Last 7 Days", "This Month", "Custom"] as DatePresetType[]).map((preset) => {
                  const isActive = selectedDatePreset === preset;
                  return (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSelectedDatePreset(preset)}
                      className={`px-4 py-2 rounded-lg border text-[14px] font-medium transition-all active:scale-95 ${
                        isActive
                          ? "bg-[#064e3b] text-white border-[#064e3b] shadow-sm"
                          : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#064e3b]/5 hover:border-[#064e3b]/30"
                      }`}
                    >
                      {preset}
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#43474e] ml-1 uppercase">START DATE</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-[20px]">
                      calendar_today
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] outline-none transition-all text-[#191c1d]"
                      type="text"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#43474e] ml-1 uppercase">END DATE</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-[20px]">
                      calendar_today
                    </span>
                    <input
                      className="w-full pl-10 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] outline-none transition-all text-[#191c1d]"
                      type="text"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      placeholder="DD/MM/YYYY"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Payment Method Section */}
            <section className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              <h3 className="text-[12px] font-bold tracking-wider text-[#064e3b] mb-3 px-1 uppercase">
                PAYMENT METHOD
              </h3>
              <div className="flex flex-wrap gap-2">
                {(["Bank Transfer", "Credit Card", "Mobile Money"] as PaymentMethodType[]).map((method) => {
                  const isActive = selectedMethods.includes(method);
                  return (
                    <button
                      key={method}
                      type="button"
                      onClick={() => handleToggleMethod(method)}
                      className={`px-4 py-2 rounded-lg border text-[14px] font-medium transition-all active:scale-95 ${
                        isActive
                          ? "bg-[#064e3b] text-white border-[#064e3b] shadow-sm"
                          : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#064e3b]/5 hover:border-[#064e3b]/30"
                      }`}
                    >
                      {method}
                    </button>
                  );
                })}
              </div>
            </section>

            {/* 4. Amount Range Section */}
            <section className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              <h3 className="text-[12px] font-bold tracking-wider text-[#064e3b] mb-3 px-1 uppercase">
                AMOUNT RANGE
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#43474e] ml-1 uppercase">MIN</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-[14px] font-medium">$</span>
                    <input
                      className="w-full pl-7 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0.00"
                      type="number"
                      value={minAmount}
                      onChange={(e) => setMinAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#43474e] ml-1 uppercase">MAX</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-[14px] font-medium">$</span>
                    <input
                      className="w-full pl-7 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="10,000"
                      type="number"
                      value={maxAmount}
                      onChange={(e) => setMaxAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Dock Navigation Action Anchor Bar */}
            <footer className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-center p-6 bg-white border-t border-[#e1e3e4] shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
              <button
                type="submit"
                className="flex items-center justify-center bg-[#064e3b] hover:bg-[#043327] text-white rounded-lg py-4 w-full active:scale-[0.98] transition-all shadow-lg shadow-[#064e3b]/10"
              >
                <span className="material-symbols-outlined mr-2">check</span>
                <span className="text-[12px] font-semibold tracking-wider text-white uppercase">
                  Apply Filters — Show Transactions
                </span>
              </button>
            </footer>

          </form>
        </main>
      </div>
    </div>
  );
}
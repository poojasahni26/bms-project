"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type StatusType = "Completed" | "Pending" | "Failed" | "Refunded";
type DatePresetType = "Today" | "Last 7 Days" | "This Month" | "Custom";
type PaymentMethodType = "Bank Transfer" | "Credit Card" | "Mobile Money";

export default function PaymentFiltersPage() {
  const router = useRouter();

  // --- React State Management Engine ---
  const [selectedStatuses, setSelectedStatuses] = useState<StatusType[]>(["Pending"]);
  const [selectedDatePreset, setSelectedDatePreset] = useState<DatePresetType>("Last 7 Days");
  const [startDate, setStartDate] = useState("01/10/2023");
  const [endDate, setEndDate] = useState("08/10/2023");
  const [selectedMethods, setSelectedMethods] = useState<PaymentMethodType[]>(["Credit Card"]);
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

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
    // Add logic here to route with search parameters or mutate global contexts
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen relative font-sans antialiased">
      {/* Material Design Font and Icon Delivery Nodes */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Top App Bar Header Wrapper */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 h-[72px] bg-white shadow-sm border-b border-[#e1e3e4]">
        <button
          type="button"
          onClick={() => router.back()}
          className="p-2 rounded-lg hover:bg-[#e7e8e9] transition-colors active:scale-95 flex items-center justify-center"
          aria-label="Close filters"
        >
          <span className="material-symbols-outlined text-[#191c1d]">close</span>
        </button>
        <h1 className="text-[24px] font-semibold tracking-tight text-[#000613]">
          Filters
        </h1>
        <button
          type="button"
          onClick={handleReset}
          className="text-[12px] font-semibold tracking-wider text-[#2f486a] uppercase hover:bg-[#e7e8e9] px-3 py-1.5 rounded transition-colors active:opacity-75"
        >
          Reset
        </button>
      </header>

      {/* Main Canvas Context Structure */}
      <main className="pt-[96px] pb-[120px] px-6 max-w-lg mx-auto">
        <form onSubmit={handleApplyFilters} className="space-y-6">
          
          {/* 1. Status Section */}
          <section className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
            <h3 className="text-[12px] font-semibold tracking-wider text-[#43474e] mb-3 px-1 uppercase">
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
                        ? "bg-[#001f3f] text-white border-[#001f3f] shadow-sm"
                        : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#edeeef]"
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
            <h3 className="text-[12px] font-semibold tracking-wider text-[#43474e] mb-3 px-1 uppercase">
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
                    className={`px-4 py-2 rounded-lg border text-[14px] font-medium transition-all ${
                      isActive
                        ? "bg-[#001f3f] text-white border-[#001f3f] shadow-sm"
                        : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#edeeef]"
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
                    className="w-full pl-10 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all text-[#191c1d]"
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
                    className="w-full pl-10 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all text-[#191c1d]"
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
            <h3 className="text-[12px] font-semibold tracking-wider text-[#43474e] mb-3 px-1 uppercase">
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
                    className={`px-4 py-2 rounded-lg border text-[14px] font-medium transition-all ${
                      isActive
                        ? "bg-[#001f3f] text-white border-[#001f3f] shadow-sm"
                        : "bg-[#f8f9fa] text-[#191c1d] border-[#c4c6cf] hover:bg-[#edeeef]"
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
            <h3 className="text-[12px] font-semibold tracking-wider text-[#43474e] mb-3 px-1 uppercase">
              AMOUNT RANGE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#43474e] ml-1 uppercase">MIN</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-[14px] font-medium">$</span>
                  <input
                    className="w-full pl-7 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                    className="w-full pl-7 pr-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
              className="flex items-center justify-center bg-[#001f3f] hover:bg-[#000613] text-white rounded-lg py-4 w-full active:scale-[0.98] transition-all shadow-lg"
            >
              <span className="material-symbols-outlined mr-2">check</span>
              <span className="text-[12px] font-semibold tracking-wider text-white uppercase">
                Apply Filters — Show  Transactions
              </span>
            </button>
          </footer>

        </form>
      </main>
    </div>
  );
}
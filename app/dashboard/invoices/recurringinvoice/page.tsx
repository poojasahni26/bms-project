"use client";

import React, { useState } from "react";
import Link from "next/link";

interface InvoiceItem {
  id: string;
  title: string;
  description: string;
  amount: number;
}

export default function RecurringInvoicePage() {
  // State management for interactive features
  const [frequency, setFrequency] = useState<string>("Monthly");
  const [neverEnds, setNeverEnds] = useState<boolean>(true);
  const [autoSend, setAutoSend] = useState<boolean>(true);
  const [autoCharge, setAutoCharge] = useState<boolean>(false);
  const [lateReminders, setLateReminders] = useState<boolean>(true);
  
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", title: "Monthly Retainer", description: "Standard management fee", amount: 2500.00 },
    { id: "2", title: "Cloud Infrastructure", description: "Server and storage hosting", amount: 450.00 }
  ]);

  // Calculations
  const totalRecurring = items.reduce((acc, item) => acc + item.amount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form schedule submission here
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen pb-32 font-sans relative">
      {/* Material Icons and Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
      />

      {/* Top App Bar */}
      <header className="flex items-center px-6 w-full sticky top-0 z-40 h-[72px] shadow-sm bg-[#f8f9fa] border-b border-[#c4c6cf]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard/invoices" 
              className="p-2 hover:bg-[#e7e8e9] transition-colors rounded-full flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[#000613]">arrow_back</span>
            </Link>
            <h1 className="text-[20px] font-semibold text-[#000613]">Recurring Invoice</h1>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined text-[#74777f]">help_outline</span>
          </div>
        </div>
      </header>

      {/* Main Content Form Wrapper */}
      <main className="px-4 py-6 space-y-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Section 1: Recurring Schedule */}
          <section className="space-y-3">
            <h2 className="text-[12px] font-semibold uppercase tracking-wider text-[#74777f] ml-1">
              Recurring Schedule
            </h2>
            <div className="bg-white rounded-lg p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30 space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">Frequency</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Monthly", "Weekly", "Bi-weekly", "Custom"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFrequency(type)}
                      className={`py-2 px-3 rounded border text-[14px] text-center transition-all ${
                        frequency === type
                          ? "border-[#000613] bg-[#001f3f] text-white font-medium"
                          : "border-[#c4c6cf] text-[#43474e] hover:bg-slate-50"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">Start Date</label>
                  <input 
                    className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#001f3f] outline-none" 
                    type="date" 
                    defaultValue="2026-05-18"
                  />
                </div>
                <div className={`space-y-2 transition-opacity duration-200 ${neverEnds ? "opacity-40" : "opacity-100"}`}>
                  <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">End Date</label>
                  <input 
                    className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg px-3 py-2 text-[14px] outline-none" 
                    disabled={neverEnds}
                    type="date" 
                    defaultValue="2027-05-18"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[14px] font-medium text-[#191c1d]">Never Ends</span>
                <button 
                  type="button"
                  onClick={() => setNeverEnds(!neverEnds)}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${
                    neverEnds ? "bg-[#006d37]" : "bg-[#c4c6cf]"
                  }`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${
                    neverEnds ? "right-1" : "left-1"
                  }`} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: Billing Details */}
          <section className="space-y-3">
            <h2 className="text-[12px] font-semibold uppercase tracking-wider text-[#74777f] ml-1">
              Billing Details
            </h2>
            <div className="bg-white rounded-lg p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30 space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">Select Client</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#74777f] text-[20px]">search</span>
                  <input 
                    className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg pl-10 pr-3 py-2 text-[14px] focus:ring-2 focus:ring-[#001f3f] outline-none" 
                    placeholder="Search clients..." 
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">Invoice Day</label>
                  <div className="relative">
                    <select className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#001f3f] outline-none appearance-none">
                      <option>1st of month</option>
                      <option>15th of month</option>
                      <option>Last day</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] uppercase tracking-wider">Payment Terms</label>
                  <div className="relative">
                    <select className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg px-3 py-2 text-[14px] focus:ring-2 focus:ring-[#001f3f] outline-none appearance-none">
                      <option>Net 30</option>
                      <option>Net 15</option>
                      <option>Due on Receipt</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Items & Amount */}
          <section className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <h2 className="text-[12px] font-semibold uppercase tracking-wider text-[#74777f]">
                Items & Amount
              </h2>
              <button 
                type="button" 
                className="text-[#006d37] text-[12px] font-bold flex items-center gap-1 hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">add</span> ADD ITEM
              </button>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b border-[#c4c6cf]/20 flex justify-between items-start hover:bg-slate-50 transition-colors">
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#000613]">{item.title}</h4>
                    <p className="text-[14px] text-[#43474e]">{item.description}</p>
                  </div>
                  <span className="text-[14px] text-[#000613] font-bold">${item.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                </div>
              ))}
              <div className="p-4 bg-[#001f3f]/5 flex justify-between items-center">
                <span className="text-[14px] font-bold text-[#000613]">Total Recurring</span>
                <span className="text-[24px] text-[#000613] font-bold tracking-tight">${totalRecurring.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </section>

          {/* Section 4: Automation Settings */}
          <section className="space-y-3">
            <h2 className="text-[12px] font-semibold uppercase tracking-wider text-[#74777f] ml-1">
              Automation Settings
            </h2>
            <div className="bg-white rounded-lg p-1 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]/30">
              
              {/* Toggle 1: Auto-Send */}
              <div className="flex items-center justify-between p-4 border-b border-[#c4c6cf]/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00743a]">send</span>
                  <span className="text-[14px] font-medium text-[#191c1d]">Auto-send Invoice</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setAutoSend(!autoSend)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 focus:outline-none ${
                    autoSend ? "bg-[#006d37]" : "bg-[#c4c6cf]"
                  }`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow transition-all duration-200 ${
                    autoSend ? "right-1" : "left-1"
                  }`} />
                </button>
              </div>

              {/* Toggle 2: Auto-Charge */}
              <div className="flex items-center justify-between p-4 border-b border-[#c4c6cf]/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00743a]">account_balance_wallet</span>
                  <span className="text-[14px] font-medium text-[#191c1d]">Auto-charge Payment</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setAutoCharge(!autoCharge)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 focus:outline-none ${
                    autoCharge ? "bg-[#006d37]" : "bg-[#c4c6cf]"
                  }`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow transition-all duration-200 ${
                    autoCharge ? "right-1" : "left-1"
                  }`} />
                </button>
              </div>

              {/* Toggle 3: Late Fee Reminders */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00743a]">notifications_active</span>
                  <span className="text-[14px] font-medium text-[#191c1d]">Late Fee Reminders</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setLateReminders(!lateReminders)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 focus:outline-none ${
                    lateReminders ? "bg-[#006d37]" : "bg-[#c4c6cf]"
                  }`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full shadow transition-all duration-200 ${
                    lateReminders ? "right-1" : "left-1"
                  }`} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 5: Future Execution Summary Banner */}
          <section className="bg-[#6bfe9c]/10 border border-[#6bfe9c] rounded-lg p-4 flex gap-4 items-center">
            <div className="bg-[#6bfe9c] p-3 rounded-lg text-[#00743a] flex items-center justify-center">
              <span className="material-symbols-outlined">event_repeat</span>
            </div>
            <div>
              <p className="text-[14px] text-[#00743a]">Next invoice will be generated on</p>
              <p className="text-[16px] font-bold text-[#00743a]">June 1, 2026</p>
              <p className="text-[12px] font-semibold tracking-wider text-[#00743a]/70 mt-1 uppercase">
                TOTAL AMOUNT: ${totalRecurring.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </section>

          {/* Fixed Bottom Action Button Bar */}
           <div className="flex flex-col gap-3 pt-4">
            <button 
              className="w-full h-14 bg-slate-950 text-white text-base font-semibold rounded-lg shadow-lg active:scale-[0.98] transition-all hover:bg-slate-800 flex items-center justify-center gap-2" 
              type="submit"
            >
             Set Schedule
            </button>
          </div>
        </form>
      </main>

      {/* Amorphous Decorative Canvas Elements (Gradients) */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#001f3f]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-[#006d37]/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
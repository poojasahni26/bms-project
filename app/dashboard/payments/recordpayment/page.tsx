"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RecordPaymentPage() {
  const router = useRouter();

  // --- Layout State Management Engine ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // State Management for Form Fields
  const [invoice, setInvoice] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [method, setMethod] = useState("");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission API payload processing logic here
    console.log({ invoice, amount, date, method, reference, notes });
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen relative font-sans antialiased selection:bg-[#afc8f0] flex">
      {/* Dynamic Font and Style Injectors */}
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

      {/* Main Content Area Wrapper */}
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

        {/* Form Context wrapper */}
        <main className="max-w-xl mx-auto p-6 pb-48 w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Select Invoice */}
            <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
              <label className="block text-[12px] font-bold text-[#064e3b] mb-2 uppercase tracking-wider" htmlFor="invoice-select">
                Select Invoice
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#74777f] text-[14px]">search</span>
                </div>
                <input
                  className="w-full border border-[#e9ecef] rounded-lg p-3 pl-10 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors"
                  id="invoice-select"
                  type="text"
                  placeholder="Search invoices..."
                  value={invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                />
              </div>
              <p className="mt-2 text-xs text-[#43474e] italic">Showing recent unpaid invoices</p>
            </div>

            {/* Section 2: Payment Details */}
            <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
              <h2 className="text-[12px] font-bold tracking-wider text-[#064e3b] mb-4 uppercase">
                PAYMENT DETAILS
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-[#43474e] text-[14px] font-medium">$</span>
                    </div>
                    <input
                      className="w-full border border-[#e9ecef] rounded-lg p-3 pl-8 text-[14px] text-[#191c1d] font-medium focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      id="amount"
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="date">
                      Payment Date
                    </label>
                    <input
                      className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors bg-white"
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="method">
                      Payment Method
                    </label>
                    <select
                      className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors bg-white cursor-pointer"
                      id="method"
                      value={method}
                      onChange={(e) => setMethod(e.target.value)}
                    >
                      <option value="">Select Method</option>
                      <option value="bank">Bank Transfer</option>
                      <option value="card">Credit Card</option>
                      <option value="cash">Cash</option>
                      <option value="mobile">Mobile Money</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Transaction Reference */}
            <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
              <label className="block text-[12px] font-bold text-[#064e3b] mb-2 uppercase tracking-wider" htmlFor="reference">
                Transaction Reference
              </label>
              <input
                className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors"
                id="reference"
                type="text"
                placeholder="Reference Number or Transaction ID"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>

            {/* Section 4: Notes */}
            <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
              <label className="block text-[12px] font-bold text-[#064e3b] mb-2 uppercase tracking-wider" htmlFor="notes">
                Notes
              </label>
              <textarea
                className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#064e3b] focus:ring-1 focus:ring-[#064e3b] transition-colors resize-none"
                id="notes"
                rows={3}
                placeholder="Add internal notes about this payment..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Fixed Lower Action Drawer Docking */}
            <div className="flex flex-col gap-3 pt-4">
              <button 
                className="w-full h-14 bg-[#064e3b] text-white text-base font-semibold rounded-lg shadow-lg shadow-[#064e3b]/10 active:scale-[0.98] transition-all hover:bg-[#043327] flex items-center justify-center gap-2" 
                type="submit"
              >
                Record Payment
              </button>
              <button 
                type="button" 
                className="w-full h-14 bg-white text-slate-800 border border-slate-200 text-base font-semibold rounded-lg hover:bg-slate-50 hover:text-[#064e3b] hover:border-[#064e3b]/30 active:scale-[0.98] transition-all flex items-center justify-center" 
                onClick={() => router.push('/dashboard/clients')}
              >
                Cancel
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Ambient Pattern Decorative Blur Layout Layer */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#064e3b]/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#064e3b]/30 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
}
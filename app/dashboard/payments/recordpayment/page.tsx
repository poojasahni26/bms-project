"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecordPaymentPage() {
  const router = useRouter();

  // State Management for Form Fields
  const [invoice, setInvoice] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [method, setMethod] = useState("");
  const [reference, setReference] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission API payload processing logic here
    console.log({ invoice, amount, date, method, reference, notes });
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen relative font-sans antialiased selection:bg-[#afc8f0]">
      {/* Dynamic Font and Style Injectors */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Top Navigation Bar */}
      <header className="h-[72px] sticky top-0 w-full bg-[#f8f9fa] border-b border-[#c4c6cf] flex items-center px-6 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#e7e8e9] transition-transform active:scale-95"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-[#191c1d]">arrow_back</span>
          </button>
          <h1 className="text-[20px] leading-[1.4] font-semibold text-[#191c1d]">
            Record Payment
          </h1>
        </div>
      </header>

      {/* Form Context wrapper */}
      <main className="max-w-xl mx-auto p-6 pb-48">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Section 1: Select Invoice */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
            <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="invoice-select">
              Select Invoice
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#74777f] text-[14px]">search</span>
              </div>
              <input
                className="w-full border border-[#e9ecef] rounded-lg p-3 pl-10 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors"
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
            <h2 className="text-[12px] font-semibold tracking-wider text-[#43474e] mb-4 uppercase">
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
                    className="w-full border border-[#e9ecef] rounded-lg p-3 pl-8 text-[14px] text-[#191c1d] font-medium focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
                    className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors bg-white"
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
                    className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors bg-white cursor-pointer"
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
            <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="reference">
              Transaction Reference
            </label>
            <input
              className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors"
              id="reference"
              type="text"
              placeholder="Reference Number or Transaction ID"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>

          {/* Section 4: Notes */}
          <div className="bg-white rounded-lg p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e9ecef]">
            <label className="block text-[12px] font-semibold text-[#43474e] mb-2" htmlFor="notes">
              Notes
            </label>
            <textarea
              className="w-full border border-[#e9ecef] rounded-lg p-3 text-[14px] text-[#191c1d] focus:outline-none focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] transition-colors resize-none"
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
              className="w-full h-14 bg-slate-950 text-white text-base font-semibold rounded-lg shadow-lg active:scale-[0.98] transition-all hover:bg-slate-800 flex items-center justify-center gap-2" 
              type="submit"
            >
             Record Payment
            </button>
            <button type="button" className="w-full h-14 bg-white text-slate-800 border border-slate-200 text-base font-semibold rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center" onClick={() => router.push('/dashboard/clients')}>
              Cancel
            </button>
           </div>
        </form>
      </main>

      {/* Ambient Pattern Decorative Blur Layout Layer */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#afc8f0] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4ae183] rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
}
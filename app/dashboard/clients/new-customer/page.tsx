"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AddCustomerPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] w-full">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
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
          <Link href="/dashboard/payments" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-medium">Payments</span>
          </Link>
          <Link href="/dashboard/clients" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all rounded-lg">
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
        <div className="px-6 mb-20 md:mb-10 flex items-center gap-3 border-t border-[#c9c4d8]/30 pt-4">
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
      <main className="flex-grow flex flex-col min-w-0 pb-16 md:pb-0">
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

        {/* Form Container */}
        <div className="px-4 md:px-6 max-w-2xl mx-auto py-12 w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#064e3b]">Add New Customer</h1>
            <p className="mt-1 text-slate-500">Register corporate accounts and set global parameters.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Basic Information */}
            <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <span className="material-symbols-outlined text-[#064e3b]">badge</span>
                <h2 className="text-lg font-bold text-[#064e3b]">Basic Information</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Full Name / Company Name
                  </label>
                  <input 
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm" 
                    placeholder="e.g. Acme Corp" 
                    type="text" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Primary Email
                  </label>
                  <input 
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm" 
                    placeholder="billing@acme.com" 
                    type="email" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Phone Number
                  </label>
                  <input 
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm" 
                    placeholder="+1 (555) 000-0000" 
                    type="tel" 
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Billing Details */}
            <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <span className="material-symbols-outlined text-[#064e3b]">account_balance_wallet</span>
                <h2 className="text-lg font-bold text-[#064e3b]">Billing Details</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Billing Address
                  </label>
                  <textarea 
                    className="w-full p-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm resize-none" 
                    placeholder="Street, City, State, ZIP Code" 
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                      Tax ID / VAT Number
                    </label>
                    <input 
                      className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm" 
                      placeholder="IE 1234567 X" 
                      type="text" 
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                      Preferred Currency
                    </label>
                    <div className="relative">
                      <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm appearance-none">
                        <option>USD - US Dollar</option>
                        <option>EUR - Euro</option>
                        <option>GBP - British Pound</option>
                        <option>JPY - Japanese Yen</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Institutional Data */}
            <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
                <span className="material-symbols-outlined text-[#064e3b]">corporate_fare</span>
                <h2 className="text-lg font-bold text-[#064e3b]">Institutional Data</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Industry Type
                  </label>
                  <div className="relative">
                    <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm appearance-none">
                      <option>Technology</option>
                      <option>Manufacturing</option>
                      <option>Professional Services</option>
                      <option>Healthcare</option>
                      <option>Retail & E-commerce</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Account Manager
                  </label>
                  <div className="relative">
                    <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#064e3b]/20 focus:border-[#064e3b] transition-all text-sm appearance-none">
                      <option>Assign Manager...</option>
                      <option>Sarah Jenkins</option>
                      <option>Michael Chen</option>
                      <option>Alex Rodriguez</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xl">expand_more</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <button 
                className="w-full h-14 bg-[#064e3b] text-white text-base font-semibold rounded-lg shadow-md active:scale-[0.98] transition-all hover:bg-[#064e3b]/90 flex items-center justify-center gap-2" 
                type="submit"
              >
                <span className="material-symbols-outlined text-xl">save</span>
                Save Customer
              </button>
              <Link className="w-full h-14 bg-white text-slate-700 border border-slate-200 text-base font-semibold rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center" href="/dashboard/clients">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>

      {/* Mobile Sticky Navigation Menu */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white py-2 md:hidden">
        {["Home", "Invoices", "Clients", "Settings"].map((item) => (
          <button
            key={item}
            className={`flex flex-col items-center gap-1 text-[10px] transition-colors ${
              item === "Clients" ? "font-bold text-[#064e3b]" : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
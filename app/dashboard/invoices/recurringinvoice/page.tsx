'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CombinedRecurringInvoicePage() {
  // Mobile Sidebar Drawer Controller
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Form Interactivity States
  const [frequency, setFrequency] = useState<'Monthly' | 'Weekly' | 'Bi-weekly' | 'Custom'>('Monthly');
  const [neverEnds, setNeverEnds] = useState(true);
  const [autoSend, setAutoSend] = useState(true);
  const [autoCharge, setAutoCharge] = useState(false);
  const [lateReminders, setLateReminders] = useState(true);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans min-h-screen lg:flex relative">
      {/* Dynamic Font & Vector Asset Header Tags */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* Sidebar Overlay for Mobile Viewports */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300" 
          onClick={toggleSidebar}
        />
      )}

      {/* Navigation Drawer (BMS Persistent/Sliding Sidebar) */}
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
          <Link href="/dashboard/invoices" className="text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all rounded-lg">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-sm font-medium">Invoices</span>
          </Link>
          <Link href="/dashboard/payments" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all rounded-lg">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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

      {/* Main Content Workspace Content wrapper */}
      <div className="flex-grow flex flex-col min-w-0 pb-32">
        
        {/* Unified Top App Bar Header portion */}
        <header className="w-full sticky top-0 z-50 bg-white border-b border-[#c9c4d8] px-4 md:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 hover:bg-[#f0f4fb] rounded-full transition-colors" onClick={toggleSidebar}>
              <span className="material-symbols-outlined text-[#064e3b]">menu</span>
            </button>
            <Link href="/dashboard/invoices" className="p-1.5 hover:bg-[#f0f4fb] rounded-full transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[#064e3b] text-[22px]">arrow_back</span>
            </Link>
            <h1 className="hidden md:block text-xl text-[#064e3b] font-bold">Billing Management</h1>
            <h1 className="md:hidden text-xl text-[#064e3b] font-bold">BMS</h1>
          </div>

          {/* Search Engine Field */}
          <div className="flex-grow max-w-xl px-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#484555] opacity-60 group-focus-within:text-[#064e3b] transition-colors">search</span>
              <input 
                className="w-full bg-[#f0f4fb] border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#064e3b]/20 transition-all placeholder:text-[#484555] placeholder:opacity-50 outline-none" 
                placeholder="Search invoices, clients, or reports..." 
                type="text" 
              />
            </div>
          </div>

          {/* Identity Notification Cluster */}
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

        {/* Dynamic Workflow Stage Title Breadcrumb */}
        <div className="px-4 md:px-8 pt-6 max-w-3xl mx-auto w-full">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">
            <Link href="/dashboard/invoices" className="hover:text-[#064e3b] transition-colors">Invoices</Link>
            <span>/</span>
            <span className="text-slate-800">Setup Recurring Schedule</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Configure Recurring Invoice</h2>
        </div>

        {/* Primary Functional Stream Inputs */}
        <main className="px-4 md:px-8 py-4 space-y-6 max-w-3xl mx-auto w-full">
          
          {/* Section 1: Recurring Schedule Settings Card */}
          <section className="space-y-3">
            <h3 className="text-[12px] font-bold tracking-wider uppercase ml-1 text-[#064e3b]">Recurring Schedule</h3>
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#c9c4d8]/50 space-y-5">
              
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">Frequency Options</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(['Monthly', 'Weekly', 'Bi-weekly', 'Custom'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFrequency(item)}
                      className={`py-2.5 px-3 rounded-lg border text-sm font-medium text-center transition-all ${
                        frequency === item
                          ? 'bg-[#064e3b] border-[#064e3b] text-white shadow-sm'
                          : 'bg-transparent border-[#c9c4d8] text-[#43474e] hover:bg-[#f0f4fb]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">Start Date</label>
                  <input 
                    className="w-full bg-[#f0f4fb] border border-[#c9c4d8]/40 rounded-lg px-3 py-2 text-sm text-[#191c1d] focus:ring-2 focus:ring-[#064e3b]/30 outline-none" 
                    type="date" 
                    defaultValue="2023-11-01"
                  />
                </div>
                <div className={`space-y-2 transition-opacity duration-200 ${neverEnds ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}>
                  <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">End Date</label>
                  <input 
                    className="w-full bg-[#f0f4fb] border border-[#c9c4d8]/40 rounded-lg px-3 py-2 text-sm text-[#191c1d] outline-none" 
                    disabled={neverEnds} 
                    type="date" 
                    defaultValue="2024-11-01"
                  />
                </div>
              </div>

              {/* Never Ends Toggle Switch */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-sm text-[#191c1d] font-semibold">Never Ends (Indefinite Contract)</span>
                <button 
                  type="button"
                  onClick={() => setNeverEnds(!neverEnds)}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${neverEnds ? 'bg-[#064e3b]' : 'bg-[#c9c4d8]'}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 ${neverEnds ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </section>

          {/* Section 2: Billing Matrix Core Information */}
          <section className="space-y-3">
            <h3 className="text-[12px] font-bold tracking-wider uppercase ml-1 text-[#064e3b]">Billing Details</h3>
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#c9c4d8]/50 space-y-4">
              <div className="space-y-2">
                <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">Select Client</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#484555] opacity-60 text-[20px]">search</span>
                  <input 
                    className="w-full bg-[#f0f4fb] border border-[#c9c4d8]/40 rounded-lg pl-10 pr-3 py-2 text-sm focus:ring-2 focus:ring-[#064e3b]/30 outline-none placeholder:text-[#484555]/40" 
                    placeholder="Search active accounts..." 
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">Invoice Cycle Run Day</label>
                  <select className="w-full bg-[#f0f4fb] border border-[#c9c4d8]/40 rounded-lg px-3 py-2 text-sm text-[#191c1d] focus:ring-2 focus:ring-[#064e3b]/30 outline-none">
                    <option>1st of month</option>
                    <option>15th of month</option>
                    <option>Last day of month</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-semibold text-[#43474e] tracking-wider uppercase">Payment Due Terms</label>
                  <select className="w-full bg-[#f0f4fb] border border-[#c9c4d8]/40 rounded-lg px-3 py-2 text-sm text-[#191c1d] focus:ring-2 focus:ring-[#064e3b]/30 outline-none">
                    <option>Net 30</option>
                    <option>Net 15</option>
                    <option>Due on Receipt</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Line Items Ledger Sub-panel */}
          <section className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <h3 className="text-[12px] font-bold tracking-wider uppercase text-[#064e3b]">Items &amp; Amount</h3>
              <button type="button" className="text-[#064e3b] text-[12px] font-bold flex items-center gap-1 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-[16px]">add</span> ADD LINE ITEM
              </button>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#c9c4d8]/50">
              <div className="p-5 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Monthly Retainer</h4>
                  <p className="text-sm text-[#43474e]">Standard management fee</p>
                </div>
                <span className="text-base font-bold text-slate-900">$2,500.00</span>
              </div>
              <div className="p-5 border-b border-slate-100 flex justify-between items-start">
                <div>
                  <h4 className="text-base font-semibold text-slate-900">Cloud Infrastructure</h4>
                  <p className="text-sm text-[#43474e]">Server and storage hosting</p>
                </div>
                <span className="text-base font-bold text-slate-900">$450.00</span>
              </div>
              <div className="p-5 bg-[#064e3b]/5 flex justify-between items-center">
                <span className="text-sm font-bold text-[#064e3b]">Total Recurring Subtotal</span>
                <span className="text-2xl text-[#064e3b] font-extrabold tracking-tight">$2,950.00</span>
              </div>
            </div>
          </section>

          {/* Section 4: Automation Engine Toggles */}
          <section className="space-y-3">
            <h3 className="text-[12px] font-bold tracking-wider uppercase ml-1 text-[#064e3b]">Automation Engine Settings</h3>
            <div className="bg-white rounded-xl p-1 shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-[#c9c4d8]/50">
              
              {/* Auto-send */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#064e3b]">send</span>
                  <span className="text-sm text-[#191c1d] font-medium">Auto-send Generated Invoices</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setAutoSend(!autoSend)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${autoSend ? 'bg-[#064e3b]' : 'bg-[#c9c4d8]'}`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ${autoSend ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Auto-charge */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#064e3b]">account_balance_wallet</span>
                  <span className="text-sm text-[#191c1d] font-medium">Auto-charge Stored Payment Method</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setAutoCharge(!autoCharge)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${autoCharge ? 'bg-[#064e3b]' : 'bg-[#c9c4d8]'}`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ${autoCharge ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

              {/* Late Fee Reminders */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#064e3b]">notifications_active</span>
                  <span className="text-sm text-[#191c1d] font-medium">Dispatch Dunning / Late Fee Reminders</span>
                </div>
                <button 
                  type="button"
                  onClick={() => setLateReminders(!lateReminders)}
                  className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${lateReminders ? 'bg-[#064e3b]' : 'bg-[#c9c4d8]'}`}
                >
                  <span className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-200 ${lateReminders ? 'right-1' : 'left-1'}`} />
                </button>
              </div>

            </div>
          </section>

          {/* Section 5: Engine Run Summary Banner */}
          <section className="bg-emerald-50 border border-[#064e3b]/30 rounded-xl p-5 flex gap-4 items-center">
            <div className="text-white p-3 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0 shadow-sm">
              <span className="material-symbols-outlined">event_repeat</span>
            </div>
            <div>
              <p className="text-sm text-slate-700 font-medium">Next generation trigger runtime date</p>
              <p className="text-xl font-extrabold text-[#064e3b]">November 1, 2023</p>
              <p className="text-[11px] font-bold tracking-wider text-slate-500 mt-1 uppercase">RECURRING COMMITMENT VALUE: $2,950.00</p>
            </div>
          </section>
        </main>

        {/* Fixed Sticky Action Bar Content Controls (Responsive Padding Margin adjustment) */}
        <div className="fixed bottom-0 right-0 w-full lg:w-[calc(100%-280px)] bg-white p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-50 border-t border-[#c9c4d8]/40 flex justify-end">
          <div className="w-full max-w-3xl mx-auto flex gap-3 justify-end">
            <Link href="/dashboard/invoices" className="px-5 py-3 border border-[#c9c4d8] text-slate-700 font-medium rounded-lg text-sm hover:bg-slate-50 transition-colors flex items-center justify-center">
              Cancel
            </Link>
            <button type="button" className="px-8 py-3 text-white rounded-lg text-sm font-semibold hover:opacity-95 transition-all active:scale-[0.99] bg-[#064e3b] shadow-md shadow-emerald-900/10 flex items-center justify-center gap-2">
              Save &amp; Active Schedule
            </button>
          </div>
        </div>

        {/* Ambient Dynamic Background Blurs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-[#064e3b]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[20%] w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

      </div>
    </div>
  );
}
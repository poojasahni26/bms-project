'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RecurringInvoicesPage() {
  // Sidebar State Tracking Logic
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex bg-[#f8f9fa]">
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

      {/* Main Content Area Container */}
      <div className="flex-grow flex flex-col min-w-0 w-full">
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
                className="w-full bg-[#f0f4fb] border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#064e3b]/20 transition-all placeholder:text-[#484555] placeholder:opacity-50 outline-none" 
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

        {/* Invoice Target Context View wrapper */}
        <div className="bg-surface text-on-surface min-h-[calc(100vh-topbar-height)] pb-32 relative flex-grow">
          <main className="px-4 py-6 space-y-6 max-w-md mx-auto">
            {/* Section 1: Recurring Schedule */}
            <section className="space-y-3">
              <h2 className="font-label-caps text-label-caps uppercase tracking-wider ml-1 text-secondary">Recurring Schedule</h2>
              <div className="bg-surface-container-lowest rounded-lg p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 space-y-4">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Frequency</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="py-2 px-3 rounded border text-on-primary font-body-md text-body-md text-center bg-secondary border-secondary">Monthly</button>
                    <button className="py-2 px-3 rounded border border-outline-variant text-on-surface-variant font-body-md text-body-md text-center">Weekly</button>
                    <button className="py-2 px-3 rounded border border-outline-variant text-on-surface-variant font-body-md text-body-md text-center">Bi-weekly</button>
                    <button className="py-2 px-3 rounded border border-outline-variant text-on-surface-variant font-body-md text-body-md text-center">Custom</button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Start Date</label>
                    <input 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary outline-none" 
                      type="date" 
                      defaultValue="2023-11-01"
                    />
                  </div>
                  <div className="space-y-2 opacity-50">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">End Date</label>
                    <input 
                      className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md outline-none" 
                      disabled 
                      type="date" 
                      defaultValue="2024-11-01"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-body-md text-body-md text-on-surface">Never Ends</span>
                  <button className="w-12 h-6 bg-secondary rounded-full relative transition-colors">
                    <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                  </button>
                </div>
              </div>
            </section>

            {/* Section 2: Billing Details */}
            <section className="space-y-3">
              <h2 className="font-label-caps text-label-caps uppercase tracking-wider ml-1 text-secondary">Billing Details</h2>
              <div className="bg-surface-container-lowest rounded-lg p-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30 space-y-4">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Select Client</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[20px]">search</span>
                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-3 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary outline-none" placeholder="Search clients..." type="text"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Invoice Day</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary outline-none appearance-none" defaultValue="1st of month">
                      <option>1st of month</option>
                      <option>15th of month</option>
                      <option>Last day</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Payment Terms</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-3 py-2 font-body-md text-body-md focus:ring-2 focus:ring-primary outline-none appearance-none" defaultValue="Net 30">
                      <option>Net 30</option>
                      <option>Net 15</option>
                      <option>Due on Receipt</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Items & Amount */}
            <section className="space-y-3">
              <div className="flex items-center justify-between ml-1">
                <h2 className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Items &amp; Amount</h2>
                <button className="text-secondary font-label-caps text-label-caps flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">add</span> ADD ITEM
                </button>
              </div>
              <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
                <div className="p-4 border-b border-outline-variant/20 flex justify-between items-start">
                  <div>
                    <h4 className="font-body-lg text-body-lg font-semibold text-primary">Monthly Retainer</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Standard management fee</p>
                  </div>
                  <span className="font-tabular-nums text-tabular-nums text-primary font-bold">$2,500.00</span>
                </div>
                <div className="p-4 border-b border-outline-variant/20 flex justify-between items-start">
                  <div>
                    <h4 className="font-body-lg text-body-lg font-semibold text-primary">Cloud Infrastructure</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Server and storage hosting</p>
                  </div>
                  <span className="font-tabular-nums text-tabular-nums text-primary font-bold">$450.00</span>
                </div>
                <div className="p-4 bg-primary/5 flex justify-between items-center">
                  <span className="font-body-md text-body-md font-bold text-primary">Total Recurring</span>
                  <span className="font-h2 text-h2 text-primary font-bold tracking-tight">$2,950.00</span>
                </div>
              </div>
            </section>

            {/* Section 4: Automation Settings */}
            <section className="space-y-3">
              <h2 className="font-label-caps text-label-caps uppercase tracking-wider ml-1 text-secondary">Automation Settings</h2>
              <div className="bg-surface-container-lowest rounded-lg p-1 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-outline-variant/30">
                <div className="flex items-center justify-between p-4 border-b border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">send</span>
                    <span className="font-body-md text-body-md text-on-surface">Auto-send Invoice</span>
                  </div>
                  <button className="w-10 h-5 bg-secondary rounded-full relative transition-colors">
                    <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">account_balance_wallet</span>
                    <span className="font-body-md text-body-md text-on-surface">Auto-charge Payment</span>
                  </div>
                  <button className="w-10 h-5 bg-outline-variant rounded-full relative transition-colors">
                    <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary">notifications_active</span>
                    <span className="font-body-md text-body-md text-on-surface">Late Fee Reminders</span>
                  </div>
                  <button className="w-10 h-5 bg-secondary rounded-full relative transition-colors">
                    <span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span>
                  </button>
                </div>
              </div>
            </section>

            {/* Section 5: Summary */}
            <section className="bg-secondary-container/20 border border-secondary rounded-lg p-4 flex gap-4 items-center">
              <div className="text-white p-3 rounded-lg bg-secondary">
                <span className="material-symbols-outlined">event_repeat</span>
              </div>
              <div>
                <p className="font-body-md text-body-md text-primary font-medium">Next invoice will be generated on</p>
                <p className="font-body-lg text-body-lg font-bold text-primary">November 1, 2023</p>
                <p className="font-label-caps text-label-caps text-primary/70 mt-1">TOTAL AMOUNT: $2,950.00</p>
              </div>
            </section>
          </main>

          {/* Bottom Action Bar */}
          <div className="fixed bottom-0 left-0 lg:left-[280px] w-full lg:w-[calc(100%-280px)] bg-surface-container-lowest p-6 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-50">
            <button className="w-full text-on-primary py-4 rounded-lg font-h3 text-h3 hover:opacity-90 transition-opacity active:scale-[0.98] transform flex items-center justify-center gap-2 bg-secondary">
              Set Schedule
            </button>
          </div>

          {/* Background Decoration */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
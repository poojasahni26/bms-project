'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InvoiceDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-sans min-h-screen lg:flex">
      {/* Material Symbols & Inter Font Imports */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* Sidebar Overlay for Mobile Viewports */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300" 
          onClick={toggleSidebar}
        />
      )}

     
      {/* Navigation Drawer */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white">bolt</span>
          </div>
          <h1 className="text-xl text-[#064e3b] font-bold">Green Telecom BMS</h1>
        </div>

        <nav className="flex-1 space-y-1 text-lg px-4">
          <Link href="/dashboard" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/invoices" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">receipt_long</span>
            <span className="text-sm font-medium">Invoices</span>
          </Link>
          <Link href="/dashboard/payments" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">payments</span>
            <span className="text-sm font-medium">Payments</span>
          </Link>
          <Link href="/dashboard/clients" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Clients</span>
          </Link>
          <Link href="/dashboard/reports" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm font-medium">Reports</span>
          </Link>
          <Link href="/dashboard/settings" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all duration-200">
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

        <main className="flex-1 pb-24 md:pb-6">
          {/* Mobile Search Feed */}
          <section className="p-4 md:px-6 md:pt-6 md:pb-2">
            <div className="md:hidden mb-4">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#74777f] text-xl">search</span>
                <input 
                  className="w-full bg-white border border-[#c4c6cf] rounded-lg pl-11 py-3 text-base shadow-sm outline-none" 
                  placeholder="Search invoices..." 
                  type="text" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="hidden md:flex flex-col">
                <div className="flex items-center gap-2 text-[#43474e] mb-1">
                  <span className="material-symbols-outlined text-base">dashboard_customize</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Dashboard</span>
                </div>
                <p className="text-xs text-[#43474e]">OVERVIEW & ANALYTICS</p>
              </div>
              <button className="bg-[#003d29] text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#00A76F] transition-colors shadow-sm ml-auto active:scale-95">
                <span className="material-symbols-outlined text-lg">add_circle</span>
                Issue Invoice
              </button>
            </div>
          </section>

          {/* Metric KPI Blocks Row */}
          <section className="p-4 md:px-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex md:grid md:grid-cols-4 gap-4 w-max md:w-full">
              {/* Card 1: Total Revenue */}
              <div className="w-[260px] md:w-full h-[150px] rounded-2xl p-5 bg-[#00A76F] text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-bold opacity-90 uppercase">Total Revenue</span>
                  <span className="material-symbols-outlined opacity-90">trending_up</span>
                </div>
                <div className="z-10">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">$294,950</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">INVOICED TOTAL</span>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              </div>

              {/* Card 2: Pending Bills */}
              <div className="w-[180px] md:w-full h-[150px] rounded-2xl p-5 bg-[#00A3FF] text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-bold opacity-90 uppercase">Pending Bills</span>
                  <span className="material-symbols-outlined opacity-90">receipt_long</span>
                </div>
                <div className="z-10">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">42</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">8 PRIORITY INVOICES</span>
                </div>
                <div className="absolute -left-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              </div>

              {/* Card 3: New Customers */}
              <div className="w-[180px] md:w-full h-[150px] rounded-2xl p-5 bg-[#05CD99] text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-bold opacity-90 uppercase">New Customers</span>
                  <span className="material-symbols-outlined opacity-90">person_add</span>
                </div>
                <div className="z-10">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">128</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">INCREASED BY 5%</span>
                </div>
                <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              </div>

              {/* Card 4: Overdue Payments */}
              <div className="w-[180px] md:w-full h-[150px] rounded-2xl p-5 bg-[#3B49DF] text-white relative overflow-hidden shadow-lg flex flex-col justify-between">
                <div className="flex justify-between items-start z-10">
                  <span className="text-xs font-bold opacity-90 uppercase">Overdue Payments</span>
                  <span className="material-symbols-outlined opacity-90">warning</span>
                </div>
                <div className="z-10">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">$14,230</h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase">Attention required</span>
                </div>
              </div>
            </div>
          </section>

          {/* Invoice Processing Feed Table Section */}
          <section className="px-4 md:px-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#191c1d]">Recent Invoices</h3>
              <button className="text-[#00A76F] font-bold text-xs uppercase tracking-wider">See All</button>
            </div>
            
            <div className="flex flex-col bg-white rounded-xl shadow-sm border border-[#c4c6cf]/30">
              {/* Row 1 */}
              <div className="flex items-center justify-between p-3 border-b border-[#c4c6cf]/30 hover:bg-[#f3f4f5] transition-colors cursor-pointer">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-[#00A76F] text-[10px] uppercase">INV-2026-005</p>
                    <span className="bg-[#ffdad6] text-[#ba1a1a] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">Overdue</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#191c1d] truncate">Vertex Solutions</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#43474e]">
                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                    <span className="truncate">Main Campus</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-sm text-[#191c1d]">$14,230.50</p>
                  <p className="text-[10px] text-[#ba1a1a] font-medium">Due Yesterday</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between p-3 border-b border-[#c4c6cf]/30 hover:bg-[#f3f4f5] transition-colors cursor-pointer">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-[#00A76F] text-[10px] uppercase">INV-2026-004</p>
                    <span className="bg-[#00A3FF]/10 text-[#00A3FF] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">Pending</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#191c1d] truncate">Cloud Scale Ltd</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#43474e]">
                    <span className="material-symbols-outlined text-[12px]">apartment</span>
                    <span className="truncate">HQ Office</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-sm text-[#191c1d]">$8,400.00</p>
                  <p className="text-[10px] text-[#43474e]">In 5 days</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between p-3 border-b border-[#c4c6cf]/30 hover:bg-[#f3f4f5] transition-colors cursor-pointer">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-[#00A76F] text-[10px] uppercase">INV-2026-003</p>
                    <span className="bg-[#00A76F]/10 text-[#00A76F] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">Paid</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#191c1d] truncate">Green Tech Inc</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#43474e]">
                    <span className="material-symbols-outlined text-[12px]">factory</span>
                    <span className="truncate">Sub-station 4</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-sm text-[#191c1d]">$$22,150.00</p>
                  <p className="text-[10px] text-[#00A76F] font-medium">Oct 23, 2026</p>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between p-3 border-b border-[#c4c6cf]/30 hover:bg-[#f3f4f5] transition-colors cursor-pointer">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-[#00A76F] text-[10px] uppercase">INV-2026-002</p>
                    <span className="bg-[#00A76F]/10 text-[#00A76F] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">Paid</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#191c1d] truncate">Global Net Co</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#43474e]">
                    <span className="material-symbols-outlined text-[12px]">router</span>
                    <span className="truncate">Node 7A</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-sm text-[#191c1d]">$12,000.00</p>
                  <p className="text-[10px] text-[#00A76F] font-medium">Oct 21, 2026</p>
                </div>
              </div>

              {/* Row 5 */}
              <div className="flex items-center justify-between p-3 border-b border-[#c4c6cf]/30 hover:bg-[#f3f4f5] transition-colors cursor-pointer">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-bold text-[#00A76F] text-[10px] uppercase">INV-2026-001</p>
                    <span className="bg-[#00A76F]/10 text-[#00A76F] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">Paid</span>
                  </div>
                  <h4 className="font-semibold text-sm text-[#191c1d] truncate">Vertex Solutions</h4>
                  <div className="flex items-center gap-1 text-[10px] text-[#43474e]">
                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                    <span className="truncate">Main Campus</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-bold text-sm text-[#191c1d]">$45,000.00</p>
                  <p className="text-[10px] text-[#00A76F] font-medium">Oct 18, 2026</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Floating Add Action Trigger Button for Smaller Device Viewports */}
        <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#003d29] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>
    </div>
  );
}
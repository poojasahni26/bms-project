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
          <Link href="/dashboard" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/invoices" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all">
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

        {/* Global Dashboard Feed Container Viewport Offset */}
        <main className="flex-1 pb-24 lg:pb-8 p-6 lg:p-8 space-y-8">
          
          {/* Summary KPI Header Control Panel */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-[#000613]">Overview</h2>
              <div>
              <button className="bg-[#006d37] text-white px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto">
                <span className="material-symbols-outlined">add</span>
                Generate Invoice
              </button>
              <button className="bg-[#006d37] text-white px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity w-full sm:w-auto">
                <span className="material-symbols-outlined">add</span>
                Recurring Invoice
              </button>
            </div>
            </div>

            {/* Metrics Layout Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Balance Amount Data Field */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-500 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-base font-semibold opacity-90">Total Revenue</p>
                  <span className="material-symbols-outlined p-2  rounded-lg text-[#d4e3ff]">account_balance_wallet</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">TZS 45.2M</h3>
                <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Across 128 clients</p>
              </div>

              {/* Verified Paid Metrics Block */}
              <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-sky-400 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-base font-semibold opacity-90">Paid Invoices</p>
                  <span className="material-symbols-outlined p-2  rounded-lg text-[#00743a]">check_circle</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">TZS 32.8M</h3>
                <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">82% collection rate</p>
              </div>

              {/* Pending Transactions Track Ledger */}
              <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-400 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-base font-semibold opacity-90">Pending</p>
                  <span className="material-symbols-outlined p-2 text-white rounded-lg">pending</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">TZS 8.4M</h3>
                <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">14 invoices awaiting</p>
              </div>

              {/* Account Overdue Alert Feed Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-base font-semibold opacity-90">Overdue</p>
                  <span className="material-symbols-outlined p-2 text-white rounded-lg">warning</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">TZS 4.0M</h3>
                <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Requires immediate action</p>
              </div>
            </div>
          </section>

          {/* Dual FX Currency Summary Breakdown Deck */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#c4c6cf] shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#74777f] uppercase mb-2">TZS SUMMARY</h3>
                <p className="text-2xl font-bold text-[#000613]">TZS 38,400,000</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#006d37] font-semibold">↑ 12.5%</p>
                <p className="text-xs text-[#43474e]">Vs last month</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#c4c6cf] shadow-sm flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-[#74777f] uppercase mb-2">USD SUMMARY</h3>
                <p className="text-2xl font-bold text-[#000613]">$ 14,820.00</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#ba1a1a] font-semibold">↓ 2.1%</p>
                <p className="text-xs text-[#43474e]">Vs last month</p>
              </div>
            </div>
          </section>

          {/* Master Operational Processing Invoices Grid Table Component */}
          <section className="bg-white rounded-xl shadow-sm border border-[#c4c6cf] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#c4c6cf] flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#000613]">All Invoices</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-[#e7e8e9] rounded-lg text-[#43474e]">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="p-2 hover:bg-[#e7e8e9] rounded-lg text-[#43474e]">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f4f5]">
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e]">Invoice ID</th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e]">Client</th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e]">Property</th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e]">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e] text-right">Amount</th>
                    <th className="px-6 py-4 text-xs font-semibold tracking-wider uppercase text-[#43474e]">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c4c6cf]">
                  
                  {/* Paid Item Node Row */}
                  <tr className="hover:bg-[#f3f4f5] transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000613]">#INV-9821</td>
                    <td className="px-6 py-4 text-sm text-[#191c1d]">Habari Node Ltd</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Telecom Tower A</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Oct 12, 2023</td>
                    <td className="px-6 py-4 text-sm text-right font-bold text-[#000613]">TZS 1,200,000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#6bfe9c]/20 text-[#00743a] text-xs font-semibold rounded-full border border-[#006d37]/20">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Pending Processing Row */}
                  <tr className="hover:bg-[#f3f4f5] transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000613]">#INV-9822</td>
                    <td className="px-6 py-4 text-sm text-[#191c1d]">Zantel Connect</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">East Coast Station</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Oct 14, 2023</td>
                    <td className="px-6 py-4 text-sm text-right font-bold text-[#000613]">TZS 450,000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#e7e8e9] text-[#43474e] text-xs font-semibold rounded-full border border-[#c4c6cf]">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Overdue Delinquent Transaction Record */}
                  <tr className="hover:bg-[#f3f4f5] transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000613]">#INV-9823</td>
                    <td className="px-6 py-4 text-sm text-[#191c1d]">Vodacom TZ</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">HQ Mainframe</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Sep 28, 2023</td>
                    <td className="px-6 py-4 text-sm text-right font-bold text-[#000613]">TZS 2,800,000</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#ffdad6] text-[#93000a] text-xs font-semibold rounded-full border border-[#ba1a1a]/20">Overdue</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>

                  {/* Foreign Currency FX Data Row */}
                  <tr className="hover:bg-[#f3f4f5] transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000613]">#INV-9824</td>
                    <td className="px-6 py-4 text-sm text-[#191c1d]">Tigo Business</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Relay Node 4</td>
                    <td className="px-6 py-4 text-sm text-[#43474e]">Oct 16, 2023</td>
                    <td className="px-6 py-4 text-sm text-right font-bold text-[#000613]">$ 840.00</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-[#6bfe9c]/20 text-[#00743a] text-xs font-semibold rounded-full border border-[#006d37]/20">Paid</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination Controls Footer Navigation */}
            <div className="px-6 py-4 border-t border-[#c4c6cf] flex justify-between items-center bg-[#f3f4f5]">
              <span className="text-sm text-[#43474e]">Showing 4 of 128 invoices</span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-[#e7e8e9] rounded-full disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="p-2 hover:bg-[#e7e8e9] rounded-full">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Global Context Bottom Navigation Dock Layout (Mobile viewports only) */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] lg:hidden bg-[#f8f9fa] border-t border-[#c4c6cf] shadow-lg flex justify-around items-center px-4 z-50">
        <Link href="/dashboard" className="text-[#43474e] flex flex-col items-center justify-center gap-1">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-semibold uppercase">Home</span>
        </Link>
        <Link href="/invoices" className="text-[#006d37] flex flex-col items-center justify-center gap-1">
          <span className="material-symbols-outlined">receipt</span>
          <span className="text-[10px] font-semibold uppercase">Invoices</span>
        </Link>
        <button className="w-12 h-12 bg-[#001f3f] text-white rounded-full flex items-center justify-center shadow-md transform -translate-y-4 border-4 border-[#f8f9fa] active:scale-90 transition-transform">
          <span className="material-symbols-outlined">add_box</span>
        </button>
        <Link href="/clients" className="text-[#43474e] flex flex-col items-center justify-center gap-1">
          <span className="material-symbols-outlined">group</span>
          <span className="text-[10px] font-semibold uppercase">Clients</span>
        </Link>
        <Link href="/reports" className="text-[#43474e] flex flex-col items-center justify-center gap-1">
          <span className="material-symbols-outlined">analytics</span>
          <span className="text-[10px] font-semibold uppercase">Reports</span>
        </Link>
      </nav>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import Link from "next/link";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="bg-[#f8f9ff] text-[#064e3b] min-h-screen pb-32 lg:flex font-sans">
      {/* Material Symbols and Google Font Imports */}
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden" 
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

        <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 flex-grow w-full">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#064e3b] p-3 rounded-xl shadow-lg">
                <span className="material-symbols-outlined text-white">dashboard</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#064e3b]">Dashboard</h2>
                <p className="text-xs uppercase tracking-wider text-[#064e3b] font-semibold">Overview & Analytics</p>
              </div>
            </div>
            <div className="hidden md:flex gap-2">
              <Link href="/dashboard/issue" className="px-4 py-2 bg-[#064e3b] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md">
                Issue Invoice
              </Link>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Total Revenue */}
            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-700 to-emerald-500 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-4">
                <p className="text-base font-semibold opacity-90">Total Revenue</p>
                <span className="material-symbols-outlined opacity-80">trending_up</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">$428,500.00</h3>
              <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Increased by 12%</p>
            </div>

            {/* Pending Bills */}
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-sky-400 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-4">
                <p className="text-base font-semibold opacity-90">Pending Bills</p>
                <span className="material-symbols-outlined opacity-80">receipt_long</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">42</h3>
              <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">8 priority invoices</p>
            </div>

            {/* New Customers */}
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-400 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-4">
                <p className="text-base font-semibold opacity-90">New Customers</p>
                <span className="material-symbols-outlined opacity-80">group_add</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">128</h3>
              <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Increased by 5%</p>
            </div>

            {/* Overdue Payments */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 p-8 rounded-2xl shadow-lg text-white after:content-[''] after:absolute after:-top-[20%] after:-right-[10%] after:w-[150px] after:h-[150px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-4">
                <p className="text-base font-semibold opacity-90">Overdue Payments</p>
                <span className="material-symbols-outlined opacity-80">warning</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">$14,230.50</h3>
              <p className="text-xs font-semibold bg-white/25 inline-block px-3 py-1 rounded-full backdrop-blur-sm">Attention required</p>
            </div>
          </div>

          {/* Middle Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-[#c9c4d8]/20">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold text-[#181c21]">Revenue vs. Expenses</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-600"></div>
                    <span className="text-xs font-semibold text-[#484555]">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-sky-500"></div>
                    <span className="text-xs font-semibold text-[#484555]">Expenses</span>
                  </div>
                </div>
              </div>

              {/* Flex Bar Graph Chart */}
              <div className="h-[300px] w-full flex items-end justify-between gap-2 px-2">
                {[
                  { month: 'Jan', rev: '40%', exp: '25%' },
                  { month: 'Feb', rev: '65%', exp: '35%' },
                  { month: 'Mar', rev: '45%', exp: '40%' },
                  { month: 'Apr', rev: '80%', exp: '50%' },
                  { month: 'May', rev: '60%', exp: '30%' },
                  { month: 'Jun', rev: '95%', exp: '45%', focus: true },
                  { month: 'Jul', rev: '55%', exp: '25%' },
                  { month: 'Aug', rev: '70%', exp: '40%' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <div 
                      className={`w-full rounded-t-lg transition-all duration-500 hover:opacity-80 ${bar.focus ? 'bg-emerald-600 shadow-md' : 'bg-emerald-600/30'}`} 
                      style={{ height: bar.rev }}
                    />
                    <div 
                      className={`w-full rounded-t-lg transition-all duration-500 hover:opacity-80 ${bar.focus ? 'bg-sky-500 shadow-md' : 'bg-sky-500/20'}`} 
                      style={{ height: bar.exp }}
                    />
                    <span className="text-xs font-semibold text-[#484555] mt-2">{bar.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic Sources Breakdown */}
            <div className="bg-white p-8 rounded-3xl shadow-sm flex flex-col border border-[#c9c4d8]/20">
              <h3 className="text-lg font-bold text-[#181c21] mb-8">Traffic Sources</h3>
              <div className="relative flex justify-center items-center flex-grow py-6">
                <div className="w-48 h-48 rounded-full border-[24px] border-emerald-600 relative flex items-center justify-center">
                  <div className="absolute inset-0 w-full h-full rounded-full border-[24px] border-transparent border-t-sky-500 border-r-teal-500 transform rotate-45"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#064e3b]">82%</p>
                    <p className="text-xs uppercase tracking-wider text-[#484555] font-semibold">Growth</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-4">
                {[
                  { color: 'bg-emerald-600', source: 'Search Engines', pct: '30%' },
                  { color: 'bg-sky-500', source: 'Direct Click', pct: '30%' },
                  { color: 'bg-teal-500', source: 'Bookmarks Click', pct: '40%' }
                ].map((item) => (
                  <div key={item.source} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                      <span className="text-sm text-[#484555]">{item.source}</span>
                    </div>
                    <span className="text-sm font-bold">{item.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Transactions Table */}
          <div className="bg-white p-8 rounded-3xl shadow-sm overflow-hidden border border-[#c9c4d8]/20 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#181c21]">Recent Transactions</h3>
              <button className="text-[#064e3b] font-bold hover:bg-[#064e3b]/5 px-4 py-2 rounded-full transition-all active:scale-95">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#c9c4d8]">
                    <th className="py-4 text-xs font-semibold text-[#484555] uppercase">Client</th>
                    <th className="py-4 text-xs font-semibold text-[#484555] uppercase">Invoice ID</th>
                    <th className="py-4 text-xs font-semibold text-[#484555] uppercase">Status</th>
                    <th className="py-4 text-xs font-semibold text-[#484555] uppercase text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c9c4d8]/30">
                  <tr className="hover:bg-[#f0f4fb]/50 transition-colors cursor-pointer group">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800 font-bold">T</div>
                        <div>
                          <p className="text-base text-[#181c21] font-semibold">TechCorp Inc.</p>
                          <p className="text-xs font-semibold text-[#484555]">Software Subscriptions</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-[#484555] font-mono">INV-88219</td>
                    <td className="py-5">
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold">Completed</span>
                    </td>
                    <td className="py-5 text-right font-bold text-[#181c21]">$12,450.00</td>
                  </tr>
                  <tr className="hover:bg-[#f0f4fb]/50 transition-colors cursor-pointer group">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">G</div>
                        <div>
                          <p className="text-base text-[#181c21] font-semibold">Global Logistics</p>
                          <p className="text-xs font-semibold text-[#484555]">Shipping Services</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-[#484555] font-mono">INV-88342</td>
                    <td className="py-5">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Processing</span>
                    </td>
                    <td className="py-5 text-right font-bold text-[#181c21]">$8,120.00</td>
                  </tr>
                  <tr className="hover:bg-[#f0f4fb]/50 transition-colors cursor-pointer group">
                    <td className="py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-800 font-bold">S</div>
                        <div>
                          <p className="text-base text-[#181c21] font-semibold">SkyNet Solutions</p>
                          <p className="text-xs font-semibold text-[#484555]">Cloud Infrastructure</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-5 text-sm text-[#484555] font-mono">INV-88501</td>
                    <td className="py-5">
                      <span className="bg-blue-900 text-blue-100 px-3 py-1 rounded-full text-xs font-bold">Overdue</span>
                    </td>
                    <td className="py-5 text-right font-bold text-blue-800">$4,230.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Nav Bar for Mobile UI */}
      <nav className="fixed bottom-0 w-full z-50 bg-white shadow-lg rounded-t-xl flex justify-around items-center px-4 pb-6 pt-3 lg:hidden border-t border-[#c9c4d8]/30">
        {[
          { icon: 'dashboard', label: 'Dashboard', active: true },
          { icon: 'receipt_long', label: 'Invoices' },
          { icon: 'group', label: 'Clients' },
          { icon: 'settings', label: 'Settings' }
        ].map((item) => (
          <div key={item.label} className={`flex flex-col items-center justify-center rounded-full px-6 py-2 transition-transform duration-150 cursor-pointer active:scale-90 ${item.active ? 'text-[#064e3b]' : 'text-[#484555] opacity-70'}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-xs font-semibold">{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Contextual Floating Action Button */}
      <button className="fixed bottom-24 right-8 w-14 h-14 bg-[#064e3b] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-200 z-40">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}
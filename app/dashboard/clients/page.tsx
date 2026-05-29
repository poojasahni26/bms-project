"use client";

import React, { useState } from "react";
import Link from "next/link";

const clients = [
  {
    initials: "AK",
    name: "Acme Korporation",
    email: "billing@acme.com",
    bills: "$12,450.00",
    status: "Active",
  },
  {
    initials: "GI",
    name: "Global Industries",
    email: "finance@global.ind",
    bills: "$8,900.00",
    status: "Active",
  },
  {
    initials: "ST",
    name: "Synergy Tech",
    email: "accounts@synergy.io",
    bills: "$3,200.00",
    status: "Pending",
  },
  {
    initials: "NL",
    name: "Nexus Logistics",
    email: "contact@nexus-log.com",
    bills: "$0.00",
    status: "Overdue",
  },
  {
    initials: "VP",
    name: "Vanguard Properties",
    email: "admin@vanguard.prop",
    bills: "$21,050.00",
    status: "Active",
  },
];

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Pending: "bg-orange-100 text-orange-700 border border-orange-200",
  Overdue: "bg-red-100 text-red-700 border border-red-200",
};

export default function ClientsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc] w-full pb-24 md:pb-0">
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
          <Link href="/dashboard" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
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
          <Link href="/dashboard/clients" className="text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all">
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

        {/* Content Wrapper */}
        <div className="flex w-full max-w-7xl flex-col gap-8 p-4 md:p-8">
          {/* Page Header */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#064e3b]">Customer Management</h2>
              <p className="mt-1 text-slate-500">
                Manage institutional clients and their billing status.
              </p>
            </div>

            <Link
              href="/dashboard/clients/new-customer"
              className="flex items-center gap-2 rounded-lg bg-[#064e3b] px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-[#064e3b]/90"
            >
              <span className="text-xl font-light">+</span>
              <span>Add New Customer</span>
            </Link>
          </div>

          {/* Metrics Sections */}
          <section className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Total Balance Amount Data Field */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-[#064e3b] p-5 rounded-xl shadow-sm text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-semibold opacity-90">Total Client</p>
                </div>
                <h3 className="text-2xl font-bold mb-3">1284</h3>
                <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">+12%</p>
              </div>

              {/* Verified Paid Metrics Block */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-500 p-5 rounded-xl shadow-sm text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-semibold opacity-90">Active Invoices</p>
                </div>
                <h3 className="text-2xl font-bold mb-3">432</h3>
                <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">Target: 500</p>
              </div>

              {/* Pending Transactions Track Ledger */}
              <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-500 p-5 rounded-xl shadow-sm text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-semibold opacity-90">Pending Revenue</p>
                </div>
                <h3 className="text-2xl font-bold mb-3">$42,900</h3>
                <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">-3%</p>
              </div>

            </div>
          </section>

          {/* Table Representation */}
          <section className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Client Name</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Total Bills</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {clients.map((client) => (
                    <tr key={client.email} className="transition-colors hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-emerald-50 font-bold text-[#064e3b]">
                            {client.initials}
                          </div>
                          <span className="font-semibold text-slate-900">{client.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{client.email}</td>
                      <td className="px-6 py-4 font-semibold text-slate-900">{client.bills}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[client.status]}`}>
                          {client.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="rounded p-2 text-slate-400 transition-colors hover:text-[#064e3b] font-medium text-sm">Edit</button>
                          <button className="rounded p-2 text-slate-400 transition-colors hover:text-[#064e3b] font-medium text-sm">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
              <span className="text-sm text-slate-500">Showing 1 to 5 of 1,284 clients</span>
              <div className="flex gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-200">←</button>
                <button className="flex h-8 w-8 items-center justify-center rounded bg-[#064e3b] text-sm font-semibold text-white">1</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">2</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">3</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-200">→</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Sticky Navigation Menu */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white py-2 lg:hidden">
        {[
          { name: "Home", icon: "dashboard", href: "/dashboard" },
          { name: "Invoices", icon: "receipt_long", href: "/dashboard/invoices" },
          { name: "Clients", icon: "group", href: "/dashboard/clients" },
          { name: "Settings", icon: "settings", href: "/dashboard/settings" },
        ].map((item) => {
          const isActive = item.name === "Clients";
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center gap-0.5 text-[11px] transition-colors ${
                isActive ? "font-bold text-[#064e3b]" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
// app/reports/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const invoices = [
  {
    id: "#INV-8829",
    client: "TechHorizon Inc.",
    type: "Enterprise Account",
    amount: "$12,450.00",
    status: "Overdue",
    initials: "TH",
    badge: "bg-red-100 text-red-700",
    avatar: "bg-slate-900 text-white",
  },
  {
    id: "#INV-8812",
    client: "Global Logistics",
    type: "Standard Partner",
    amount: "$8,200.00",
    status: "Pending",
    initials: "GL",
    badge: "bg-slate-100 text-slate-700",
    avatar: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "#INV-8798",
    client: "Velocity Soft",
    type: "Recurring Client",
    amount: "$4,500.00",
    status: "Overdue",
    initials: "VS",
    badge: "bg-red-100 text-red-700",
    avatar: "bg-amber-100 text-amber-700",
  },
  {
    id: "#INV-8795",
    client: "Apex Consulting",
    type: "SME Client",
    amount: "$2,100.00",
    status: "Pending",
    initials: "AC",
    badge: "bg-slate-100 text-slate-700",
    avatar: "bg-blue-100 text-blue-700",
  },
  {
    id: "#INV-8791",
    client: "Urban Media",
    type: "New Client",
    amount: "$1,850.00",
    status: "Pending",
    initials: "UM",
    badge: "bg-slate-100 text-slate-700",
    avatar: "bg-slate-100 text-slate-700",
  },
];

export default function ReportsPage() {
  // Fixes the compile error by introducing the missing state hook
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
      />
      
      {/* Container wrapper to lay out Sidebar and Main Content properly */}
      <div className="flex min-h-screen bg-slate-50">
        
        {/* Navigation Drawer */}
        <aside 
          className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <div className="p-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white">bolt</span>
              </div>
              <h1 className="text-xl text-[#064e3b] font-bold">Green Telecom BMS</h1>
            </div>
            {/* Close button for responsive screen drawers */}
            <button className="lg:hidden p-1 text-slate-400 hover:text-slate-700" onClick={toggleSidebar}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <nav className="flex-1 space-y-1 text-lg px-4">
            <Link href="/dashboard" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] rounded-lg transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/dashboard/invoices" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] rounded-lg transition-all">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-medium">Invoices</span>
            </Link>
            <Link href="/dashboard/payments" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] rounded-lg transition-all">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Payments</span>
            </Link>
            <Link href="/dashboard/clients" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] rounded-lg transition-all">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Clients</span>
            </Link>
            <Link href="/dashboard/reports" className="text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] rounded-lg transition-all">
              <span className="material-symbols-outlined">analytics</span>
              <span className="text-sm font-medium">Reports</span>
            </Link>
            <Link href="/dashboard/settings" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] rounded-lg transition-all duration-200">
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

          {/* Main Dashboard Panel Content */}
          <div className="p-8">
            {/* Page Header */}
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Reports & Analytics
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Review financial performance and outstanding balances.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
                  <span className="material-symbols-outlined text-[18px] text-[#064e3b]">
                    calendar_today
                  </span>
                  <span className="text-sm font-medium text-slate-700">
                    Last 30 Days
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-slate-400">
                    expand_more
                  </span>
                </button>

                <button className="flex items-center gap-2 rounded-lg bg-[#064e3b] px-4 py-2 font-medium text-white shadow-sm transition hover:opacity-90">
                  <span className="material-symbols-outlined text-[18px]">
                    file_download
                  </span>
                  <span className="text-sm">Export</span>
                </button>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
              {/* Revenue Chart Card */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-8">
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Monthly Revenue
                  </h3>
                  <span className="rounded bg-emerald-50 px-2 py-1 text-sm font-semibold text-[#064e3b]">
                    +12.4%
                  </span>
                </div>

                <div className="flex h-64 items-end gap-2 pt-4">
                  {[40, 55, 45, 75, 60, 85, 95].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t-sm transition-all duration-300 ${
                        i === 6
                          ? "bg-[#064e3b]"
                          : "bg-slate-100 hover:bg-[#064e3b]/30"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map(
                    (month) => (
                      <span key={month}>{month}</span>
                    )
                  )}
                </div>
              </div>

              {/* Payment Status Radial Card */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-4">
                <h3 className="mb-6 text-xl font-semibold text-slate-900">
                  Payment Status
                </h3>

                <div className="relative mx-auto mb-6 h-48 w-48">
                  <svg
                    className="h-full w-full -rotate-90 transform"
                    viewBox="0 0 36 36"
                  >
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="text-slate-100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="84,100"
                      strokeLinecap="round"
                      className="text-[#064e3b]"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-slate-900">
                      84%
                    </span>
                    <span className="text-[10px] font-bold uppercase text-slate-400">
                      Collected
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-[#064e3b]" />
                      <span className="text-sm text-slate-600">
                        Paid Invoices
                      </span>
                    </div>
                    <span className="font-semibold text-slate-900">$142k</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-slate-200" />
                      <span className="text-sm text-slate-600">
                        Pending
                      </span>
                    </div>
                    <span className="font-semibold text-slate-900">$24k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Container */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Top 5 Outstanding Invoices
                </h3>
                <button className="flex items-center gap-1 text-sm font-semibold text-[#064e3b] hover:underline">
                  View All
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                        Invoice #
                      </th>
                      <th className="px-6 py-4 text-xs uppercase tracking-wider text-slate-500">
                        Client
                      </th>
                      <th className="px-6 py-4 text-right text-xs uppercase tracking-wider text-slate-500">
                        Amount
                      </th>
                      <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-500">
                        Status
                      </th>
                      <th className="px-6 py-4" />
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {invoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        className="transition-colors hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {invoice.id}
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-bold ${invoice.avatar}`}
                            >
                              {invoice.initials}
                            </div>

                            <div>
                              <p className="text-sm font-semibold text-slate-900">
                                {invoice.client}
                              </p>
                              <p className="text-[11px] text-slate-400">
                                {invoice.type}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-right font-bold text-slate-900">
                          {invoice.amount}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${invoice.badge}`}
                          >
                            {invoice.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 transition hover:text-slate-900">
                            <span className="material-symbols-outlined">
                              more_vert
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white py-2 shadow-lg md:hidden">
        {[
          { label: "Home", icon: "dashboard" },
          { label: "Invoices", icon: "receipt_long" },
          { label: "Reports", icon: "analytics", active: true },
          { label: "Clients", icon: "group" },
          { label: "Settings", icon: "settings" },
        ].map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-1 transition-colors ${
              item.active
                ? "text-[#064e3b] font-semibold"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <span className="material-symbols-outlined">
              {item.icon}
            </span>
            <span className="text-[10px]">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
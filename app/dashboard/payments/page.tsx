"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const payments = [
  {
    id: "PMT-2026-001",
    client: "Acme Global Logistics",
    invoice: "INV-9842",
    date: "Oct 24, 2023",
    method: "Bank Transfer",
    amount: "$12,450.00",
    status: "Completed",
  },
  {
    id: "PMT-2026-002",
    client: "Safari Tech Solutions",
    invoice: "INV-9851",
    date: "Oct 25, 2023",
    method: "Credit Card",
    amount: "4,200,000 TZS",
    status: "Pending",
  },
  {
    id: "PMT-2026-003",
    client: "Kilimanjaro Traders",
    invoice: "INV-9721",
    date: "Oct 25, 2023",
    method: "Bank Transfer",
    amount: "15,800,000 TZS",
    status: "Failed",
  },
  {
    id: "PMT-2026-004",
    client: "Oceanic Marine Ltd",
    invoice: "INV-9860",
    date: "Oct 26, 2023",
    method: "Mobile Money",
    amount: "$3,400.00",
    status: "Completed",
  },
  {
    id: "PMT-2026-005",
    client: "Apex Construction",
    invoice: "INV-9855",
    date: "Oct 26, 2023",
    method: "Bank Transfer",
    amount: "2,100,000 TZS",
    status: "Completed",
  },
];

const statusStyles: Record<string, string> = {
  Completed: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Pending: "bg-gray-100 text-gray-700 border border-gray-200",
  Failed: "bg-red-100 text-red-700 border border-red-200",
};

export default function PaymentsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900 pb-32 lg:pb-0 lg:flex font-sans">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
      />
      
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

        <main className="max-w-7xl mx-auto p-4 md:p-8 flex-grow w-full">
          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h1 className="mb-1 text-4xl font-bold text-[#064e3b]">
                Payments
              </h1>
              <p className="text-gray-500">
                Track and manage all incoming transactions
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard/payments/filter" className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-gray-50 hover:text-[#064e3b] transition-colors">
                Filters
              </Link>

              <Link href="/dashboard/payments/export" className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-gray-50 hover:text-[#064e3b] transition-colors">
                Export Report
              </Link>

              <Link href="/dashboard/payments/recordpayment" className="rounded-lg bg-[#064e3b] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#064e3b]/90 shadow-md transition-all active:scale-[0.98]">
                Record Payment
              </Link>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Collected */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#064e3b] to-emerald-600 p-5 rounded-xl shadow-md text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold opacity-90">Total Collected</p>
                <span className="material-symbols-outlined text-xl opacity-80">payments</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">$452,890.00</h3>
              <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">All-time gross volume</p>
            </div>

            {/* Successful Payments */}
            <div className="relative overflow-hidden bg-gradient-to-br from-sky-600 to-sky-400 p-5 rounded-xl shadow-md text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold opacity-90">Successful Payments</p>
                <span className="material-symbols-outlined text-xl opacity-80">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">1,284</h3>
              <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">Settled transactions</p>
            </div>

            {/* Pending Settlements */}
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-400 p-5 rounded-xl shadow-md text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold opacity-90">Pending Settlements</p>
                <span className="material-symbols-outlined text-xl opacity-80">schedule</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">42</h3>
              <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">Processing in pipeline</p>
            </div>

            {/* Refunded / Failed */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 p-5 rounded-xl shadow-md text-white after:content-[''] after:absolute after:-top-[15%] after:-right-[5%] after:w-[100px] after:h-[100px] after:bg-white/15 after:rounded-full">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-semibold opacity-90">Refunded / Failed</p>
                <span className="material-symbols-outlined text-xl opacity-80">error</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">18</h3>
              <p className="text-[11px] font-semibold bg-white/25 inline-block px-2.5 py-0.5 rounded-full backdrop-blur-sm">Action required</p>
            </div>
          </section>

          {/* Table */}
          <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h3 className="text-xl font-semibold text-[#064e3b]">
                All Payments
              </h3>

              <button className="text-sm font-semibold text-[#064e3b] hover:underline">
                View All History
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {[
                      "Payment ID",
                      "Client Name",
                      "Invoice ID",
                      "Date",
                      "Method",
                      "Amount",
                      "Status",
                      "Actions",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="transition-colors hover:bg-gray-50/50"
                    >
                      <td className="px-6 py-5 font-bold text-slate-900">
                        {payment.id}
                      </td>

                      <td className="px-6 py-5 font-medium text-slate-800">
                        {payment.client}
                      </td>

                      <td className="px-6 py-5 font-medium text-[#064e3b] hover:underline cursor-pointer">
                        {payment.invoice}
                      </td>

                      <td className="px-6 py-5 text-gray-500">
                        {payment.date}
                      </td>

                      <td className="px-6 py-5 text-slate-700">
                        {payment.method}
                      </td>

                      <td className="px-6 py-5 font-bold text-slate-900">
                        {payment.amount}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[payment.status]}`}
                        >
                          {payment.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex gap-2">
                          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-[#f0f4fb] hover:text-[#064e3b] transition-colors">
                            View
                          </button>

                          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-[#f0f4fb] hover:text-[#064e3b] transition-colors">
                            Receipt
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center justify-between gap-4 bg-gray-50 border-t border-gray-100 px-6 py-4 md:flex-row">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-bold text-slate-900">
                  1-5
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-900">
                  1,344
                </span>{" "}
                transactions
              </p>

              <div className="flex gap-1.5">
                <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
                  Previous
                </button>

                <button className="rounded-md bg-[#064e3b] px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm">
                  1
                </button>

                <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
                  2
                </button>

                <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
                  3
                </button>

                <button className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom Nav Bar for Mobile UI */}
      <nav className="fixed bottom-0 w-full z-50 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-xl flex justify-around items-center px-4 pb-6 pt-3 lg:hidden border-t border-[#c9c4d8]/30">
        {[
          { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
          { icon: 'receipt_long', label: 'Invoices', href: '/dashboard/invoices' },
          { icon: 'payments', label: 'Payments', href: '/dashboard/payments', active: true },
          { icon: 'group', label: 'Clients', href: '/dashboard/clients' },
          { icon: 'settings', label: 'Settings', href: '/dashboard/settings' }
        ].map((item) => (
          <Link 
            key={item.label} 
            href={item.href}
            className={`flex flex-col items-center justify-center rounded-full px-3 py-2 transition-transform duration-150 cursor-pointer active:scale-90 ${item.active ? 'text-[#064e3b]' : 'text-[#484555] opacity-70'}`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[11px] font-semibold mt-0.5">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Contextual Floating Action Button */}
      <Link href="/dashboard/payments/recordpayment" className="fixed bottom-24 right-8 w-14 h-14 bg-[#064e3b] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all duration-200 z-40 lg:hidden">
        <span className="material-symbols-outlined">add</span>
      </Link>
    </div>
  );
}
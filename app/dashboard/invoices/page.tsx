import React from 'react';
import Image from "next/image";
import Link from "next/link";


const invoices = [
  {
    id: "INV-2026-001",
    client: "John & Sarah Mitchell",
    property: "Modern Downtown Loft",
    issued: "Jan 16, 2026",
    due: "Jan 25, 2026",
    amount: "$37,500",
    status: "Paid",
  },
  {
    id: "INV-2026-002",
    client: "Anderson Holdings LLC",
    property: "Urban Penthouse",
    issued: "Jan 15, 2026",
    due: "Jan 23, 2026",
    amount: "$105,000",
    status: "Paid",
  },
  {
    id: "INV-2026-003",
    client: "Rebecca Thompson",
    property: "Lakeside Villa",
    issued: "Jan 14, 2026",
    due: "Jan 27, 2026",
    amount: "$85,500",
    status: "Pending",
  },
  {
    id: "INV-2026-004",
    client: "David Chen",
    property: "Smart City Studio",
    issued: "Jan 13, 2026",
    due: "Jan 29, 2026",
    amount: "$43,500",
    status: "Pending",
  },
  {
    id: "INV-2025-098",
    client: "Pacific Rentals Inc",
    property: "Mountain Cabin Retreat",
    issued: "Jan 12, 2026",
    due: "Jan 20, 2026",
    amount: "$3,200",
    status: "Paid",
  },
  {
    id: "INV-2025-096",
    client: "Martinez Family Trust",
    property: "Suburban Family Home",
    issued: "Jan 10, 2025",
    due: "Jan 18, 2026",
    amount: "$20,250",
    status: "Overdue",
  },
];

const statusStyles: Record<string, string> = {
  Paid:
    "bg-emerald-50 text-emerald-600 border border-emerald-100",
  Pending:
    "bg-amber-50 text-amber-600 border border-amber-100",
  Overdue:
    "bg-rose-50 text-rose-600 border border-rose-100",
};

function SummaryCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <h2 className="mt-1 text-2xl font-bold text-gray-900">
        {value}
      </h2>

      <p className="mt-1 text-xs font-semibold text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <div className="flex">
        <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
        />
        {/* Sidebar */}
        <aside className="h-full w-64 fixed left-0 top-0 z-50 bg-slate-900 border-r border-slate-800 shadow-2xl flex flex-col py-6">
          <div className="px-6 mb-8">
            <span className="text-white text-xl font-black">BMS Institutional</span>
          </div>
          
          <div className="px-6 mb-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500">
              <img 
                alt="Operations Manager" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz3welp1P-T7tg1mJzAFynbnlVZ8e5H4GQrAr6L54LsLghsdytfyEXCVRz6A0zZvyDRxfSDFenpHBRyJ5msC3QJtRpXLMKCBe-KTyWna1AukHJUlz2uGouseZZou67wdTZc9Vjux24wzSg0SRRjxmm6aR9SzI8AS2Jtb-CGY6lv6ej3O7FHquqDG5uUqrckmYyByfBU_DkVyrC1oFxQlsGfkCRhzWb3-uSHG4L_fvRXQUhk_r3nQBdHpvgtKa-NiKbKsc6IFomf8I" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm">Operations Manager</span>
              <span className="text-slate-400 text-xs">Admin User</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/dashboard/invoices" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-medium">Invoices</span>
            </Link>
            <Link href="/dashboard/payments" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Payments</span>
            </Link>
            <Link href="/dashboard/clients" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Clients</span>
            </Link>
            <Link href="/dashboard/reports" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-inter text-sm font-medium">Reports</span>
            </Link>
            <Link href="/dashboard/settings" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all duration-200">
              <span className="material-symbols-outlined">settings</span>
              <span className="font-inter text-sm font-medium">Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
         <main className="ml-64 min-h-screen">
          
          {/* Top Bar */}
          <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-6 py-3 sticky top-0 z-40">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-900 cursor-pointer">menu</span>
              <h1 className="text-lg font-bold text-slate-900">Billing Management</h1>
            </div>
            
            <div className="flex-1 max-w-xl px-12">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-slate-300 text-sm" 
                  placeholder="Search invoices, clients, or reports..." 
                  type="text" 
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100 p-2 rounded-full cursor-pointer transition-colors">notifications</span>
              <div className="w-8 h-8 rounded-full bg-[#001f3f] flex items-center justify-center text-white text-xs font-bold">JD</div>
            </div>
          </header>


          
          <div className="mx-auto max-w-[1200px] space-y-8">
            
            {/* Header */}
            <header className="flex flex-col justify-between gap-10 ml-5 md:flex-row md:items-center">
              <div>
                <h1 className="text-3xl mt-10 font-bold tracking-tight gap-5">
                  Invoices
                </h1>

                <p className="mt-3 text-sm font-medium text-gray-500">
                  Manage recurring invoices for all customer links
                </p>
              </div>

              <div className="flex flex-wrap items-center ml-5 gap-3">
                

                <Link href="/dashboard/invoices/generateinvoice" className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
                  Generate Invoice
                </Link>

                <Link href="/dashboard/invoices/recurringinvoice" className="rounded-lg bg-[#001F3F] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90">
                  Generate Recurring Invoices
                </Link>
              </div>
            </header>

            {/* Summary Cards */}
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <SummaryCard
                title="Total Amount"
                value="$294,950"
                subtitle="6 Invoices"
              />

              <SummaryCard
                title="Paid Invoices"
                value="03"
                subtitle="$145,700 Collected"
              />

              <SummaryCard
                title="Pending Invoices"
                value="02"
                subtitle="$129,000 Outstanding"
              />

              <SummaryCard
                title="Overdue Invoices"
                value="01"
                subtitle="$20,250 Overdue"
              />
            </section>

            {/* Currency Summary */}
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                  TZS Summary
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Total
                    </p>
                    <p className="text-lg font-bold">TSh 450M</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Pending
                    </p>
                    <p className="text-lg font-bold text-amber-600">
                      TSh 120M
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Overdue
                    </p>
                    <p className="text-lg font-bold text-rose-600">
                      TSh 15M
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-sm font-bold text-gray-900">
                  USD Summary
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Total
                    </p>
                    <p className="text-lg font-bold">$294,950</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Pending
                    </p>
                    <p className="text-lg font-bold text-amber-600">
                      $129,000
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      Overdue
                    </p>
                    <p className="text-lg font-bold text-rose-600">
                      $20,250
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Invoice Table */}
            <section className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
                <h3 className="text-lg font-bold text-gray-800">
                  All Invoices
                </h3>

                
                <Link href="/dashboard/invoices/filters" className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-800">
                  Filters
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="bg-gray-100 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                      <th className="px-6 py-4">Invoice ID</th>
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Property</th>
                      <th className="px-6 py-4">Issued</th>
                      <th className="px-6 py-4">Due Date</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {invoices.map((invoice) => (
                      <tr
                        key={invoice.id}
                        className="text-sm transition-colors hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-medium text-gray-500">
                          {invoice.id}
                        </td>

                        <td className="px-6 py-4 font-semibold text-gray-800">
                          {invoice.client}
                        </td>

                        <td className="px-6 py-4 text-gray-500">
                          {invoice.property}
                        </td>

                        <td className="px-6 py-4 text-gray-500">
                          {invoice.issued}
                        </td>

                        <td className="px-6 py-4 text-gray-500">
                          {invoice.due}
                        </td>

                        <td className="px-6 py-4 font-bold text-gray-800">
                          {invoice.amount}
                        </td>

                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[invoice.status]}`}
                          >
                            {invoice.status}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-right">
                          <button className="text-gray-400 hover:text-gray-600">
                            •••
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
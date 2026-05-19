// app/reports/page.tsx

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

const navItems = [
  { label: "Dashboard", icon: "dashboard" },
  { label: "Invoices", icon: "receipt_long" },
  { label: "Payments", icon: "payments" },
  { label: "Clients", icon: "group" },
  { label: "Reports", icon: "analytics", active: true },
  { label: "Settings", icon: "settings" },
];

export default function ReportsPage() {
  return (
    <>
    <link
       rel="stylesheet"
       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
        />
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

        {/* Content */}
        <div className="p-8">
          {/* Page Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Reports & Analytics
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Review financial performance and outstanding
                balances.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-slate-400">
                  calendar_today
                </span>

                <span className="text-sm font-medium text-slate-700">
                  Last 30 Days
                </span>

                <span className="material-symbols-outlined text-[18px] text-slate-400">
                  expand_more
                </span>
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-sm transition hover:opacity-90">
                <span className="material-symbols-outlined text-[18px]">
                  file_download
                </span>

                <span className="text-sm">Export</span>
              </button>
            </div>
          </div>

          {/* Charts */}
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
            {/* Revenue */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  Monthly Revenue
                </h3>

                <span className="rounded bg-emerald-50 px-2 py-1 text-sm font-semibold text-emerald-600">
                  +12.4%
                </span>
              </div>

              <div className="flex h-64 items-end gap-2 pt-4">
                {[40, 55, 45, 75, 60, 85, 95].map((height, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm ${
                      i === 3
                        ? "bg-slate-900"
                        : "bg-slate-100"
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

            {/* Payment Status */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-4">
              <h3 className="mb-6 text-xl font-semibold">
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
                    strokeDasharray="70,100"
                    strokeLinecap="round"
                    className="text-slate-900"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">
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
                    <div className="h-3 w-3 rounded-full bg-slate-900" />
                    <span className="text-sm text-slate-600">
                      Paid Invoices
                    </span>
                  </div>

                  <span className="font-semibold">$142k</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <span className="text-sm text-slate-600">
                      Pending
                    </span>
                  </div>

                  <span className="font-semibold">$24k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <h3 className="text-xl font-semibold">
                Top 5 Outstanding Invoices
              </h3>

              <button className="flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline">
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
                      <td className="px-6 py-4 font-medium">
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
                            <p className="text-sm font-semibold">
                              {invoice.client}
                            </p>

                            <p className="text-[11px] text-slate-400">
                              {invoice.type}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right font-bold">
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
            className={`flex flex-col items-center gap-1 ${
              item.active
                ? "text-slate-900"
                : "text-slate-400"
            }`}
          >
            <span className="material-symbols-outlined">
              {item.icon}
            </span>

            <span className="text-[10px] font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}
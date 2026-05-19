import Image from "next/image";
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

function StatCard({
  title,
  value,
  subtitle,
  negative,
}: {
  title: string;
  value: string;
  subtitle: string;
  negative?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </span>

      <div className="flex items-baseline justify-between">
        <span className="text-4xl font-bold text-slate-900">{value}</span>
        <span
          className={`flex items-center text-sm font-semibold ${
            negative ? "text-red-600" : "text-emerald-600"
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export default function ClientsPage() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0"
      />
      
      {/* Sidebar Navigation */}
      <aside className="h-full w-64 fixed left-0 top-0 z-50 bg-slate-900 border-r border-slate-800 shadow-2xl flex flex-col py-6">
        <div className="px-6 mb-8">
          <span className="text-white text-xl font-black">BMS Institutional</span>
        </div>

        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 relative">
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
          <Link href="/dashboard/clients" className="text-white px-4 py-3 flex items-center gap-3 bg-slate-800 transition-all">
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Clients</span>
          </Link>
          <Link href="/dashboard/reports" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
            <span className="material-symbols-outlined">analytics</span>
            <span className="text-sm font-medium">Reports</span>
          </Link>
          <Link href="/dashboard/settings" className="text-slate-400 hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all duration-200">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Areas */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center px-6 py-3 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-900 cursor-pointer">menu</span>
            <h1 className="text-lg font-bold text-slate-900">Billing Management</h1>
          </div>

          <div className="flex-1 max-w-xl px-12">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-slate-300 text-sm"
                placeholder="Search invoices, clients, or reports..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100 p-2 rounded-full cursor-pointer transition-colors">
              notifications
            </span>
            <div className="w-8 h-8 rounded-full bg-[#001f3f] flex items-center justify-center text-white text-xs font-bold">
              JD
            </div>
          </div>
        </header>

        {/* Content Wrapper */}
        <div className="flex max-w-7xl flex-col gap-8 p-8">
          {/* Page Header */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Customer Management</h2>
              <p className="mt-1 text-slate-500">
                Manage institutional clients and their billing status.
              </p>
            </div>

            <Link
              href="/dashboard/clients/new-customer"
              className="flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-slate-800"
            >
              <span>+</span>
              <span>Add New Customer</span>
            </Link>
          </div>

          {/* Metrics Sections */}
          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard title="Total Clients" value="1,284" subtitle="+12%" />
            <StatCard title="Active Invoices" value="432" subtitle="Target: 500" />
            <StatCard title="Pending Revenue" value="$42,900" subtitle="-3%" negative />
          </section>

          {/* Table Representation */}
          <section className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-100">
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
                          <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 font-bold text-slate-900">
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
                          <button className="rounded p-2 text-slate-400 transition-colors hover:text-slate-900">Edit</button>
                          <button className="rounded p-2 text-slate-400 transition-colors hover:text-slate-900">View</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-100 px-6 py-4">
              <span className="text-sm text-slate-500">Showing 1 to 5 of 1,284 clients</span>
              <div className="flex gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-200">←</button>
                <button className="flex h-8 w-8 items-center justify-center rounded bg-slate-950 text-sm font-semibold text-white">1</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">2</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">3</button>
                <button className="flex h-8 w-8 items-center justify-center rounded text-slate-600 transition-colors hover:bg-slate-200">→</button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mobile Sticky Navigation Menu */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-slate-200 bg-white py-2 md:hidden">
        {["Home", "Invoices", "Clients", "Settings"].map((item) => (
          <button
            key={item}
            className={`flex flex-col items-center gap-1 text-[10px] ${
              item === "Clients" ? "font-bold text-slate-950" : "text-slate-500"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
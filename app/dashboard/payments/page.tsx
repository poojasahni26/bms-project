// app/payments/page.tsx

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
  Completed:
    "bg-emerald-100 text-emerald-700 border border-emerald-200",
  Pending:
    "bg-gray-100 text-gray-700 border border-gray-200",
  Failed:
    "bg-red-100 text-red-700 border border-red-200",
};

function MetricCard({
  title,
  value,
  subtitle,
  error,
}: {
  title: string;
  value: string;
  subtitle?: string;
  error?: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <div className="flex items-baseline gap-2">
        <h3
          className={`text-3xl font-bold ${
            error ? "text-red-600" : "text-slate-900"
          }`}
        >
          {value}
        </h3>

        {subtitle && (
          <span className="text-xs font-bold text-emerald-600">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
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

      {/* Main */}
      <main className="md:ml-64">
        {/* Topbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/80 px-8 py-4 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <button className="text-slate-900">☰</button>

            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Billing Management
            </h2>
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

        <div className="p-8">
          {/* Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <h1 className="mb-1 text-4xl font-bold text-slate-900">
                Payments
              </h1>

              <p className="text-gray-500">
                Track and manage all incoming transactions
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard/payments/filter" className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-gray-50">
                Filters
              </Link>

              <Link href="/dashboard/payments/export" className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-gray-50">
                Export Report
              </Link>

              <Link href="/dashboard/payments/recordpayment" className="rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
                Record Payment
              </Link>
            </div>
          </div>

          {/* Metrics */}
          <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              title="Total Collected"
              value="$452,890.00"
             
            />

            <MetricCard
              title="Successful Payments"
              value="1,284"
            />

            <MetricCard
              title="Pending Settlements"
              value="42"
            />

            <MetricCard
              title="Refunded / Failed"
              value="18"
              error
            />
          </section>

          {/* Table */}
          <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h3 className="text-xl font-semibold text-slate-900">
                All Payments
              </h3>

              <button className="text-sm font-semibold text-emerald-600 hover:underline">
                View All History
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-gray-100">
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
                      className="transition-colors hover:bg-gray-50"
                    >
                      <td className="px-6 py-5 font-bold text-slate-900">
                        {payment.id}
                      </td>

                      <td className="px-6 py-5 font-medium text-slate-800">
                        {payment.client}
                      </td>

                      <td className="px-6 py-5 font-medium text-emerald-600 hover:underline">
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
                        <div className="flex justify-end gap-2">
                          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
                            View
                          </button>

                          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
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
            <div className="flex flex-col items-center justify-between gap-4 bg-gray-100 px-6 py-4 md:flex-row">
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

              <div className="flex gap-2">
                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-white">
                  Previous
                </button>

                <button className="rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white">
                  1
                </button>

                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-white">
                  2
                </button>

                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-white">
                  3
                </button>

                <button className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium hover:bg-white">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
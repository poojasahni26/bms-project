import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      {/* Load External Fonts and Icons */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <div className="text-[#191c1d] bg-[#f8f9fa] font-['Inter'] min-h-screen">
        
        {/* Navigation Drawer */}
        <aside className="h-full w-64 fixed left-0 top-0 z-50 bg-blue-500 border-r border-blue-500 shadow-2xl flex flex-col py-6">
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
              <span className="text-white text-xs">Admin User</span>
            </div>
          </div>

          <nav className="flex-1 space-y-1">
            <Link href="/dashboard" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-medium">Dashboard</span>
            </Link>
            <Link href="/dashboard/invoices" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="text-sm font-medium">Invoices</span>
            </Link>
            <Link href="/dashboard/payments" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">payments</span>
              <span className="text-sm font-medium">Payments</span>
            </Link>
            <Link href="/dashboard/clients" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">group</span>
              <span className="text-sm font-medium">Clients</span>
            </Link>
            <Link href="/dashboard/reports" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
              <span className="material-symbols-outlined">analytics</span>
              <span className="font-inter text-sm font-medium">Reports</span>
            </Link>
            <Link href="/dashboard/settings" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 transition-all duration-200">
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
              <span className="material-symbols-outlined text-[#001f3f] cursor-pointer">menu</span>
              <h1 className="text-lg font-bold text-[#001f3f]">Billing Management</h1>
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

          {/* Dashboard Canvas */}
          <div className="p-8 space-y-6">
            
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-[#000613]">Executive Overview</h2>
                <p className="text-slate-500 text-sm">Financial performance tracking for Q3 Fiscal Year</p>
              </div>
              <Link href="/dashboard/issue" 
               className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                  >
                Issue Invoice
               </Link>
            </div>

            {/* Summary Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Total Revenue', value: '$428,500.00', trend: '+12.5%', color: 'text-emerald-600', icon: 'payments' },
                { label: 'Pending Bills', value: '42', trend: '-4%', color: 'text-red-600', icon: 'schedule' },
                { label: 'New Customers', value: '128', trend: '+18%', color: 'text-emerald-600', icon: 'person_add' },
                { label: 'Overdue Payments', value: '$14,230.50', trend: 'Critical', color: 'text-red-600', icon: 'priority_high' },
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{card.label}</span>
                    <div className="p-2 bg-slate-100 rounded-lg">
                      <span className="material-symbols-outlined text-slate-600 text-sm">{card.icon}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold tabular-nums">{card.value}</div>
                    <div className={`text-xs font-bold mt-2 ${card.color}`}>{card.trend} <span className="text-slate-400 font-normal">vs last month</span></div>
                  </div>
                </div>
              ))}
            </section>

            {/* Revenue Chart Section */}
            <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-semibold">Revenue vs. Expenses</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-slate-900"></span> Revenue</div>
                  <div className="flex items-center gap-2 text-sm"><span className="w-3 h-3 rounded-full bg-emerald-400"></span> Expenses</div>
                </div>
              </div>
              <div className="h-64 w-full bg-slate-50 rounded-lg flex items-end justify-between px-10 pb-4 relative overflow-hidden">
                 {/* Visual Bar Chart Mockup */}
                 {[30, 50, 45, 80, 60, 75].map((h, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 z-10">
                     <div className="w-12 bg-slate-900/20 rounded-t-md transition-all hover:bg-slate-900" style={{ height: `${h * 2}px` }}></div>
                     <span className="text-[10px] text-slate-400 uppercase font-bold">Month {i+1}</span>
                   </div>
                 ))}
                 <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAukTkzV4vbT8pcsysLxjmC7xQgipqYkT-68eVzoHWUez904O7HLZQ8R5XhCh1m_LHME5XZjF6CJb8sL7dbktuuZY_nNbc3xqx6BBNFlsQeeVcrlR_9itWdSjs0LnVaCuNd4E-HFNmB1WIYHqcfFk5rj1dUOyJ-G7izSNi3T7gnVHWckBCsnuclHbaqI-_3VP4jtGDJq4-0dvYYamMr_wbQmUNf1m2JSpSLpAyR6vpzrnrOoszY-AuQalvHerSHAFOcgQu8dQai1UI" alt="chart bg" />
                 </div>
              </div>
            </section>

            {/* Bottom Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Transactions Table */}
              <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold mb-6">Recent Transactions</h3>
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-slate-100">
                    <tr className="text-slate-400 uppercase text-[10px] font-bold">
                      <th className="py-4">Client</th>
                      <th className="py-4">Invoice</th>
                      <th className="py-4">Amount</th>
                      <th className="py-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-medium">TechCorp Inc.</td>
                      <td className="py-4 text-slate-500">#INV-8821</td>
                      <td className="py-4 font-bold">$12,450.00</td>
                      <td className="py-4"><span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold">PAID</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-medium">Global Logistics</td>
                      <td className="py-4 text-slate-500">#INV-8820</td>
                      <td className="py-4 font-bold">$8,200.00</td>
                      <td className="py-4"><span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold">PENDING</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* System Events */}
              <div className="bg-blue-500 p-8 rounded-xl shadow-xl text-white">
                <h3 className="text-lg font-bold mb-6">System Events</h3>
                <div className="space-y-6 relative border-l border-slate-700 ml-2 pl-6">
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                    <p className="text-sm font-medium">Invoice #INV-8821 Paid</p>
                    <p className="text-[10px] text-white">2 minutes ago</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-sm font-medium">New Client Added</p>
                    <p className="text-[10px] text-white">45 minutes ago</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
}
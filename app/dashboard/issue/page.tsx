"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link"; // Fixed: Added missing import

// Types for internal state safety
interface LineItem {
  id: string;
  description: string;
  qty: number;
  rate: number;
}

interface ClientEmails {
  [key: string]: string;
}

export default function IssueInvoicePage() {
  // 1. Form States
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [issueDate, setIssueDate] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  // Fixed: Added missing layout UI states
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // 2. Line Items State
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "initial-item", description: "", qty: 1, rate: 0 }
  ]);

  // Client configuration dictionary mapping values to emails
  const clientEmails: ClientEmails = {
    acme: "billing@acme-industries.com",
    globex: "accounts@globex.co",
    stark: "pepper.potts@stark.com",
  };

  // 3. Handlers
  const handleAddItem = () => {
    const newItem: LineItem = {
      id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      description: "",
      qty: 1,
      rate: 0,
    };
    setLineItems([...lineItems, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    if (lineItems.length === 1) return;
    setLineItems(lineItems.filter((item) => item.id !== id));
  };

  const handleItemChange = (id: string, field: keyof LineItem, value: string | number) => {
    setLineItems(
      lineItems.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // 4. Reactive Calculations
  const subtotal = useMemo(() => {
    return lineItems.reduce((acc, item) => acc + (item.qty * item.rate), 0);
  }, [lineItems]);

  const tax = useMemo(() => subtotal * 0.18, [subtotal]);
  const grandTotal = useMemo(() => subtotal + tax, [subtotal, tax]);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        rel="stylesheet"
      />

      <div className="bg-surface text-on-surface min-h-screen pb-32 font-sans flex flex-col lg:flex-row">
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
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-[#c9c4d8]/30">
                <div className="w-8 h-8 rounded-full bg-[#064e3b] flex items-center justify-center text-white text-xs font-bold">
                  GT
                </div>
              </div>
            </div>
          </header>

          <main className="px-4 py-6 flex flex-col gap-6 max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-2 text-slate-600 mb-2 cursor-pointer hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span className="text-xs font-semibold tracking-wider uppercase">BACK TO INVOICES</span>
            </div>
            <h2 className="text-2xl text-on-surface font-extrabold tracking-tight">Issue New Invoice</h2>

            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Section 1: Customer Details */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,106,69,0.05)] border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-50 text-primary rounded-lg">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <h3 className="text-lg font-semibold">Customer Details</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-2 uppercase">CLIENT NAME</label>
                    <div className="relative">
                      <select
                        value={selectedClient}
                        onChange={(e) => setSelectedClient(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-600/50 focus:border-emerald-600 appearance-none text-sm text-slate-800"
                      >
                        <option value="">Select Client</option>
                        <option value="acme">Acme Corp</option>
                        <option value="globex">Globex Corporation</option>
                        <option value="stark">Stark Industries</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-2 uppercase">EMAIL ADDRESS</label>
                    <input
                      className={`w-full bg-slate-100 text-slate-500 border border-slate-200 rounded-lg px-4 py-3 text-sm cursor-not-allowed ${
                        !selectedClient ? "italic" : ""
                      }`}
                      placeholder="billing@client.com"
                      value={clientEmails[selectedClient] || ""}
                      readOnly
                      type="email"
                    />
                  </div>
                </div>
              </section>

              {/* Section 2: Invoice Info */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,106,69,0.05)] border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-50 text-orange-700 rounded-lg">
                    <span className="material-symbols-outlined">receipt_long</span>
                  </div>
                  <h3 className="text-lg font-semibold">Invoice Info</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-2 uppercase">INVOICE NUMBER</label>
                    <input
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-emerald-700"
                      readOnly
                      type="text"
                      value="INV-2023-0891"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-2 uppercase">ISSUE DATE</label>
                      <input
                        value={issueDate}
                        onChange={(e) => setIssueDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 text-sm"
                        type="date"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-2 uppercase">DUE DATE</label>
                      <input
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 text-sm"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Line Items */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,106,69,0.05)] border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-700 rounded-lg">
                      <span className="material-symbols-outlined">list_alt</span>
                    </div>
                    <h3 className="text-lg font-semibold">Line Items</h3>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  {lineItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-200/60 relative transition-all duration-300"
                    >
                      <div className="flex flex-col gap-3">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <label className="text-xs font-semibold tracking-wider text-slate-500 block uppercase">
                              DESCRIPTION
                            </label>
                            {lineItems.length > 1 && (
                              <button
                                type="button"
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-600 hover:opacity-80 transition-opacity"
                              >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                              </button>
                            )}
                          </div>
                          <input
                            className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm"
                            placeholder="e.g. Cloud Hosting Services"
                            type="text"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-1">
                            <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-1 uppercase">QTY</label>
                            <input
                              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-center"
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={(e) => handleItemChange(item.id, "qty", parseInt(e.target.value) || 0)}
                            />
                          </div>
                          <div className="col-span-1">
                            <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-1 uppercase">RATE</label>
                            <input
                              className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm"
                              placeholder="0.00"
                              type="number"
                              min="0"
                              step="0.01"
                              value={item.rate || ""}
                              onChange={(e) => handleItemChange(item.id, "rate", parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          <div className="col-span-1 flex flex-col justify-end">
                            <div className="bg-emerald-600/5 rounded-lg px-2 py-2 text-right">
                              <p className="text-[10px] font-semibold text-emerald-800 uppercase tracking-tight">TOTAL</p>
                              <p className="text-sm font-bold text-emerald-700">
                                ${(item.qty * item.rate).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full py-3 border-2 border-dashed border-emerald-600/30 text-emerald-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all active:scale-[0.98]"
                  onClick={handleAddItem}
                  type="button"
                >
                  <span className="material-symbols-outlined">add_circle</span>
                  <span className="text-xs font-bold tracking-wider uppercase">ADD NEW ITEM</span>
                </button>
              </section>

              {/* Section 4: Summary */}
              <section className="bg-slate-100 rounded-2xl p-6 border-t-4 border-emerald-700">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span className="text-sm">Tax (18%)</span>
                    <span className="text-sm font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-slate-200 my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Grand Total</span>
                    <span className="text-xl font-extrabold text-emerald-700">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </section>

              {/* Section 5: Notes & Terms */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,106,69,0.05)] border border-slate-100">
                <label className="text-xs font-semibold tracking-wider text-slate-500 block mb-3 uppercase">NOTES &amp; TERMS</label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-600/30"
                  placeholder="Please include invoice number in payment reference. Net 30 terms apply."
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </section>

              {/* Primary & Secondary Actions */}
              <div className="flex flex-col gap-4 mt-4">
                <button
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/20 active:scale-95 transition-all flex items-center justify-center gap-3 text-md uppercase tracking-wider"
                  type="button"
                >
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    send
                  </span>
                  <span>Issue Invoice</span>
                </button>
                <div className="flex justify-center gap-8 py-2">
                  <button className="text-xs font-semibold tracking-wider text-emerald-700 border-b border-emerald-700/30 uppercase" type="button">
                    SAVE AS DRAFT
                  </button>
                  <button className="text-xs font-semibold tracking-wider text-red-600 border-b border-red-600/30 uppercase" type="button">
                    CANCEL
                  </button>
                </div>
              </div>
            </form>
          </main>

          {/* BottomNavBar */}
          <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-2 bg-white border-t border-slate-100 shadow-[0px_-4px_20px_rgba(0,0,0,0.05)] md:hidden z-50 rounded-t-xl">
            <div className="flex flex-col items-center justify-center text-slate-500 p-2 active:scale-90 transition-all duration-200">
              <span className="material-symbols-outlined">home</span>
              <span className="text-[10px] font-semibold tracking-tight uppercase">Home</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-emerald-100 text-emerald-900 rounded-xl p-2 active:scale-90 transition-all duration-200">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                description
              </span>
              <span className="text-[10px] font-semibold tracking-tight uppercase">Bills</span>
            </div>
            <div className="flex flex-col items-center justify-center text-slate-500 p-2 active:scale-90 transition-all duration-200">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-[10px] font-semibold tracking-tight uppercase">Add</span>
            </div>
            <div className="flex flex-col items-center justify-center text-slate-500 p-2 active:scale-90 transition-all duration-200">
              <span className="material-symbols-outlined">settings</span>
              <span className="text-[10px] font-semibold tracking-tight uppercase">Settings</span>
            </div>
          </nav>
        </div> {/* Fixed: Main Content Area is now closed properly */}
      </div>
    </>
  );
}
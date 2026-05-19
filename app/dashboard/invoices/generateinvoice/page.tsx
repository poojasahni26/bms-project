"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // ✅ Added missing import

interface Client {
  id: string;
  name: string;
  email: string;
}

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

const CLIENT_PRESETS: Client[] = [
  { id: "c1", name: "Acme Corp.", email: "billing@acme.com" },
  { id: "c2", name: "Global Tech", email: "billing@globaltech.com" },
  { id: "c3", name: "Stark Industries", email: "payments@stark.io" },
];

export default function IssueInvoicePage() {
  const router = useRouter();

  // --- Core State Machine ---
  const [invoiceType, setInvoiceType] = useState<"proforma" | "tax">("tax");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client>(CLIENT_PRESETS[0]);
  const [invoiceDate, setInvoiceDate] = useState("2026-05-19");
  const [dueDate, setDueDate] = useState("2026-06-02");
  const [invoiceNumber, setInvoiceNumber] = useState("INV-2026-0042");
  
  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: "item-1", description: "Cloud Infrastructure Setup", quantity: 1, unitPrice: 1250.0 },
    { id: "item-2", description: "Premium Support Retainer (Q2)", quantity: 1, unitPrice: 600.0 },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Click Outside Dropdown Menu Closer ---
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Math/Financial Matrix Calculations ---
  const subtotal = lineItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  
  // Tax is mathematically forced to 0 if the profile is configured to "proforma"
  const taxRate = invoiceType === "tax" ? 0.18 : 0; 
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;

  const handleUpdateItem = (id: string, field: keyof LineItem, value: string) => {
    setLineItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        if (field === "quantity") {
          const qty = value === "" ? 0 : parseInt(value, 10);
          return { ...item, quantity: isNaN(qty) ? 0 : qty };
        }
        if (field === "unitPrice") {
          const price = value === "" ? 0 : parseFloat(value);
          return { ...item, unitPrice: isNaN(price) ? 0 : price };
        }
        return { ...item, [field]: value };
      })
    );
  };

  const handleAddItem = () => {
    setLineItems((prev) => [...prev, { id: `item-${Date.now()}`, description: "", quantity: 1, unitPrice: 0.0 }]);
  };

  const handleDeleteItem = (id: string) => {
    if (lineItems.length === 1) return;
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Ledger Manifest Node: ", { invoiceType, selectedClient, lineItems, totalAmount });
  };

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

      {/* Main Wrapper */}
      <div className="md:ml-64 flex flex-col min-h-screen">
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

        {/* PAGE BODY HOUSING ACTION FRAME */}
        <div className="p-8 flex-1 max-w-4xl w-full mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LEFT COMPONENT COLUMN (FORM ELEMENTS) */}
            <div className="md:col-span-2 space-y-6">
              
              {/* Card Layer: Type Selection & Metadata */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-slate-400">description</span> Invoice Settings
                  </h3>
                </div>

                {/* TWO TYPES SWITCH BLOCK */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-500 uppercase tracking-wider block">Document Type</label>
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-md">
                    <button
                      type="button"
                      onClick={() => setInvoiceType("proforma")}
                      className={`py-1.5 px-3 text-xs font-medium rounded-sm transition-all ${
                        invoiceType === "proforma" 
                          ? "bg-white text-slate-900 shadow-sm" 
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Proforma Invoice
                    </button>
                    <button
                      type="button"
                      onClick={() => setInvoiceType("tax")}
                      className={`py-1.5 px-3 text-xs font-medium rounded-sm transition-all ${
                        invoiceType === "tax" 
                          ? "bg-white text-slate-900 shadow-sm" 
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Tax Invoice
                    </button>
                  </div>
                </div>

                {/* Sub-grid Block metadata */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 block">Invoice Reference ID</label>
                    <input 
                      type="text" 
                      value={invoiceNumber} 
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                      className="w-full h-9 border border-slate-200 rounded px-3 bg-slate-50 focus:bg-white focus:border-sky-500 outline-none transition-all text-xs" 
                    />
                  </div>
                  <div className="space-y-1" ref={dropdownRef}>
                    <label className="text-xs font-medium text-slate-500 block">Target Client</label>
                    <div className="relative">
                      <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full h-9 border border-slate-200 rounded px-3 flex items-center justify-between bg-slate-50 cursor-pointer text-xs select-none hover:bg-white"
                      >
                        <span className="truncate">{selectedClient.name}</span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">unfold_more</span>
                      </div>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 w-full bg-white border border-slate-200 rounded mt-1 shadow-lg z-10 overflow-hidden">
                          {CLIENT_PRESETS.map((c) => (
                            <div 
                              key={c.id} 
                              onClick={() => { setSelectedClient(c); setIsDropdownOpen(false); }}
                              className="px-3 py-2 text-xs hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0"
                            >
                              <div className="font-medium text-slate-800">{c.name}</div>
                              <div className="text-[10px] text-slate-400">{c.email}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 block">Issue Date</label>
                    <input 
                      type="date" 
                      value={invoiceDate} 
                      onChange={(e) => setInvoiceDate(e.target.value)}
                      className="w-full h-9 border border-slate-200 rounded px-3 bg-slate-50 focus:bg-white focus:border-sky-500 outline-none transition-all text-xs" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-500 block">Maturity/Due Date</label>
                    <input 
                      type="date" 
                      value={dueDate} 
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full h-9 border border-slate-200 rounded px-3 bg-slate-50 focus:bg-white focus:border-sky-500 outline-none transition-all text-xs" 
                    />
                  </div>
                </div>
              </div>

              {/* Card Layer: Interactive Line Items Grid */}
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h3 className="font-semibold text-slate-900">Line Items</h3>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">{lineItems.length} items</span>
                </div>

                <div className="space-y-3">
                  {lineItems.map((item) => (
                    <div key={item.id} className="flex gap-3 items-start border-b border-slate-50 pb-3 last:border-0 last:pb-0 group">
                      <div className="flex-1 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Item/Description</span>
                        <input 
                          type="text" 
                          placeholder="Ex: API Integration Consulting Services"
                          value={item.description}
                          onChange={(e) => handleUpdateItem(item.id, "description", e.target.value)}
                          className="w-full h-9 border border-slate-200 rounded px-3 focus:border-sky-500 outline-none text-xs"
                        />
                      </div>
                      <div className="w-16 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Qty</span>
                        <input 
                          type="number" 
                          min="0"
                          value={item.quantity === 0 ? "" : item.quantity}
                          onChange={(e) => handleUpdateItem(item.id, "quantity", e.target.value)}
                          className="w-full h-9 border border-slate-200 rounded text-center focus:border-sky-500 outline-none text-xs"
                        />
                      </div>
                      <div className="w-32 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Unit Price</span>
                        <div className="relative">
                          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                          <input 
                            type="number" 
                            step="0.01"
                            min="0"
                            value={item.unitPrice === 0 ? "" : item.unitPrice}
                            onChange={(e) => handleUpdateItem(item.id, "unitPrice", e.target.value)}
                            className="w-full h-9 border border-slate-200 rounded pl-6 pr-2 text-right focus:border-sky-500 outline-none text-xs"
                          />
                        </div>
                      </div>
                      <div className="pt-5">
                        <button
                          type="button"
                          onClick={() => handleDeleteItem(item.id)}
                          disabled={lineItems.length === 1}
                          className="p-1.5 rounded text-rose-500 hover:bg-rose-50 disabled:opacity-0 transition-all"
                        >
                          <span className="material-symbols-outlined text-sm">delete</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleAddItem}
                  className="w-full h-9 border border-dashed border-slate-300 rounded text-slate-600 font-medium text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">add_circle</span> Add Row Item
                </button>
              </div>
            </div>

            {/* RIGHT COMPONENT COLUMN (LEDGER SUMMARY MATRIX) */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-sm space-y-4 sticky top-24">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Financial Breakdown</h3>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Subtotal</span>
                    <span className="font-mono text-slate-700">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500 items-center">
                    <span className="flex items-center gap-1">
                      Tax Liability
                      {invoiceType === "tax" && <span className="bg-emerald-50 text-emerald-700 font-bold px-1 rounded text-[9px]">18%</span>}
                    </span>
                    <span className="font-mono text-slate-700">
                      {invoiceType === "tax" ? `$${taxAmount.toFixed(2)}` : "$0.00 (N/A)"}
                    </span>
                  </div>

                  {invoiceType === "proforma" && (
                    <div className="bg-amber-50 rounded p-2.5 border border-amber-200 text-amber-800 text-[11px] leading-relaxed">
                      <strong>Proforma Mode Notice:</strong> This configuration functions as a commercial estimate. No statutory sales taxes are accrued.
                    </div>
                  )}

                  <div className="pt-3 border-t border-slate-100 flex justify-between items-end">
                    <span className="font-medium text-slate-900 text-sm">Gross Total</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-slate-900 font-mono block tracking-tight">
                        ${totalAmount.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">USD Balance</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded shadow transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <span>Dispatch {invoiceType === "tax" ? "Tax Invoice" : "Proforma"}</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
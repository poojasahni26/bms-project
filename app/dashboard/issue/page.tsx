"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

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

  // --- State Architecture Engine ---
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client>(CLIENT_PRESETS[0]);
  const [invoiceDate, setInvoiceDate] = useState("Oct 24, 2023");
  const [dueDate, setDueDate] = useState("Nov 07, 2023");
  
  const [lineItems, setLineItems] = useState<LineItem[]>([
    {
      id: "item-1",
      description: "Cloud Infrastructure Monthly",
      quantity: 1,
      unitPrice: 1250.0,
    },
    {
      id: "item-2",
      description: "Premium Support Tier",
      quantity: 2,
      unitPrice: 300.0,
    },
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- Click Outside Dropdown Close Listener ---
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Dynamic Financial Summary Calculations ---
  const subtotal = lineItems.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const taxRate = 0.18; 
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;

  // --- Line Item Handlers ---
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
    const newItem: LineItem = {
      id: `item-${Date.now()}`,
      description: "",
      quantity: 1,
      unitPrice: 0.0,
    };
    setLineItems((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    if (lineItems.length === 1) return; 
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmitInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    const invoicePayload = {
      client: selectedClient,
      created: invoiceDate,
      due: dueDate,
      items: lineItems,
      financials: { subtotal, taxAmount, totalAmount },
    };
    console.log("Submitting structured Ledger Invoicing Manifest:", invoicePayload);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen pb-32 font-sans antialiased">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />

      {/* Top Sticky Transactional Header Bar */}
      <header className="sticky top-0 z-50 flex items-center h-[72px] px-8 bg-white shadow-sm border-b border-[#c4c6cf]/30">
        <button
          type="button"
          onClick={() => router.back()}
          className="mr-4 p-2 -ml-2 rounded-full hover:bg-[#e7e8e9] transition-colors active:scale-95 flex items-center justify-center"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[#191c1d]">arrow_back</span>
        </button>
        <h1 className="text-[20px] font-semibold tracking-normal text-[#191c1d]">
          Issue Invoice
        </h1>
      </header>

      {/* Main Structural Context Container */}
      <main className="max-w-md mx-auto p-4 space-y-6">
        <form onSubmit={handleSubmitInvoice} className="space-y-6">

          {/* Section 1: Client Selection */}
          <section className="space-y-2" ref={dropdownRef}>
            <label className="text-[12px] font-semibold tracking-wider text-[#43474e] px-1 uppercase block">
              Client Selection
            </label>
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full p-4 bg-white border border-[#c4c6cf] rounded-lg shadow-sm hover:border-[#191c1d] transition-all cursor-pointer select-none"
              >
                <div className="bg-[#001f3f]/10 p-2 rounded-lg mr-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#001f3f]">person_add</span>
                </div>
                <div className="flex-grow">
                  <p className="text-[14px] text-[#43474e]">Select Client</p>
                  <p className="text-[16px] text-[#000613] font-semibold">{selectedClient.name}</p>
                </div>
                <span className="material-symbols-outlined text-[#74777f]">
                  {isDropdownOpen ? "expand_less" : "expand_more"}
                </span>
              </div>

              {/* Dynamic Floating List Dropdown */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#c4c6cf] rounded-lg shadow-xl z-20 overflow-hidden">
                  {CLIENT_PRESETS.map((client) => (
                    <div
                      key={client.id}
                      onClick={() => {
                        setSelectedClient(client);
                        setIsDropdownOpen(false);
                      }}
                      className="p-3 hover:bg-[#edeeef] transition-colors cursor-pointer border-b border-[#c4c6cf]/30 last:border-b-0"
                    >
                      <p className="text-[14px] font-semibold text-[#191c1d]">{client.name}</p>
                      <p className="text-xs text-[#74777f]">{client.email}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Section 2: Invoice Details Grid */}
          <section className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-semibold tracking-wider text-[#43474e] px-1 uppercase block">
                Invoice Date
              </label>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 bg-white border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all pr-10"
                  type="text"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#74777f] pointer-events-none">
                  calendar_today
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[12px] font-semibold tracking-wider text-[#43474e] px-1 uppercase block">
                Due Date
              </label>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 bg-white border border-[#c4c6cf] rounded-lg text-[14px] text-[#191c1d] focus:border-[#001f3f] focus:ring-1 focus:ring-[#001f3f] outline-none transition-all pr-10"
                  placeholder="Select Date"
                  type="text"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#74777f] pointer-events-none">
                  event
                </span>
              </div>
            </div>
          </section>

          {/* Section 3: Reactive Line Items Rendering Node */}
          <section className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <label className="text-[12px] font-semibold tracking-wider text-[#43474e] uppercase block">
                Line Items
              </label>
              <span className="text-xs font-semibold text-[#000613]/60">{lineItems.length} Items</span>
            </div>

            <div className="space-y-3">
              {lineItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-white border border-[#c4c6cf] rounded-lg shadow-sm space-y-3 relative group"
                >
                  <div className="flex justify-between items-start gap-2">
                    <input
                      className="w-full bg-transparent border-none p-0 text-[14px] font-semibold text-[#191c1d] focus:ring-0 outline-none"
                      placeholder="Description"
                      type="text"
                      value={item.description}
                      onChange={(e) => handleUpdateItem(item.id, "description", e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteItem(item.id)}
                      disabled={lineItems.length === 1}
                      className="text-[#ba1a1a] opacity-0 group-hover:opacity-100 disabled:opacity-0 transition-opacity p-0.5 rounded hover:bg-red-50 flex items-center justify-center"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase text-[#74777f] font-bold block">Qty</span>
                      <input
                        className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded p-2 text-[14px] font-medium text-[#191c1d] text-center outline-none focus:border-[#001f3f]"
                        type="number"
                        min="0"
                        value={item.quantity === 0 ? "" : item.quantity}
                        onChange={(e) => handleUpdateItem(item.id, "quantity", e.target.value)}
                      />
                    </div>
                    <div className="space-y-1 col-span-2">
                      <span className="text-[10px] uppercase text-[#74777f] font-bold block">Unit Price</span>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#43474e] text-sm font-medium">$</span>
                        <input
                          className="w-full bg-[#f3f4f5] border border-[#c4c6cf] rounded p-2 pl-6 text-[14px] font-medium text-[#191c1d] text-right outline-none focus:border-[#001f3f]"
                          type="number"
                          step="0.01"
                          min="0"
                          value={item.unitPrice === 0 ? "" : item.unitPrice}
                          onChange={(e) => handleUpdateItem(item.id, "unitPrice", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddItem}
              className="w-full py-4 border-2 border-dashed border-[#c4c6cf] rounded-lg text-[#000613] font-semibold flex items-center justify-center gap-2 hover:bg-[#d4e3ff]/30 transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined">add_circle</span>
              <span className="text-[12px] font-semibold tracking-wider uppercase">Add Item</span>
            </button>
          </section>

          {/* Section 4: Real-time Calculated Financial Summary Matrix */}
          <section className="bg-[#edeeef] border border-[#c4c6cf] rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-center text-[#43474e]">
              <span className="text-[14px]">Subtotal</span>
              <span className="text-[14px] font-medium font-mono">
                ${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex justify-between items-center text-[#43474e]">
              <div className="flex items-center gap-2">
                <span className="text-[14px]">Tax</span>
                <span className="text-[10px] bg-[#c4c6cf]/40 px-1.5 py-0.5 rounded text-[#43474e] font-bold">18%</span>
              </div>
              <span className="text-[14px] font-medium font-mono">
                ${taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="pt-4 border-t border-[#c4c6cf] flex justify-between items-center">
              <span className="text-[20px] font-semibold tracking-tight text-[#000613]">Total</span>
              <div className="text-right">
                <span className="text-[24px] font-semibold tracking-tight text-[#000613] block">
                  ${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <p className="text-[10px] text-[#74777f] font-bold uppercase tracking-wider">USD Currency</p>
              </div>
            </div>
          </section>

          {/* Fixed Bottom Layout Dispatch Action Control Dock */}
          <footer className="fixed bottom-0 left-0 w-full p-8 bg-white/80 backdrop-blur-md border-t border-[#c4c6cf]/20 z-40">
            <div className="max-w-md mx-auto">
              <button
                type="submit"
                className="w-full h-14 bg-[#001f3f] text-white rounded-lg text-[20px] font-semibold flex items-center justify-center gap-3 shadow-lg hover:bg-[#000613] transition-all active:scale-95 group"
              >
                <span>Issue Invoice</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </div>
          </footer>

        </form>
      </main>
    </div>
  );
}
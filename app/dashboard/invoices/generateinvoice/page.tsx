'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LineItem {
  id: string;
  description: string;
  qty: number;
  price: number;
}

export default function GenerateInvoice() {
  // Navigation Layout State
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Invoice Engine State
  const [invoiceDate, setInvoiceDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [taxRate, setTaxRate] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [clientSearch, setClientSearch] = useState<string>('');
  
  const [items, setItems] = useState<LineItem[]>([
    { id: '1', description: '', qty: 1, price: 0.00 }
  ]);

  // Handler Actions
  const handleAddItem = () => {
    const newItem: LineItem = {
      id: crypto.randomUUID(),
      description: '',
      qty: 1,
      price: 0.00,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems([{ id: '1', description: '', qty: 1, price: 0.00 }]);
    }
  };

  const handleItemChange = (id: string, field: keyof LineItem, value: string | number) => {
    setItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  // Real-time calculation computation engines
  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + (item.qty * item.price), 0);
  }, [items]);

  const taxAmount = useMemo(() => {
    return subtotal * (taxRate / 100);
  }, [subtotal, taxRate]);

  const totalAmount = useMemo(() => {
    return subtotal + taxAmount;
  }, [subtotal, taxAmount]);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans flex flex-col lg:flex-row">
      {/* Material Symbols & Inter Font via Next.js compatible standard links */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      {/* Inline styles backup patch for design configuration compatibility */}
      <style dangerouslySetInnerHTML={{__html: `
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
        }
      `}} />
      
      {/* Navigation Drawer */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col flex-shrink-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white">bolt</span>
          </div>
          <h1 className="text-xl text-[#064e3b] font-bold">Green Telecom BMS</h1>
        </div>

        <nav className="flex-1 space-y-1 text-lg px-4">
          <Link href="/dashboard" className="text-[#064e3b] hover:text-white px-4 py-3 flex items-center gap-3 hover:bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link href="/dashboard/invoices" className="text-white hover:text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all">
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

        {/* User Profile Footer */}
        <div className="px-6 mb-10 flex items-center gap-3 border-t border-[#c9c4d8]/30 pt-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Operations Manager"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-slate-800 font-semibold text-sm truncate">Operations Manager</span>
            <span className="text-slate-500 text-xs">Admin User</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area Container */}
      <div className="flex-grow flex flex-col min-w-0 w-full">
        {/* Top App Bar */}
        <header className="w-full sticky top-0 z-50 bg-white border-b border-[#c9c4d8] px-4 md:px-8 py-3 flex items-center justify-between h-[72px]">
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
                className="w-full bg-[#f0f4fb] border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#064e3b]/20 transition-all placeholder:text-[#484555] placeholder:opacity-50 outline-none" 
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

        {/* Main Content Canvas */}
        <main className="p-6 max-w-2xl mx-auto space-y-6 w-full pb-32">
          
          {/* Client Information Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#006d37]">Client Information</h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Select Client</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[#74777f]">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm placeholder-[#43474e]/50 focus:ring-2 focus:ring-[#001f3f] focus:border-[#001f3f] outline-none transition-all" 
                  placeholder="Search clients..." 
                  type="text"
                  value={clientSearch}
                  onChange={(e) => setClientSearch(e.target.value)}
                />
              </div>
              <div className="mt-4 flex items-center gap-3 p-3 bg-[#f3f4f5] rounded-lg border border-dashed border-[#c4c6cf] cursor-pointer hover:bg-[#e7e8e9] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#6bfe9c] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#001c3a]">person_add</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#000613]">Add New Client</p>
                  <p className="text-xs text-[#74777f]">Create a profile for a new client</p>
                </div>
              </div>
            </div>
          </section>

          {/* Invoice Details Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#006d37]">Invoice Details</h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf] grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Invoice Number</label>
                <input 
                  className="w-full px-4 py-3 bg-[#f3f4f5] border border-[#c4c6cf] rounded-lg text-sm text-[#43474e] cursor-not-allowed outline-none" 
                  readOnly 
                  type="text" 
                  value="INV-2023-0042" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Invoice Date</label>
                <input 
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm focus:ring-[#000613] focus:border-[#000613] outline-none" 
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Due Date</label>
                <input 
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm focus:ring-[#000613] focus:border-[#000613] outline-none" 
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Line Items Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#006d37]">Line Items</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#4ae183]"></div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Item Description</label>
                      <input 
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm outline-none focus:ring-1 focus:ring-[#006d37]" 
                        placeholder="e.g. Professional Consulting" 
                        type="text"
                        value={item.description}
                        onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Qty</label>
                        <input 
                          className="w-full px-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm text-center outline-none" 
                          type="number" 
                          min="1"
                          value={item.qty}
                          onChange={(e) => handleItemChange(item.id, 'qty', parseInt(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Price</label>
                        <input 
                          className="w-full px-3 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm text-right outline-none" 
                          type="number" 
                          step="0.01"
                          value={item.price}
                          onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#43474e] mb-2">Subtotal</label>
                        <div className="w-full px-3 py-3 bg-[#f3f4f5] border border-transparent rounded-lg text-sm text-right text-[#43474e] font-medium">
                          ${(item.qty * item.price).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="mt-4 flex items-center text-[#ba1a1a] text-xs font-semibold tracking-wider uppercase hover:underline gap-1"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span> Remove Item
                  </button>
                </div>
              ))}

              <button 
                onClick={handleAddItem}
                className="w-full py-4 border-2 border-dashed border-[#6bfe9c] text-[#006d37] font-semibold active:bg-[#6bfe9c]/20 transition-colors rounded-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">add_circle</span>
                <span className="text-sm">Add Item</span>
              </button>
            </div>
          </section>

          {/* Summary Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#006d37]">Summary</h2>
            <div className="bg-[#001f3f] text-white p-5 rounded-lg shadow-lg space-y-4">
              <div className="flex justify-between items-center text-[#6f88ad]">
                <span className="text-sm">Subtotal</span>
                <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#6f88ad]">Tax (%)</span>
                  <input 
                    className="w-16 px-2 py-1 bg-white/10 border border-white/20 rounded text-sm text-white text-center focus:outline-none focus:ring-1 focus:ring-white" 
                    placeholder="0" 
                    type="number"
                    min="0"
                    value={taxRate || ''}
                    onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <span className="text-sm font-medium text-[#6f88ad]">${taxAmount.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                <span className="text-xl font-bold">Total Amount</span>
                <span className="text-2xl font-bold text-[#6bfe9c]">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </section>

          {/* Notes & Terms Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#006d37]">Notes &amp; Terms</h2>
            <div className="bg-white p-4 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#c4c6cf]">
              <textarea 
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-[#c4c6cf] rounded-lg text-sm focus:ring-[#000613] focus:border-[#000613] outline-none resize-none" 
                placeholder="Enter payment terms, bank details, or additional notes..." 
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </section>
        </main>

        {/* Footer Actions Panel */}
        <footer className="fixed bottom-0 right-0 w-full lg:w-[calc(100%-280px)] p-6 bg-[#f8f9fa] border-t border-[#c4c6cf] flex gap-3 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
          <button className="flex-1 py-4 px-4 border border-[#006d37] text-[#006d37] font-semibold rounded-lg hover:bg-[#6bfe9c]/10 active:scale-95 transition-all">
            Save as Draft
          </button>
          <button className="flex-[2] py-4 px-4 bg-[#000613] text-white font-semibold rounded-lg shadow-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">receipt_long</span>
            Generate Invoice
          </button>
        </footer>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import Link from "next/link";

export default function AddCustomerPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="[https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0](https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,400,0,0)"
      />

      
      <header className="fixed top-0 left-0 w-full z-50 h-[72px] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-b border-slate-200 flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <Link className="active:opacity-80 transition-opacity duration-150 p-2 -ml-2 rounded-full hover:bg-slate-100 flex items-center justify-center" href="/dashboard/clients">
           
          </Link>
          <h1 className="text-xl font-bold text-slate-900">Add New Customer</h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            type="button" 
            className="material-symbols-outlined text-slate-600 p-2 hover:bg-slate-100 transition-colors rounded-full"
          >
            search
          </button>
        </div>
      </header>

      
      <main className="pt-[92px] px-4 md:px-6 max-w-2xl mx-auto pb-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Section 1: Basic Information */}
          <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-bold text-slate-900">Basic Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Full Name / Company Name
                </label>
                <input 
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm" 
                  placeholder="e.g. Acme Corp" 
                  type="text" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Primary Email
                </label>
                <input 
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm" 
                  placeholder="billing@acme.com" 
                  type="email" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Phone Number
                </label>
                <input 
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel" 
                />
              </div>
            </div>
          </section>

          
          <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-bold text-slate-900">Billing Details</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Billing Address
                </label>
                <textarea 
                  className="w-full p-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm resize-none" 
                  placeholder="Street, City, State, ZIP Code" 
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Tax ID / VAT Number
                  </label>
                  <input 
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm" 
                    placeholder="IE 1234567 X" 
                    type="text" 
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                    Preferred Currency
                  </label>
                  <div className="relative">
                    <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm appearance-none">
                      <option>USD - US Dollar</option>
                      <option>EUR - Euro</option>
                      <option>GBP - British Pound</option>
                      <option>JPY - Japanese Yen</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          <section className="bg-white p-6 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-lg font-bold text-slate-900">Institutional Data</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Industry Type
                </label>
                <div className="relative">
                  <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm appearance-none">
                    <option>Technology </option>
                    <option>Manufacturing</option>
                    <option>Professional Services</option>
                    <option>Healthcare</option>
                    <option>Retail & E-commerce</option>
                  </select>
                </div>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
                  Account Manager
                </label>
                <div className="relative">
                  <select className="w-full h-12 pl-4 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-sm appearance-none">
                    <option>Assign Manager...</option>
                    <option>Sarah Jenkins</option>
                    <option>Michael Chen</option>
                    <option>Alex Rodriguez</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          
          <div className="flex flex-col gap-3 pt-4">
            <button 
              className="w-full h-14 bg-slate-950 text-white text-base font-semibold rounded-lg shadow-lg active:scale-[0.98] transition-all hover:bg-slate-800 flex items-center justify-center gap-2" 
              type="submit"
            >
              Save Customer
            </button>
            <Link className="w-full h-14 bg-white text-slate-800 border border-slate-200 text-base font-semibold rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center" href="/dashboard/clients">
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
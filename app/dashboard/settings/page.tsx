// app/settings/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans selection:bg-[#6bfe9c] flex">
      {/* Google Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />

      {/* Navigation Drawer */}
      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-[280px] bg-white border-r border-[#c9c4d8] z-[70] transition-transform duration-300 overflow-y-auto flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 flex-shrink-0`}>
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
          <Link href="/dashboard/settings" className="text-white px-4 py-3 flex items-center gap-3 bg-[#064e3b] transition-all">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>

        {/* User Profile Footer */}
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
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 md:pl-4 border-l border-[#c9c4d8]/30">
              <div className="w-8 h-8 rounded-full bg-[#064e3b] flex items-center justify-center text-white text-xs font-bold">
                GT
              </div>
            </div>
          </div>
        </header>

        {/* Main Settings Page Interface */}
        <main className="mx-auto w-full max-w-2xl px-4 pb-24 pt-6 sm:px-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#006d37]">
              Settings
            </h2>
            <p className="mt-1 text-sm text-[#43474e]">
              Configure your institutional billing environment
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile */}
            <Section icon="person" title="Profile">
              <NavItem
                title="Personal Information"
                description="Name, email, and professional title"
              />
              <Divider />
              <NavItem
                title="Institutional Access"
                description="BMS Institutional role & permissions"
              />
            </Section>

            {/* Billing Preferences */}
            <Section icon="account_balance_wallet" title="Billing Preferences">
              <ToggleItem
                title="Auto-Issue Invoices"
                description="Automatically generate monthly drafts"
                enabled
              />
              <Divider />
              <NavItem
                title="Currency & Region"
                description="USD ($) — United States"
              />
              <Divider />
              <ToggleItem
                title="Late Fee Warnings"
                description="Notify clients 3 days before due date"
                enabled={false}
              />
            </Section>

            {/* Notifications */}
            <Section icon="notifications" title="Notifications">
              <ToggleItem
                title="Email Summary"
                description="Weekly financial health reports"
                enabled
              />
              <Divider />
              <ToggleItem
                title="Push Alerts"
                description="Instant payment confirmations"
                enabled
              />
            </Section>

            {/* Security */}
            <Section icon="shield" title="Security">
              <NavItem
                title="Two-Factor Authentication"
                description="Enabled via Authenticator"
                descriptionClass="text-[#006d37] font-medium"
              />
              <Divider />
              <NavItem
                title="Active Sessions"
                description="3 devices currently logged in"
              />
            </Section>

            {/* Logout */}
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-[#ffdad6] px-6 py-4 font-semibold text-[#93000a] transition-all active:scale-[0.98]">
              <span className="material-symbols-outlined">logout</span>
              Log Out
            </button>

            {/* Footer */}
            <div className="py-6 text-center">
              <p className="text-xs uppercase tracking-widest text-[#74777f]">
                BMS v2.4.0 — Institutional Edition
              </p>
              <p className="mt-1 text-xs text-[#74777f]">
                © 2024 Global Financial Systems
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile Viewports Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-white/95 px-6 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
        <BottomNavItem icon="dashboard" label="Dashboard" />
        <BottomNavItem icon="receipt_long" label="Invoices" />
        <BottomNavItem icon="payments" label="Payments" />
        <BottomNavItem icon="analytics" label="Reports" />
        <BottomNavItem icon="settings" label="Settings" active />
      </nav>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Components */
/* -------------------------------------------------------------------------- */

function Section({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-2 px-1">
        <span className="material-symbols-outlined text-[20px] text-[#006d37]">
          {icon}
        </span>
        <h3 className="text-xs font-bold uppercase tracking-widest text-[#006d37]">
          {title}
        </h3>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#c4c6cf] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        {children}
      </div>
    </section>
  );
}

function NavItem({
  title,
  description,
  descriptionClass = "text-[#43474e]",
}: {
  title: string;
  description: string;
  descriptionClass?: string;
}) {
  return (
    <div className="group flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-[#edeeef]">
      <div className="flex flex-col">
        <span className="text-base font-semibold text-[#000613]">
          {title}
        </span>
        <span className={`text-sm ${descriptionClass}`}>
          {description}
        </span>
      </div>
      <span className="material-symbols-outlined text-[#74777f] transition-transform group-hover:translate-x-1">
        chevron_right
      </span>
    </div>
  );
}

function ToggleItem({
  title,
  description,
  enabled,
}: {
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex flex-col">
        <span className="text-base font-semibold text-[#000613]">
          {title}
        </span>
        <span className="text-sm text-[#43474e]">
          {description}
        </span>
      </div>

      <button
        className={`relative h-6 w-12 rounded-full transition-colors ${
          enabled ? "bg-[#006d37]" : "bg-[#c4c6cf]"
        }`}
      >
        <div
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all ${
            enabled ? "right-1" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}

function Divider() {
  return <div className="mx-4 h-px bg-[#c4c6cf]" />;
}

function BottomNavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center gap-1 ${
        active ? "font-semibold text-slate-900" : "text-slate-400"
      }`}
    >
      <span
        className="material-symbols-outlined"
        style={
          active ? { fontVariationSettings: "'FILL' 1" } : undefined
        }
      >
        {icon}
      </span>
      <span className="text-[10px]">{label}</span>
    </div>
  );
}
// app/settings/page.tsx
import Image from "next/image";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] font-sans selection:bg-[#6bfe9c]">
      {/* Google Material Icons */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
      />

      {/* Top Navigation */}
      <header className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-3 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer text-slate-900">
            menu
          </span>

          <h1 className="text-lg font-bold text-slate-900">
            Billing Management
          </h1>
        </div>

       

            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-slate-500 hover:bg-slate-100 p-2 rounded-full cursor-pointer transition-colors">notifications</span>
              <div className="w-8 h-8 rounded-full bg-[#001f3f] flex items-center justify-center text-white text-xs font-bold">JD</div>
            </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto min-h-screen max-w-2xl px-4 pb-24 pt-[72px] sm:px-8">
        {/* Header */}
        <div className="mb-6 mt-8">
          <h2 className="text-2xl font-semibold text-[#000613]">
            Settings
          </h2>

          <p className="mt-1 text-sm text-[#43474e]">
            Configure your institutional billing environment
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile */}
          <Section
            icon="person"
            title="Profile"
          >
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
          <Section
            icon="account_balance_wallet"
            title="Billing Preferences"
          >
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
          <Section
            icon="notifications"
            title="Notifications"
          >
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
          <Section
            icon="shield"
            title="Security"
          >
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

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-white/95 px-6 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] backdrop-blur-md md:hidden">
        <BottomNavItem icon="dashboard" label="Dashboard" />
        <BottomNavItem icon="receipt_long" label="Invoices" />
        <BottomNavItem icon="payments" label="Payments" />
        <BottomNavItem icon="analytics" label="Reports" />
        <BottomNavItem
          icon="settings"
          label="Settings"
          active
        />
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
        <span className="material-symbols-outlined text-[20px] text-[#000613]">
          {icon}
        </span>

        <h3 className="text-xs font-semibold uppercase tracking-widest text-[#43474e]">
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
        active
          ? "font-semibold text-slate-900"
          : "text-slate-400"
      }`}
    >
      <span
        className="material-symbols-outlined"
        style={
          active
            ? {
                fontVariationSettings: "'FILL' 1",
              }
            : undefined
        }
      >
        {icon}
      </span>

      <span className="text-[10px]">{label}</span>
    </div>
  );
}
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* This 'children' represents your dashboard/page.tsx */}
      {children}
    </section>
  );
}
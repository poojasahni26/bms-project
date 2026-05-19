"use client"; // This must be at the very top for navigation to work

import React from 'react';
import { useRouter } from 'next/navigation'; // This is the "navigation engine"

export default function LoginPage() {
  const router = useRouter(); // Initialize the router

  // This function runs when the user clicks 'Sign In'
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // In a real app, you'd check email/password here.
    // For now, we go straight to the dashboard!
    router.push('/dashboard'); 
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-center p-8 relative">
      {/* Geometric Background */}
      <div 
        className="fixed inset-0 opacity-40 -z-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #e1e3e4 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <main className="w-full max-w-[440px] flex flex-col gap-8 animate-in fade-in duration-700">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-bold text-[#000613] text-center">Billing Management</h1>
          <p className="text-sm text-slate-500 text-center opacity-80">Institutional Finance Portal</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg border border-slate-200">
          {/* We added onSubmit here to trigger handleLogin */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase" htmlFor="email">Email Address</label>
              <div className="relative">
                <input 
                  className="w-full pl-4 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all" 
                  id="email" 
                  placeholder="manager@institution.com" 
                  required 
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-slate-500 uppercase" htmlFor="password">Password</label>
                <a className="text-xs font-semibold text-blue-900 hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="relative">
                <input 
                  className="w-full pl-4 pr-10 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all" 
                  id="password" 
                  placeholder="••••••••" 
                  required 
                  type="password"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input className="w-4 h-4 rounded border-slate-300 text-blue-900 focus:ring-blue-900" id="remember" type="checkbox"/>
              <label className="text-sm text-slate-600 cursor-pointer select-none" htmlFor="remember">Remember Me</label>
            </div>

            <button className="w-full bg-[#001f3f] text-white py-4 px-6 rounded-lg font-semibold shadow-lg hover:bg-slate-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3" type="submit">
              Sign In
            </button>
          </form>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[10px] text-slate-500 uppercase font-bold">System Online</span>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-8">
        <p className="text-sm text-slate-500">
          Need help? <a className="text-blue-900 font-semibold hover:underline" href="#">Contact System Administrator</a>
        </p>
      </footer>
    </div>
  );
}
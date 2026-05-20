"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  // State tracking variables for your billing system login credentials
  const [email, setEmail] = useState('manager@greentelecom.com');
  const [password, setPassword] = useState('•••••');
  const [rememberMe, setRememberMe] = useState(true);

  // Form submit router navigation engine
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This is where you will eventually hook into your authentication API
    console.log("Logging in with:", { email, password, rememberMe });
    
    // Redirect cleanly to your billing dashboard page layout
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-white">
      
      {/* LEFT SIDE: Illustration Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#F8FAFC] items-center justify-center p-12 overflow-hidden">
        <Image 
          alt="Welcome Illustration" 
          className="max-w-full max-h-full object-contain" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfQ3P-SB5VJyrcorTB3a_Xxd3GW2jmHF6QmYRWKd-btf8puSc6PJZGLda_Rhtrb-4wjwVURdwOOvpPFMt9hm56guxkjDJqnEvuI7mSGUsZEhANsdKoOYd6h7Im5ApjcW4SSH1Z99LwK8d2aredi0lYIJN8adH5GFH4EaKQRGi8jjo3bH8pxWFV62Hdjs4_SgwHGU4PzVwFT80e_v4f4wznBfQFNE9O4BpLBPIkjRNsvTZTrxNHNflXKJ0FYgfxHhRl88XVGiGiNlo"
          width={500}
          height={500}
          priority
        />
      </div>

      {/* RIGHT SIDE: Main Login Content */}
      <main className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white px-6 py-12 lg:px-20">
        <div className="w-full max-w-md">
          
          {/* Welcome Header */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-4xl font-normal text-gray-800 mb-3">Welcome Back :)</h1>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm lg:mx-0 mx-auto">
              To keep connected with us please login with your personal information by email address and password 🔔
            </p>
          </div>

          {/* Form Content Wrapper */}
          <form onSubmit={handleLoginSubmit}>
            <div className="space-y-4 mb-6">
              
              {/* Email Input Field */}
              <div className="space-y-1">
                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-lg px-4 py-4 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
                  <span className="mr-3 text-gray-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </span>
                  <div className="flex-grow flex flex-col">
                    <label className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Email Address</label>
                    <input 
                      className="bg-transparent border-none p-0 focus:ring-0 text-sm font-medium text-gray-700 w-full outline-none" 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <span className="ml-2 text-green-500">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                </div>
              </div>

              {/* Password Input Field */}
              <div className="space-y-1">
                <div className="flex items-center bg-white border border-gray-100 rounded-lg px-4 py-4 shadow-sm focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
                  <span className="mr-3 text-gray-400">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </svg>
                  </span>
                  <div className="flex-grow flex flex-col">
                    <label className="text-[10px] text-gray-400 uppercase font-semibold tracking-wider">Password</label>
                    <div className="flex items-center w-full">
                      <input 
                        className="bg-transparent border-none p-0 focus:ring-0 text-sm font-medium text-gray-700 w-full outline-none"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Remember Me & Forget Password Row */}
            <div className="flex items-center justify-between mb-8 px-1">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded-full w-5 h-5 text-green-500 border-gray-300 focus:ring-green-500" 
                />
                <span className="ml-2 text-xs font-medium text-gray-400">Remember Me</span>
              </label>
              <Link className="text-xs font-medium text-gray-400 hover:text-blue-500 transition-colors" href="/forgot-password">
                Forget Password?
              </Link>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-10">
              <button 
                type="submit"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 rounded-full shadow-lg shadow-blue-200 transition-all active:scale-95 text-center"
              >
                Login Now
              </button>
              <Link 
                href="/register"
                className="flex-1 bg-white border border-gray-100 hover:bg-gray-50 text-gray-500 font-medium py-4 rounded-full shadow-sm transition-all active:scale-95 text-center block"
              >
                Create Account
              </Link>
            </div>
          </form>

          {/* Social Login Section */}
          <div className="text-center">
            <p className="text-xs text-gray-400 font-medium mb-6">Or you can join with</p>
            <div className="flex justify-center space-x-5">
              
              {/* Google Integration Trigger */}
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-50 transition-transform active:scale-90">
                <Image 
                  alt="Google" 
                  className="w-5 h-5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW8FZT9etBX_x5dyUpxYUE15AXqnBSW3md1Wohuqq-_CqKOa4tRFL3rwrPmhHLa91Z2fEujawBCoHW7LYCdG-Y50h1w97_pePWsbXQvM_fwUfb5j6iMJbxaTRPLjc8StMctXTbwwMk0xlNLO5AMMiNwzCFUfQvYrnmfZQO2IZxHSmpK_g0bqPiEQ55lSEjcDuPu5USEapLfyfcZ9YKlxIYCI03j3fDunyghi7y_4hAY195s5VKBiedHcG_pjr-CGEclq99LKa8ywY" 
                  width={20}
                  height={20}
                />
              </button>

              {/* Facebook Button */}
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b5998] text-white shadow-md transition-transform active:scale-90">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </button>

              {/* Twitter Button */}
              <button type="button" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1da1f2] text-white shadow-md transition-transform active:scale-90">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </button>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
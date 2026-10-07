import logo from './assets/logo.png'
import { Wrench, Phone } from 'lucide-react'

export default function App() {
  const phoneNumber = '+91 84497 51133'
  const telLink = 'tel:+918449751133'

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-red-600 selection:text-white relative">
      {/* Top subtle red brand bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600" />

      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-red-50/60 blur-3xl pointer-events-none -z-0 rounded-full" />

      {/* Navigation / Header */}
      <header className="relative z-10 w-full border-b border-slate-100 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Chakshu Logo" 
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={telLink}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-200 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{phoneNumber}</span>
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-red-600 -ml-4" />
              <span>Maintenance Mode</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-2xl mx-auto px-6 py-16 sm:py-28 flex flex-col items-center justify-center text-center">
        
        {/* Status Indicator Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 shadow-sm mb-6">
          <Wrench className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 stroke-[1.8]" />
        </div>

        {/* Main Headings */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Website Under <span className="text-red-600">Maintenance</span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
          We are currently performing scheduled maintenance and routine system upgrades to improve your experience. We will be back online shortly!
        </p>

        {/* Contact Number */}
        <div className="mt-8">
          <a
            href={telLink}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-600 font-semibold text-sm transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-red-600" />
            <span>Contact: {phoneNumber}</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-100 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-slate-600">
            Chakshu &mdash; Your Success, Our Mission
          </p>
          <div className="flex items-center gap-1.5 text-slate-600">
            <span>Contact:</span>
            <a 
              href={telLink} 
              className="font-semibold text-slate-700 hover:text-red-600 transition-colors inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-red-600" />
              {phoneNumber}
            </a>
          </div>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Chakshu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

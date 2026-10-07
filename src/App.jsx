import logo from './assets/logo.png'
import { Wrench, Phone, MessageCircle } from 'lucide-react'

export default function App() {
  const phoneNumber = '+91 84497 51133'
  const telLink = 'tel:+918449751133'
  const waLink = 'https://wa.me/918449751133?text=Hello%20Chakshu%20Team'

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
      <main className="relative z-10 flex-1 max-w-2xl mx-auto px-6 py-12 sm:py-20 flex flex-col items-center justify-center text-center">
        
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

        {/* Contact Information Card */}
        <div className="mt-8 sm:mt-10 w-full max-w-md bg-slate-50/90 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">
            Need Immediate Assistance?
          </p>
          <p className="text-sm text-slate-600 mb-6">
            For urgent queries or support, reach out to us directly:
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Phone Call Button */}
            <a
              href={telLink}
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 stroke-[2.2]" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 stroke-[2.2]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-center gap-2 text-slate-700">
            <span className="text-xs text-slate-500 font-medium">Contact:</span>
            <a 
              href={telLink} 
              className="text-sm font-semibold text-slate-800 hover:text-red-600 transition-colors"
            >
              {phoneNumber}
            </a>
          </div>
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

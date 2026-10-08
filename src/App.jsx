import logo from './assets/logo.png'
import { Wrench, Phone } from 'lucide-react'

function WhatsAppIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function App() {
  const phoneNumber = '+91 84497 51133'
  const telLink = 'tel:+918449751133'
  const whatsappLink = 'https://wa.me/918449751133'

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
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a 
              href={telLink}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-200 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>{phoneNumber}</span>
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
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

        {/* Contact Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={telLink}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 hover:text-red-600 font-semibold text-sm transition-all shadow-xs"
          >
            <Phone className="w-4 h-4 text-red-600" />
            <span>Call: {phoneNumber}</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsAppIcon className="w-4.5 h-4.5 fill-current" />
            <span>WhatsApp: {phoneNumber}</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-100 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-slate-600">
            Chakshu &mdash; Your Success, Our Mission
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-600">
            <div className="flex items-center gap-1.5">
              <span>Call:</span>
              <a 
                href={telLink} 
                className="font-semibold text-slate-700 hover:text-red-600 transition-colors inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-red-600" />
                {phoneNumber}
              </a>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1.5">
              <span>WhatsApp:</span>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 hover:underline"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                {phoneNumber}
              </a>
            </div>
          </div>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Chakshu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

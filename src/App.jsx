import logo from './assets/logo.png'
import { Wrench } from 'lucide-react'

export default function App() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-red-600 -ml-4" />
            <span>Maintenance Mode</span>
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
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-100 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-medium text-slate-600">
            Chakshu &mdash; Your Success, Our Mission
          </p>
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} Chakshu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

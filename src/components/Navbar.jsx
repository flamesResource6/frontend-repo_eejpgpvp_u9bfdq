import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
      <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-900 bg-blue-100' : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'}`}>Home</NavLink>
      <NavLink to="/services" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-900 bg-blue-100' : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'}`}>Services</NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-900 bg-blue-100' : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'}`}>About</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-blue-900 bg-blue-100' : 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'}`}>Contact</NavLink>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md" />
            <span className="text-lg font-semibold text-blue-950">AquaWash</span>
          </Link>

          <nav className="hidden md:block">
            {navItem}
          </nav>

          <div className="md:hidden">
            <button aria-label="Toggle Menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Menu size={20} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            <div className="pt-4">
              {navItem}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

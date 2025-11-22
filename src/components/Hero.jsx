import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-white via-sky-50 to-slate-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-slate-100/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-blue-950">
            Crystal-Clean Pressure Washing
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            Transform your home&apos;s curb appeal with safe, professional soft and power washing. Driveways, siding, roofs, decks, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 hover:bg-cyan-500 text-blue-950 font-semibold px-6 py-3 shadow-sm shadow-cyan-200 transition">
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white/80 hover:bg-white text-slate-800 font-medium px-6 py-3 transition">
              Explore Services
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
            <div className="h-2 w-2 rounded-full bg-cyan-400" /> Licensed & Insured
            <div className="h-2 w-2 rounded-full bg-cyan-400" /> Eco-Friendly Solutions
            <div className="h-2 w-2 rounded-full bg-cyan-400" /> Satisfaction Guaranteed
          </div>
        </div>
      </div>
    </section>
  )
}

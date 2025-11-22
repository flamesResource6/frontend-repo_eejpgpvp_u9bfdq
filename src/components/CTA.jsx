import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-100 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-blue-950 text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(600px 200px at 20% -10%, rgba(34,211,238,0.8), transparent), radial-gradient(600px 200px at 120% 110%, rgba(34,211,238,0.8), transparent)'}} />
          <div className="relative">
            <h2 className="text-3xl font-bold">Ready for a like-new clean?</h2>
            <p className="mt-2 text-blue-100">We\'ll assess your surfaces and recommend the safest, most effective plan.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-cyan-400 hover:bg-cyan-300 text-blue-950 font-semibold px-6 py-3 transition">Get My Quote</Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 transition border border-white/20">See Services</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // For now just simulate success; can be wired to backend later
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! We\'ll be in touch shortly.')
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-950">Contact Us</h2>
          <p className="mt-2 text-slate-600">Get a fast, no-pressure quote. Share a few details and we\'ll reach out.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input required className="mt-1 w-full rounded-md border-slate-300 focus:border-cyan-400 focus:ring-cyan-400" placeholder="Jane Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-slate-700">Phone</label>
            <input required className="mt-1 w-full rounded-md border-slate-300 focus:border-cyan-400 focus:ring-cyan-400" placeholder="(555) 123-4567" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Address</label>
            <input className="mt-1 w-full rounded-md border-slate-300 focus:border-cyan-400 focus:ring-cyan-400" placeholder="123 Ocean Ave" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">What do you need cleaned?</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-cyan-400 focus:ring-cyan-400" placeholder="Driveway, siding, deck..." />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="text-sm text-slate-600">We reply within 24 hours.</div>
            <button type="submit" className="inline-flex items-center rounded-lg bg-cyan-400 hover:bg-cyan-500 text-blue-950 font-semibold px-5 py-2.5 shadow-sm shadow-cyan-200 transition">Send</button>
          </div>
        </form>

        {status && (
          <div className="mt-4 text-cyan-700 bg-cyan-50 border border-cyan-200 rounded-md px-4 py-3">
            {status}
          </div>
        )}
      </div>
    </section>
  )
}

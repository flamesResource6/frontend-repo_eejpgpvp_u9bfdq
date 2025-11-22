import { Droplets, ShieldCheck, Leaf, TimerReset } from 'lucide-react'

const features = [
  {
    icon: Droplets,
    title: 'Soft & Power Wash',
    desc: 'We match the right pressure and solution to each surface for a deep clean without damage.'
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Professional service with full coverage so you can rest easy.'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Biodegradable solutions safe for your family, pets, and plants.'
  },
  {
    icon: TimerReset,
    title: 'Fast Scheduling',
    desc: 'Get a quote in minutes and book the time that works for you.'
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
              <div className="h-10 w-10 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-blue-950">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

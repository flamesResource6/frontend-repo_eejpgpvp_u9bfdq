export default function Services() {
  const items = [
    { title: 'House Washing', desc: 'Gentle soft wash for siding and exteriors', price: 'From $199' },
    { title: 'Driveway & Walkways', desc: 'Remove oil, grime, and stains from concrete', price: 'From $129' },
    { title: 'Roof Cleaning', desc: 'Safe soft wash to eliminate algae and streaks', price: 'From $299' },
    { title: 'Decks & Fences', desc: 'Revive wood surfaces and prep for staining', price: 'From $149' },
    { title: 'Patios & Pool Areas', desc: 'Slip-free, sparkling outdoor living spaces', price: 'From $149' },
    { title: 'Gutters & Soffits', desc: 'Brighten trim and improve drainage', price: 'From $99' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-blue-950">Services</h2>
          <p className="mt-2 text-slate-600">Transparent pricing and honest recommendations. Bundle services to save.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50">
              <h3 className="font-semibold text-blue-950">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 inline-flex items-center rounded-md bg-cyan-100 text-cyan-700 px-3 py-1 text-sm font-medium">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

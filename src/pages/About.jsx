export default function About() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-blue-950">About Us</h2>
          <p className="mt-4 text-slate-700 leading-7">
            We are a local, family-owned pressure washing company dedicated to making homes sparkle. With years of experience and professional-grade equipment, we deliver exceptional results while protecting your property. Our approach blends soft washing with the right detergents for a deep clean that&apos;s safe for siding, roofs, windows, and landscaping.
          </p>
          <p className="mt-4 text-slate-700 leading-7">
            We show up on time, communicate clearly, and treat your home like our own. Our mission is simple: raise your curb appeal and keep your home looking its best year-round.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <div className="text-3xl font-extrabold text-blue-950">500+</div>
              <div className="text-sm text-slate-600">Homes refreshed</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <div className="text-3xl font-extrabold text-blue-950">100%</div>
              <div className="text-sm text-slate-600">Satisfaction guarantee</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <div className="text-3xl font-extrabold text-blue-950">24hr</div>
              <div className="text-sm text-slate-600">Quote turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

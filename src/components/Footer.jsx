export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-600 text-sm">© {new Date().getFullYear()} AquaWash. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-600 hover:text-blue-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-blue-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

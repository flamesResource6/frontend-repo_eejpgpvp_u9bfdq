import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import CTA from './components/CTA'

function AppRouter() {
  return (
    <Layout>
      <Home />
      <CTA />
    </Layout>
  )
}

export default AppRouter

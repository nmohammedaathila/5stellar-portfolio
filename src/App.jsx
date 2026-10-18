import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="skip">Skip to content</a>
      <Navbar /><main><Hero /><About /><Services /><Clients /><Contact /></main><Footer />
    </MotionConfig>
  )
}

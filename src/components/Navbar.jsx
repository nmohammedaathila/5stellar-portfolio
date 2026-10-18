import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/5steller-logo.png'
import { nav } from '../data/site'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <motion.header className="nav" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .6 }}>
      <div className="nav-in">
        <a href="#top" className="brand" aria-label="5 Stellar home"><img src={logo} alt="5 Stellar logo" className="mark-img" /><b>5 STELLAR</b></a>
        <nav className="links" aria-label="Main">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{l}{active === id && <motion.i layoutId="ul" />}</a>)}
        </nav>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div className="drawer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
          {nav.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </motion.div>}
      </AnimatePresence>
    </motion.header>
  )
}

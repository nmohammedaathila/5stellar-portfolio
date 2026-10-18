import { motion } from 'framer-motion'
import logo from '../assets/5steller-logo.png'
import { contact, nav } from '../data/site'
export default function Footer() {
  return (
    <motion.footer className="foot" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="wrap fgrid">
        <div><img src={logo} alt="5 Stellar logo" className="mark-img lg" /><p>Creative Minds. Business Results.</p></div>
        <nav aria-label="Footer">{nav.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}</nav>
        <div><a href={contact.tel}>{contact.phone}</a><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.instagramUrl} target="_blank" rel="noreferrer">{contact.instagram}</a><span>{contact.location}</span></div>
      </div>
      <p className="copy">© {new Date().getFullYear()} 5 Stellar. All rights reserved.</p>
    </motion.footer>
  )
}

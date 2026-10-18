import { motion } from 'framer-motion'
import logo from '../assets/5steller-logo.png'
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .7 } } }
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="glow" aria-hidden />
      <motion.div className="hero-in" initial="hidden" animate="show" transition={{ staggerChildren: .15 }}>
        <div className="hero-text">
          <motion.p variants={item} className="eyebrow">Creative Minds. Business Results.</motion.p>
          <motion.h1 variants={item}>PLAN BETTER. SELL MORE. <span className="gold-t">GROW FASTER.</span></motion.h1>
          <motion.h2 variants={item}>Your Business. Our Strategy. Measurable Growth.</motion.h2>
          <motion.p variants={item} className="lead">5 Steller helps businesses strengthen their strategy, improve sales, optimize operations, and achieve sustainable growth through practical consulting and performance-driven solutions.</motion.p>
          <motion.div variants={item} className="row">
            <a className="btn gold" href="#clients">Explore Our Work</a>
          </motion.div>
        </div>
        <motion.div variants={item} className="hero-art">
          <img src={logo} alt="5 Stellar logo: a navy and gold star with an upward growth arrow" />
          <svg viewBox="0 0 300 120" className="growth" aria-hidden>
            <motion.path d="M5 105 L70 80 L110 90 L180 45 L230 55 L290 10" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: .8 }} />
            <motion.path d="M262 8 L290 10 L282 36" fill="none" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

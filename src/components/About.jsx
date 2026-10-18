import { motion } from 'framer-motion'
import { Search, ShieldCheck, Lightbulb, Rocket, Infinity as Inf, Star, Flag, BarChart2, Cog } from 'lucide-react'
import Reveal from './Reveal'
const journey = [
  [Search, 'Study', 'Understand the business, its challenges, and opportunities.'],
  [ShieldCheck, 'Strengthen', 'Identify gaps and establish stronger business foundations.'],
  [Lightbulb, 'Strategize', 'Build a focused plan.'],
  [Rocket, 'Scale', 'Implement growth initiatives and expand opportunities.'],
  [Inf, 'Sustain', 'Track performance, improve systems, and support continued growth.'],
]
const why = [
  [Search, 'ANALYSE', 'Find the gaps and opportunities.'],
  [Lightbulb, 'STRATEGIZE', 'Build a focused plan.'],
  [Cog, 'IMPLEMENT', 'Put the right systems into action.'],
  [BarChart2, 'MEASURE', 'Track performance and improve.'],
]
export default function About() {
  return (
    <section id="about" className="sec">
      <Reveal className="wrap center">
        <p className="eyebrow">About</p><h2 className="h">What Is 5 Steller?</h2>
        <p className="lead mid">5 Steller is a Business Growth System and Revenue Consulting Firm that helps companies improve their strategy, sales, and overall operations. We focus on practical strategies, data-driven decisions, business performance and continuous improvement.</p>
      </Reveal>
      <div className="wrap">
        <Reveal className="center"><h3 className="h2">What Does 5 Steller Mean?</h3></Reveal>
        <div className="jcard-row">
          {journey.map(([I, t, d], i) => (
            <motion.div key={t} className="jcard" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .15 }}>
              <div className="jcard-inner">
                <span className="jcard-node"><I size={22} /></span>
                <b className="jcard-title">{i + 1}. {t}</b>
                <p className="jcard-desc">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="wrap center vm-wrap">
        <div className="vm-card">
          <div className="vm-panel"><span className="vm-label">VISION</span>
            <div className="vm-content">
              <Star className="gold-i vm-icon" />
              <h3>Vision</h3>
              <p>To become a trusted growth partner for businesses, helping them build stronger, more profitable and sustainable businesses through practical strategies, measurable performance and continuous improvement.</p>
            </div>
          </div>
          <div className="vm-panel"><span className="vm-label">MISSION</span>
            <div className="vm-content">
              <Flag className="gold-i vm-icon" />
              <h3>Mission</h3>
              <p>To help businesses turn challenges into measurable growth by improving revenue, customer acquisition, digital presence and operational performance through practical strategies, data-driven insights and continuous performance monitoring.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap center">
        <Reveal><h3 className="h2">Why 5 Steller?</h3><p className="lead mid">Business growth is not one-dimensional.</p></Reveal>
        <div className="grid4">
          {why.map(([I, t, d], i) => (
            <motion.div key={t} className="card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}>
              <I className="gold-i" /><h4>{t}</h4><p>{d}</p>
            </motion.div>
          ))}
        </div>
        <Reveal><p className="quote">Your Vision. Our Strategy. 5 Stellar Growth.</p></Reveal>
      </div>
    </section>
  )
}

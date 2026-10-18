import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import ccLogo from '../assets/cclogo.png'
import GrowthTimeline from './GrowthTimeline'
import DashboardGallery from './DashboardGallery'
export default function ClientCaseStudy({ c }) {
  return (
    <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} className={`case ${c.id}`}>
      <header className="case-head">
        {c.logo
          ? <img src={c.logo} alt={`${c.name} logo`} className="clogo" />
          : c.initials
            ? <div className="clogo ph" aria-label={`${c.name} logo placeholder`}><span style={{fontSize:'2.2rem',fontWeight:700,fontFamily:"'Cormorant Garamond',serif",letterSpacing:'.08em'}}>{c.initials}</span></div>
            : <img src={ccLogo} alt="Choose & Chew Restaurant logo" className="clogo" style={{ border: 'none', borderRadius: '24px' }} />}
        <div><h3>{c.name}</h3><p className="tag">{c.industry}</p><p><b>Focus:</b> {c.focus}</p><p className="overview">{c.overview}</p></div>
      </header>
      <GrowthTimeline stages={['Initial Stage', 'Our Growth Strategy', 'Current Status']} />

      <h4 className="stage">Stage 1 — Initial Stage</h4>
      <ul className="ticks">{c.initial.map(t => <li key={t}><CheckCircle2 size={18} />{t}</li>)}</ul>
      <p className="note">{c.initialNote}</p>

      <h4 className="stage">Stage 2 — Our Growth Strategy</h4>
      <div className={c.modules.length === 3 ? 'grid3' : 'grid2'}>{c.modules.map(({ icon: I, title, points }, i) => (
        <motion.div key={title} className="card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
          <I className="gold-i" /><h5>{String.fromCharCode(65 + i)}. {title}</h5><ul>{points.map(p => <li key={p}>{p}</li>)}</ul>
        </motion.div>))}</div>

      <h4 className="stage">Stage 3 — Current Status</h4>
      {c.snapshots || c.dashboardSnapshots || c.activityItems ? (
        <DashboardGallery
          snapshots={c.snapshots || c.dashboardSnapshots}
          activityItems={c.activityItems}
          note={c.snapshotNote}
        />
      ) : (<>
        <ul className="chips">{c.activities.map(a => <li key={a}>{a}</li>)}</ul>
        <div className="grid4">{c.placeholders.map(p => <div key={p} className="card ph-metric"><small>{p}</small><b>[Insert verified figure]</b></div>)}</div>
      </>)}
      <p className="conclusion"><b>Case study conclusion.</b> {c.conclusion}</p>
    </motion.div>
  )
}

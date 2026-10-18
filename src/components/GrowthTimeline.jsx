import { motion } from 'framer-motion'
export default function GrowthTimeline({ stages }) {
  return (
    <ol className="tl">
      {stages.map((s, i) => (
        <motion.li key={s} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .2 }}>
          <span className="dot">{i + 1}</span><b>{s}</b>
        </motion.li>
      ))}
      <motion.span className="tl-line" aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
    </ol>
  )
}

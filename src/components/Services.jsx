import { motion } from 'framer-motion'
import { services } from '../data/services'
import Reveal from './Reveal'
export default function Services() {
  return (
    <section id="services" className="sec alt">
      <div className="wrap">
        <Reveal className="center"><p className="eyebrow">Our Service</p><h2 className="h">Six ways we grow your business</h2></Reveal>
        <div className="grid3">
          {services.map(({ icon: I, title, tag, text }, i) => (
            <motion.article key={title} className="card hov" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} whileHover={{ y: -6 }}>
              <I className="gold-i" size={30} /><h3>{title}</h3><p className="tag">{tag}</p><p>{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

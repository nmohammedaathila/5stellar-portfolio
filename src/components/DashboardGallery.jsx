import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Counter from './Counter'
// Place dashboard screenshots and activity creatives in public/assets using the matching filename.
// Public assets are served directly, so no bundler-specific image glob is needed.
const find = (key) => {
  if (!key) return ''
  if (key.startsWith('http') || key.startsWith('/') || key.startsWith('data:')) return key
  if (/\.(png|jpe?g|svg|webp)$/i.test(key)) {
    return `${process.env.PUBLIC_URL || ''}/assets/${key}`
  }
  return `${process.env.PUBLIC_URL || ''}/assets/${key}.png`
}

export default function DashboardGallery({ snapshots = [], activityItems = null, note }) {
  const [big, setBig] = useState(null)

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setBig(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])

  return (
    <div className="stage3-gallery-wrap">
      {/* Executed Brand & Marketing Activities Showcase */}
      {activityItems && activityItems.length > 0 && (
        <div className="stage3-activities-block">
          <div className="stage3-section-title-wrap">
            <h5 className="stage3-section-title">Brand &amp; Marketing Execution Deliverables</h5>
            <span className="stage3-section-badge">Active Scope Deliverables</span>
          </div>
          <div className="oru-activities-grid">
            {activityItems.map((act, i) => {
              const src = find(act.image)
              return (
                <motion.div
                  key={act.title}
                  className="card activity-image-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <button
                    type="button"
                    className="activity-thumb-btn"
                    onClick={() => setBig({ src, label: act.title, caption: act.description })}
                    aria-label={`Open ${act.title} image larger`}
                  >
                    <img
                      src={src}
                      alt={act.alt || `${act.title} image`}
                      className="activity-card-img"
                      loading="lazy"
                    />
                    {act.type && <span className="activity-type-pill">{act.type}</span>}
                    <div className="activity-zoom-hint" aria-hidden="true">
                      <span>Click to enlarge</span>
                    </div>
                  </button>
                  <div className="activity-card-body">
                    <h6 className="activity-card-title">{act.title}</h6>
                    {act.description && <p className="activity-card-desc">{act.description}</p>}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* Analytics & Performance Tracking Dashboards */}
      {snapshots && snapshots.length > 0 && (
        <div className="stage3-dashboards-block">
          {activityItems && (
            <div className="stage3-section-title-wrap" style={{ marginTop: '36px' }}>
              <h5 className="stage3-section-title">Performance Tracking &amp; Analytics Dashboards</h5>
              <span className="stage3-section-badge sample">Illustrative Sample Dashboards</span>
            </div>
          )}
          <div className={snapshots.length === 3 ? 'grid3' : snapshots.length === 4 ? 'grid2 dash-grid2' : 'grid2'}>
            {snapshots.map((s) => {
              const src = find(s.image)
              return (
                <motion.figure
                  key={s.label}
                  className="snap"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <figcaption>{s.label}</figcaption>
                  {s.value !== undefined ? (
                    <>
                      <strong className="big">
                        <Counter value={s.value} />
                      </strong>
                      <small>{s.sublabel || 'Dashboard-reported total sales'}</small>
                    </>
                  ) : (
                    <div className="dash-subhead-row">
                      <small className="dash-illustrative-tag">
                        {s.sublabel || 'Sample Illustrative Dashboard'}
                      </small>
                      {s.metricNote && <span className="dash-metric-note">{s.metricNote}</span>}
                    </div>
                  )}
                  <button
                    type="button"
                    className="thumb"
                    onClick={() => setBig({ src, label: s.label, caption: s.metricNote || s.sublabel })}
                    aria-label={`Open ${s.label} screenshot larger`}
                  >
                    <img
                      src={src}
                      alt={s.alt || `${s.label} dashboard screenshot`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.classList.add('empty')
                        const hint = document.createElement('span')
                        hint.textContent = `Add ${s.image} to public/assets`
                        if (!e.currentTarget.parentElement.querySelector('span')) {
                          e.currentTarget.parentElement.appendChild(hint)
                        }
                      }}
                    />
                  </button>
                </motion.figure>
              )
            })}
          </div>
        </div>
      )}

      {note && <p className="note">{note}</p>}

      <AnimatePresence>
        {big && (
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={big.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setBig(null)}
          >
            <button className="close" aria-label="Close" onClick={() => setBig(null)} autoFocus>
              <X />
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={big.src}
                alt={`${big.label}, enlarged view`}
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                className="modal-img"
              />
              <div className="modal-caption-bar">
                <span className="modal-caption-title">{big.label}</span>
                {big.caption && <span className="modal-caption-text">{big.caption}</span>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

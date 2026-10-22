import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react'
import { contact } from '../data/site'
import logo from '../assets/5steller-logo.png'

/* 3-D interactive tilt hook with gentle spring dynamics */
function useCardTilt() {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Gentle, understated tilt for professional 3D feel
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5.5, -5.5]), { stiffness: 140, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5.5, 5.5]), { stiffness: 140, damping: 20 })
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ['10%', '90%']), { stiffness: 140, damping: 20 })
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ['10%', '90%']), { stiffness: 140, damping: 20 })

  const onMouseMove = (e) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave }
}

export default function Contact() {
  const { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave } = useCardTilt()

  const contactItems = [
    {
      key: 'phone',
      icon: Phone,
      iconColor: '#16a34a',
      iconProps: { strokeWidth: 2.4 },
      label: 'PHONE',
      value: contact?.phone || '+91 93446 13855',
      href: contact?.tel || 'tel:+919344613855',
      external: false,
      ariaLabel: 'Call +91 93446 13855',
    },
    {
      key: 'email',
      icon: Mail,
      iconColor: '#dc2626',
      iconProps: { strokeWidth: 2.2 },
      label: 'EMAIL',
      value: contact?.email || 'director5stellar@gmail.com',
      href: `mailto:${contact?.email || 'director5stellar@gmail.com'}`,
      external: false,
      ariaLabel: 'Send email to director5stellar@gmail.com',
    },
    {
      key: 'instagram',
      icon: Instagram,
      iconColor: '#e1306c',
      iconProps: { strokeWidth: 2.2 },
      label: 'INSTAGRAM',
      value: contact?.instagram || '@5.stellar',
      href: contact?.instagramUrl || 'https://www.instagram.com/5.stellar/',
      external: true,
      ariaLabel: 'Visit 5.stellar on Instagram',
    },
    {
      key: 'linkedin',
      icon: Linkedin,
      iconColor: '#0a66c2',
      iconProps: { fill: '#0a66c2', strokeWidth: 0.6 },
      label: 'LINKEDIN',
      value: '5 Steller',
      href: contact?.linkedinUrl || 'https://www.linkedin.com/company/5-stellar',
      external: true,
      ariaLabel: 'Visit 5 Steller on LinkedIn',
    },
  ]

  return (
    <section id="contact" className="sec contact-sec">
      <div className="wrap">
        {/* Pill above main card matching existing site theme */}
        <div className="contact-eyebrow-wrap">
          <span className="eyebrow contact-pill">CONTACT</span>
        </div>

        {/* 3-D interactive scene */}
        <div className="contact-scene">
          <motion.div
            ref={ref}
            className="contact-card"
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Interactive specular glare highlight */}
            <motion.div
              className="contact-glare"
              style={{
                left: glareX,
                top: glareY,
              }}
              aria-hidden="true"
            />

            {/* Header section with heading, gold underline, and subtitle */}
            <div className="contact-header">
              <h2 className="contact-title">Get in Touch With Us!</h2>
              <div className="contact-underline" aria-hidden="true" />
              <p className="contact-subtitle">
                We&apos;re here to help you Grow. Reach out to us for Business
                <br className="contact-br" />
                Company, Strategy and Support.
              </p>
            </div>

            {/* Main content grid: 4 contact cards on left + Company logo on right */}
            <div className="contact-grid">
              {/* Left: 2-column balanced contact info cards */}
              <div className="contact-cards-grid">
                {contactItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.key}
                      href={item.href}
                      className="contact-item-card"
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      aria-label={item.ariaLabel}
                    >
                      <div className="contact-icon-bubble" aria-hidden="true">
                        <Icon size={19} color={item.iconColor} {...(item.iconProps || {})} />
                      </div>
                      <div className="contact-item-text">
                        <span className="contact-item-label">{item.label}</span>
                        <span className="contact-item-value" title={item.value}>
                          {item.value}
                        </span>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Right: Prominent 5 Steller company logo */}
              <div className="contact-logo-container">
                <motion.div
                  className="contact-logo-card"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={logo}
                    alt="5 Steller - Creative Minds, Business Results"
                    className="contact-logo-img"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
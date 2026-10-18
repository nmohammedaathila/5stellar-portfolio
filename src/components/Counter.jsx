import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
export default function Counter({ value }) {
  const ref = useRef(null); const inView = useInView(ref, { once: true }); const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)
  useEffect(() => {
    if (!inView || reduce) { if (reduce) setN(value); return }
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: v => setN(Math.round(v)), onComplete: () => setN(value) })
    return () => c.stop()
  }, [inView, value, reduce])
  return <span ref={ref}>₹{n.toLocaleString('en-IN')}</span>
}

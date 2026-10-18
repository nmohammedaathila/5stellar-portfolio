import { useState } from 'react'
import { clients } from '../data/clients'
import ClientCaseStudy from './ClientCaseStudy'
import Reveal from './Reveal'
export default function Clients() {
  const [i, setI] = useState(0)
  return (
    <section id="clients" className="sec">
      <div className="wrap">
        <Reveal className="center"><p className="eyebrow">Our Clients</p><h2 className="h">Work we're proud of</h2></Reveal>
        <div className="tabs" role="tablist" aria-label="Client case studies">
          {clients.map((c, k) => <button key={c.id} role="tab" aria-selected={i === k} className={i === k ? 'on' : ''} onClick={() => setI(k)}>{c.name}</button>)}
        </div>
        <ClientCaseStudy c={clients[i]} />
      </div>
    </section>
  )
}

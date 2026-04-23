import { useState, useEffect } from 'react'
import titleImg from '../assets/title/title.png'

const GOLD = '#dd5d0d'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Certificates', 'Contact']

  return (
    <nav
      className="fixed-top py-3"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? `1px solid rgba(221,93,13,0.2)` : 'none',
        transition: 'all 0.4s ease',
        zIndex: 1000,
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        <a href="#home" className="text-decoration-none">
          <img src={titleImg} alt="Arsyil.dev" style={{ height: '36px', objectFit: 'contain' }} />
        </a>

        {/* Desktop */}
        <div className="d-none d-lg-flex gap-2">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-white text-decoration-none fw-bold text-uppercase px-3 py-2"
              style={{ fontSize: '0.75rem', letterSpacing: '3px', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = '#fff'}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="d-lg-none border-0 bg-transparent fw-bold fs-4"
          style={{ color: GOLD, cursor: 'pointer' }}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="container mt-2 pb-3"
          style={{ borderTop: `1px solid rgba(221,93,13,0.2)` }}
        >
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="d-block text-white text-decoration-none fw-bold text-uppercase py-2"
              style={{ fontSize: '0.75rem', letterSpacing: '3px' }}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

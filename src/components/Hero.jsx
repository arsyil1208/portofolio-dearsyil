import { useState } from 'react'
import profile1 from '../assets/image/profile.png'
import profile2 from '../assets/image/profile2.png'
import profile3 from '../assets/image/profile3.png'

const photos = [
  { src: profile1, label: 'Coding' },
  { src: profile2, label: 'Barista' },
  { src: profile3, label: 'Trail' },
]

const GOLD = '#dd5d0d'

function PhotoCard({ src, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="d-flex flex-column overflow-hidden flex-shrink-0"
      style={{
        width: 'clamp(80px, 20vw, 160px)',
        border: `1px solid ${hovered ? GOLD : 'rgba(221,93,13,0.4)'}`,
        transform: hovered ? 'scale(1.3)' : 'scale(1)',
        transition: 'transform 0.35s ease, border-color 0.35s ease',
        zIndex: hovered ? 10 : 0,
        position: 'relative',
      }}
    >
      <img
        src={src}
        alt={label}
        className="w-100 flex-grow-1"
        style={{ objectFit: 'cover', objectPosition: 'top center', minHeight: 'clamp(120px, 25vw, 280px)', display: 'block' }}
      />
      <div className="text-center py-1" style={{ background: 'rgba(0,0,0,0.75)' }}>
        <span className="fw-bold text-uppercase" style={{ fontSize: '0.45rem', letterSpacing: '2px', color: GOLD }}>
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden"
      style={{ minHeight: '100vh', background: '#000' }}
    >
      <div
        className="d-lg-none position-absolute w-100 h-100"
        style={{
          backgroundImage: `url(${profile1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          top: 0, left: 0,
          zIndex: 0,
        }}
      />
      <div
        className="position-absolute w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(221,93,13,0.08) 0%, rgba(0,0,0,0) 50%, rgba(221,93,13,0.05) 100%), linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.25) 100%)',
          zIndex: 1,
          top: 0, left: 0,
        }}
      />
      <div
        className="d-none d-lg-flex align-items-center position-relative w-100 h-100"
        style={{ zIndex: 2, minHeight: '100vh' }}
      >
        <div className="container py-5" style={{ paddingTop: '100px' }}>
          <span className="d-block fw-bold text-uppercase mb-3" style={{ fontSize: '0.7rem', letterSpacing: '6px', color: GOLD }}>
            Frontend Dev · Backend Learner · Wikrama
          </span>
          <div className="d-flex align-items-stretch justify-content-between gap-4">
            <h1
              className="mb-0 text-uppercase text-white flex-shrink-0"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)', lineHeight: 0.92, letterSpacing: '-2px', fontWeight: 900 }}
            >
              De'Arsyil
              <span className="d-block" style={{ color: GOLD }}>Putera</span>
              Pertama
            </h1>
            <div className="d-flex gap-2 align-self-stretch">
              {photos.map(p => <PhotoCard key={p.label} src={p.src} label={p.label} />)}
            </div>
          </div>
          <p className="mt-3 mb-4 fw-medium text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '3px', color: '#ccc' }}>
            Membangun website yang nyaman dipakai, bukan sekadar enak dilihat.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="#projects" className="btn fw-bold text-uppercase px-4 py-3"
              style={{ background: GOLD, color: '#000', fontSize: '0.7rem', letterSpacing: '4px' }}>
              Lihat Projects
            </a>
            <a href="#contact" className="btn fw-bold text-uppercase px-4 py-3"
              style={{ border: `1px solid ${GOLD}`, color: GOLD, fontSize: '0.7rem', letterSpacing: '4px' }}>
              Hubungi Saya
            </a>
            <a href="/cv/cv.pdf" download className="btn fw-bold text-uppercase px-4 py-3"
              style={{ border: '1px solid #555', color: '#ccc', fontSize: '0.7rem', letterSpacing: '4px' }}>
              Unduh CV
            </a>
          </div>
        </div>
      </div>
      <div
        className="d-flex d-lg-none flex-column justify-content-end position-relative w-100"
        style={{ zIndex: 2, minHeight: '100vh', paddingBottom: '5rem' }}
      >
        <div className="px-4">
          <span className="d-block fw-bold text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '5px', color: GOLD }}>
            Frontend Dev · Backend Learner · Wikrama
          </span>
          <h1
            className="text-uppercase text-white mb-1"
            style={{ fontSize: 'clamp(2.8rem, 14vw, 5rem)', lineHeight: 0.92, letterSpacing: '-1px', fontWeight: 900 }}
          >
            De'Arsyil
            <span className="d-block" style={{ color: GOLD }}>Putera</span>
            Pertama
          </h1>
          <p className="mt-2 mb-4 fw-medium text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '2px', color: '#ccc' }}>
            Membangun website yang nyaman dipakai, bukan sekadar enak dilihat.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a href="#projects" className="btn fw-bold text-uppercase px-3 py-2"
              style={{ background: GOLD, color: '#000', fontSize: '0.65rem', letterSpacing: '3px' }}>
              Lihat Projects
            </a>
            <a href="#contact" className="btn fw-bold text-uppercase px-3 py-2"
              style={{ border: `1px solid ${GOLD}`, color: GOLD, fontSize: '0.65rem', letterSpacing: '3px' }}>
              Hubungi Saya
            </a>
            <a href="/cv/cv.pdf" download className="btn fw-bold text-uppercase px-3 py-2"
              style={{ border: '1px solid #555', color: '#ccc', fontSize: '0.65rem', letterSpacing: '3px' }}>
              Unduh CV
            </a>
          </div>
        </div>
      </div>
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x pb-4 d-flex flex-column align-items-center gap-1"
        style={{ zIndex: 3, color: '#888', fontSize: '0.65rem', letterSpacing: '3px' }}
      >
        <span className="text-uppercase">Scroll</span>
      </div>
    </section>
  )
}

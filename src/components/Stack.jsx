import { useState } from 'react'

const GOLD = '#dd5d0d'

const stacks = [
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React JS',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Bootstrap',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PHP',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'GitHub',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Vite',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
]

function StackItem({ icon, name }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="col-6 col-sm-4 col-md-3 col-lg-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="text-center py-4 px-2 h-100"
        style={{
          background: '#111',
          border: `1px solid ${hovered ? GOLD : 'rgba(221,93,13,0.15)'}`,
          transition: 'border-color 0.3s',
        }}
      >
        <img
          src={icon}
          alt={name}
          className="d-block mx-auto mb-2"
          style={{ width: '2rem', height: '2rem', objectFit: 'contain',
            filter: name === 'GitHub' ? 'invert(1)' : 'none'
          }}
        />
        <span className="fw-bold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '3px', color: '#ccc' }}>{name}</span>
      </div>
    </div>
  )
}

export default function Stack() {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #111008 30%, #0c0b05 60%, #0a0a0a 100%)' }}>
      <div className="container py-5">
        <div className="row align-items-end mb-5">
          <div className="col-lg-7">
            <span className="d-block fw-bold text-uppercase mb-2" style={{ fontSize: '0.65rem', letterSpacing: '6px', color: GOLD }}>Tech Stack</span>
            <h2 className="fw-black text-uppercase text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-1px', lineHeight: 1 }}>
              Yang Dipakai<br />Sehari-hari
            </h2>
            <div style={{ width: '60px', height: '2px', background: GOLD }} />
          </div>
          <div className="col-lg-5">
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '0.9rem' }}>
              Bukan yang paling lengkap, tapi ini yang benar-benar dipakai dan dipahami cara kerjanya.
            </p>
          </div>
        </div>
        <div className="row g-0">
          {stacks.map(s => <StackItem key={s.name} icon={s.icon} name={s.name} />)}
        </div>
      </div>
    </section>
  )
}

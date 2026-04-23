const GOLD = '#dd5d0d'

export default function Footer() {
  return (
    <footer className="py-4" style={{ background: 'linear-gradient(135deg, #000 0%, #0a0803 50%, #000 100%)', borderTop: '1px solid rgba(221,93,13,0.15)' }}>
      <div className="container">
        <div className="row align-items-center gy-3">
          <div className="col-md-3">
            <a
              href="#home"
              className="fw-black text-uppercase text-decoration-none"
              style={{ fontSize: '1.3rem', letterSpacing: '4px', color: GOLD }}
            >
              Arsyil.dev
            </a>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-center flex-wrap gap-3 gap-md-4">
              {['Home', 'About', 'Projects', 'Certificates', 'Contact'].map(l => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-decoration-none fw-bold text-uppercase"
                  style={{ fontSize: '0.65rem', letterSpacing: '3px', color: '#888', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = GOLD}
                  onMouseLeave={e => e.target.style.color = '#888'}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="col-md-3 text-md-end">
            <p className="mb-0 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.2)' }}>
              © 2026 De'Arsyil Putera Pertama
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid rgba(221,93,13,0.1)' }}>
          <p className="mb-0 text-uppercase" style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.2)' }}>
            Dibuat sendiri - oleh De'Arsyil Putera Pertama
          </p>
        </div>
      </div>
    </footer>
  )
}

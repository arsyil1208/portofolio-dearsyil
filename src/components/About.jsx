const GOLD = "#dd5d0d";

const skills = [
  {
    name: "Frontend",
    pct: 85,
    desc: "React, HTML, CSS — yang paling sering disentuh setiap hari.",
  },
  {
    name: "Backend",
    pct: 75,
    desc: "Laravel & PHP, masih terus belajar tapi sudah cukup solid.",
  },
  {
    name: "UI & UX",
    pct: 80,
    desc: "Suka memikirkan flow dan feel-nya sebelum mulai nulis kode.",
  },
];

const stats = [
  { num: "2+", label: "Tahun Belajar" },
  { num: "5+", label: "Projects" },
  { num: "2", label: "Sertifikat" },
  { num: "11+", label: "Teknologi" },
];

export default function About() {
  return (
    <>
      {/* Stats bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #0a0a0a 0%, #111008 50%, #0a0a0a 100%)',
          borderTop: "1px solid rgba(221,93,13,0.15)",
          borderBottom: "1px solid rgba(221,93,13,0.15)",
        }}
      >
        <div className="container">
          <div className="row">
            {stats.map((s, i) => (
              <div
                key={i}
                className="col-6 col-md-3 text-center py-4"
                style={{
                  borderLeft:
                    i > 0 ? "1px solid rgba(221,93,13,0.15)" : "none",
                }}
              >
                <span
                  className="d-block fw-black"
                  style={{
                    fontSize: "clamp(2rem,4vw,3.5rem)",
                    lineHeight: 1,
                    color: GOLD,
                  }}
                >
                  {s.num}
                </span>
                <span
                  className="d-block fw-bold text-uppercase mt-2"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "4px",
                    color: "#888",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-5" style={{ background: 'linear-gradient(135deg, #050505 0%, #0d0b04 40%, #080808 70%, #050505 100%)' }}>
        <div className="container py-5">
          <div className="row gy-5 align-items-start">
            <div className="col-lg-5">
              <span
                className="d-block fw-bold text-uppercase mb-2"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "6px",
                  color: GOLD,
                }}
              >
                Tentang Saya
              </span>
              <h2
                className="fw-black text-uppercase text-white mb-3"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                Siapa
                <br />
                Saya
              </h2>
              <div
                className="mb-4"
                style={{ width: "60px", height: "2px", background: GOLD }}
              />
              <p
                className="mb-4"
                style={{ color: "#888", lineHeight: 1.9, fontSize: "0.9rem" }}
              >
                Nama saya De' Arsyil Putera Pertama, saya siswa PPLG di SMK
                Wikrama Bogor. Saya menyukai <em>frontend</em> maupun <em>backend</em>, dan fokus
                membuat produk yang nyaman digunakan. Sekarang sudah jadi hal
                yang benar-benar dinikmati — terutama saat membangun sesuatu
                yang terlihat bagus dan nyaman dipakai.
              </p>
              <p
                className="mb-4"
                style={{ color: "#888", lineHeight: 1.9, fontSize: "0.9rem" }}
              >
                Sudah pernah membangun website dengan <em>Laravel, React.js, dan
                  HTML dasar.</em> Masih banyak yang ingin dipelajari, jadi saya lebih suka langsung mencoba dan praktik sendiri.
              </p>
              <p className="mb-4"
                style={{ color: "#888", lineHeight: 1.9, fontSize: "0.9rem" }}>
                Saya juga mengikuti ekstrakurikuler barista. Jadi selain suka ngoding,
                saya juga senang meracik kopi. Buat saya, bikin website dan bikin kopi 
                itu mirip — sama-sama perlu detail, rasa, dan pengalaman yang nyaman untuk orang lain.              </p>
              <p
                style={{
                  color: "rgba(221, 114, 0, 0.86)",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                }}
              >
                "Kalau desainnya jelek, fiturnya sebagus apapun tetap tidak ada
                yang mau pakai."
              </p>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <span
                className="d-block fw-bold text-uppercase mb-2"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "6px",
                  color: GOLD,
                }}
              >
                Skill Level
              </span>
              <h2
                className="fw-black text-uppercase text-white mb-3"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                Yang Saya
                <br />
                Kuasai
              </h2>
              <div
                className="mb-4"
                style={{ width: "60px", height: "2px", background: GOLD }}
              />
              {skills.map((s) => (
                <div key={s.name} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span
                      className="fw-bold text-uppercase text-white"
                      style={{ fontSize: "0.7rem", letterSpacing: "3px" }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="fw-bold"
                      style={{ fontSize: "0.7rem", color: GOLD }}
                    >
                      {s.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: `${s.pct}%`,
                        height: "100%",
                        background: GOLD,
                      }}
                    />
                  </div>
                  <p
                    className="mt-1 mb-0"
                    style={{ fontSize: "0.75rem", color: "#888" }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

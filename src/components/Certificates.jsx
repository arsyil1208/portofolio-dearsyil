import { useState } from "react";
import sertif1 from "../assets/sertificate/sertif1.png";
import sertif2 from "../assets/sertificate/sertif2.png";

const GOLD = "#dd5d0d";

const certs = [
  {
    num: "01",
    img: sertif1,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "13 Januari 2025",
  },
  {
    num: "02",
    img: sertif2,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "12 November 2024",
  },
];

function CertCard({ num, img, title, issuer, date, onView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <div
        className="h-100 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#111",
          border: `1px solid ${hovered ? GOLD : "rgba(221,93,13,0.15)"}`,
          transition: "border-color 0.3s",
        }}
      >
        <div className="p-3" style={{ background: "#1a1a1a" }}>
          <img
            src={img}
            alt={title}
            className="w-100"
            style={{ display: "block", objectFit: "contain" }}
          />
        </div>
        <div className="p-4">
          <span
            className="d-block fw-black mb-3"
            style={{
              fontSize: "2rem",
              color: "rgba(221,93,13,0.15)",
              lineHeight: 1,
            }}
          >
            {num}
          </span>
          <h3
            className="fw-black text-uppercase text-white mb-2"
            style={{ fontSize: "1rem", letterSpacing: "1px", lineHeight: 1.3 }}
          >
            {title}
          </h3>
          <p
            className="fw-bold text-uppercase mb-1"
            style={{ fontSize: "0.65rem", letterSpacing: "3px", color: GOLD }}
          >
            {issuer}
          </p>
          <p className="mb-4" style={{ fontSize: "0.78rem", color: "#888" }}>
            Selesai {date}
          </p>
          <button
            onClick={() => onView(img, title)}
            className="btn fw-bold text-uppercase p-0 border-0 bg-transparent"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "4px",
              color: GOLD,
              borderBottom: `1px solid ${GOLD}`,
              paddingBottom: "2px",
              borderRadius: 0,
            }}
          >
            Lihat Sertifikat
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="py-5"
        style={{
          background:
            "linear-gradient(160deg, #0a0a0a 0%, #0f0d06 40%, #0a0a0a 100%)",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-end mb-5">
            <div className="col-lg-6">
              <span
                className="d-block fw-bold text-uppercase mb-2"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "6px",
                  color: GOLD,
                }}
              >
                Bukti Belajar
              </span>
              <h2
                className="fw-black text-uppercase text-white mb-3"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                Sertifikat
              </h2>
              <div style={{ width: "60px", height: "2px", background: GOLD }} />
            </div>
            <div className="col-lg-6 text-lg-end">
              <p style={{ color: "#888", fontSize: "0.9rem" }}>
                Dua sertifikat yang sudah diselesaikan di Dicoding.
              </p>
            </div>
          </div>
          <div className="row g-3 justify-content-center">
            {certs.map((c) => (
              <CertCard
                key={c.num}
                {...c}
                onView={(img, title) => setModal({ img, title })}
              />
            ))}
          </div>
        </div>
      </section>
      {modal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.92)", zIndex: 9999 }}
          onClick={() => setModal(null)}
        >
          <div
            className="position-relative"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="position-absolute btn border-0 fw-black text-white"
              style={{
                top: "-2.5rem",
                right: 0,
                fontSize: "1.5rem",
                background: "transparent",
                lineHeight: 1,
              }}
            >
              ✕
            </button>

            <img
              src={modal.img}
              alt={modal.title}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                display: "block",
                objectFit: "contain",
              }}
            />

            <p
              className="text-center fw-bold text-uppercase mt-3 mb-0"
              style={{ fontSize: "0.7rem", letterSpacing: "3px", color: GOLD }}
            >
              {modal.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

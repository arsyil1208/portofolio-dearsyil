import { useState } from "react";
import p1 from "../assets/project/project1.png";
import p2 from "../assets/project/project2.png";
import p3 from "../assets/project/project3.png";
import p4 from "../assets/project/project4.png";
import p5 from "../assets/project/project5.png";

const GOLD = "#dd5d0d";

const projects = [
  {
    num: "01",
    img: p1,
    title: "Wisata Bromo",
    desc: "Proyek pertama yang membuat saya sadar betapa pentingnya visual. Full landing page promosi wisata Bromo — dari hero sampai galeri.",
    link: "https://github.com/arsyil1208/laravel-wisata-bromo",
  },
  {
    num: "02",
    img: p2,
    title: "Coney Island Recreations",
    desc: "Website rekreasi lengkap dengan sistem beli tiket online. Proyek pertama yang benar-benar serius memikirkan UX flow-nya.",
    link: "https://github.com/arsyil1208/rekreasi",
  },
  {
    num: "03",
    img: p3,
    title: "Kode Pos Indonesia",
    desc: "Cari kode pos yang simpel — ketik nama daerah, langsung keluar. Dibuat karena platform yang ada terlalu ribet.",
    link: "https://kode-pos-daerah-indonesia.netlify.app/",
  },
  {
    num: "04",
    img: p4,
    title: "TIX ID Clone",
    desc: "Mencoba rebuild TIX ID — ada pilih film, pilih kursi, sampai checkout. Banyak belajar soal state management di sini.",
    link: "https://github.com/arsyil1208/tixid",
  },
  {
    num: "05",
    img: p5,
    title: "Platzi Fake Store",
    desc: "Latihan consume REST API untuk toko online. Simpel, tapi proyek ini yang mengajarkan cara kerja fetch dan async/await.",
    link: "https://arsyil1208.github.io/fake-store-react/",
  },
];

function ProjectCard({ num, img, title, desc, link }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div
        className="h-100 overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#111",
          border: `1px solid ${hovered ? GOLD : "rgba(221,93,13,0.15)"}`,
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center overflow-hidden"
          style={{ height: "200px", background: "#1a1a1a" }}
        >
          <img
            src={img}
            alt={title}
            className="w-100 h-100"
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </div>
        <div className="p-4">
          <span
            className="d-block fw-bold text-uppercase mb-2"
            style={{ fontSize: "0.6rem", letterSpacing: "4px", color: GOLD }}
          >
            {num}
          </span>
          <h3
            className="fw-black text-uppercase text-white mb-2"
            style={{ fontSize: "1rem", letterSpacing: "1px" }}
          >
            {title}
          </h3>
          <p
            className="mb-3"
            style={{ fontSize: "0.82rem", color: "#888", lineHeight: 1.7 }}
          >
            {desc}
          </p>
          <a
            href={link}
            className="fw-bold text-uppercase text-decoration-none"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "4px",
              color: GOLD,
              borderBottom: `1px solid ${GOLD}`,
              paddingBottom: "2px",
            }}
          >
            Lihat Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{ background: 'linear-gradient(135deg, #050505 0%, #0a0905 35%, #060606 70%, #050505 100%)' }}>
      <div className="container py-5">
        <div className="row align-items-end mb-5">
          <div className="col-lg-6">
            <span
              className="d-block fw-bold text-uppercase mb-2"
              style={{ fontSize: "0.65rem", letterSpacing: "6px", color: GOLD }}
            >
              Yang Sudah Dibuat
            </span>
            <h2
              className="fw-black text-uppercase text-white mb-3"
              style={{
                fontSize: "clamp(2rem,4vw,3rem)",
                letterSpacing: "-1px",
                lineHeight: 1,
              }}
            >
              Projects
            </h2>
            <div style={{ width: "60px", height: "2px", background: GOLD }} />
          </div>
          <div className="col-lg-6 text-lg-end">
            <p style={{ color: "#888", fontSize: "0.9rem" }}>
              Masih terus bertambah, ini yang sudah selesai.
            </p>
          </div>
        </div>
        <div className="row g-3">
          {projects.map((p) => (
            <ProjectCard key={p.num} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const GOLD = "#dd5d0d";

const SERVICE_ID = "service_f7kry9q";
const TEMPLATE_ID = "template_ekiiwjd";
const PUBLIC_KEY = "i-6h2Xp8DyvzwLn-c";

const contactInfo = [
  { label: "Email", val: "de'arsyilputerapertama@smkwikrama.sch.id" },
  { label: "Lokasi", val: "Bogor, Indonesia" },
  { label: "Sekolah", val: "SMK Wikrama Bogor" },
];

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <>
      <div
        className="text-center py-5"
        style={{ background: "linear-gradient(90deg, #dd5d0df5)" }}
      >
        <p
          className="fw-black text-uppercase mb-0"
          style={{
            fontSize: "clamp(1.5rem,4vw,3rem)",
            letterSpacing: "4px",
            color: "#000",
          }}
        >
          Ada Project? Yuk Kita Diskusi.
        </p>
      </div>
      <section
        id="contact"
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #000 0%, #0a0803 40%, #050505 70%, #000 100%)",
        }}
      >
        <div className="container py-5">
          <div className="row gy-5">
            <div className="col-lg-4">
              <span
                className="d-block fw-bold text-uppercase mb-2"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "6px",
                  color: GOLD,
                }}
              >
                Kontak
              </span>
              <h2
                className="fw-black text-uppercase text-white mb-3"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                Reach
                <br />
                Out
              </h2>
              <div
                className="mb-4"
                style={{ width: "60px", height: "2px", background: GOLD }}
              />
              <p
                className="mb-4"
                style={{ color: "#888", lineHeight: 1.9, fontSize: "0.9rem" }}
              >
                Terbuka untuk kolaborasi, diskusi project, freelance, maupun
                kesempatan magang. Pesan akan dibalas paling lama dalam satu
                hari.
              </p>
              <p
                className="fw-bold text-uppercase mb-4"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "3px",
                  color: "rgba(221,93,13,0.6)",
                }}
              >
                Open untuk freelance & magang
              </p>
              <div
                className="pt-4"
                style={{ borderTop: "1px solid rgba(221,93,13,0.15)" }}
              >
                {contactInfo.map((item) => (
                  <div key={item.label} className="mb-4">
                    <span
                      className="d-block fw-bold text-uppercase mb-1"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "3px",
                        color: GOLD,
                      }}
                    >
                      {item.label}
                    </span>
                    <span style={{ fontSize: "0.9rem", color: "#ccc" }}>
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Nama Anda"
                      required
                      className="w-100 bg-transparent text-white"
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                        outline: "none",
                        padding: "1rem 0",
                        fontSize: "0.85rem",
                        letterSpacing: "1px",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = GOLD)}
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.15)")
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Email Anda"
                      required
                      className="w-100 bg-transparent text-white"
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                        outline: "none",
                        padding: "1rem 0",
                        fontSize: "0.85rem",
                        letterSpacing: "1px",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = GOLD)}
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.15)")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subjek"
                      required
                      className="w-100 bg-transparent text-white"
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                        outline: "none",
                        padding: "1rem 0",
                        fontSize: "0.85rem",
                        letterSpacing: "1px",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = GOLD)}
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.15)")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Ceritakan lebih detail..."
                      required
                      className="w-100 bg-transparent text-white"
                      style={{
                        border: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.15)",
                        outline: "none",
                        padding: "1rem 0",
                        fontSize: "0.85rem",
                        letterSpacing: "1px",
                        resize: "none",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = GOLD)}
                      onBlur={(e) =>
                        (e.target.style.borderBottomColor =
                          "rgba(255,255,255,0.15)")
                      }
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn fw-bold text-uppercase px-4 py-3"
                      style={{
                        background: GOLD,
                        color: "#000",
                        fontSize: "0.7rem",
                        letterSpacing: "4px",
                        opacity: status === "sending" ? 0.7 : 1,
                      }}
                    >
                      {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                    {status === "success" && (
                      <p
                        className="mt-3 fw-bold text-uppercase mb-0"
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "2px",
                          color: "#4ade80",
                        }}
                      >
                        ✓ Pesan berhasil terkirim!
                      </p>
                    )}
                    {status === "error" && (
                      <p
                        className="mt-3 fw-bold text-uppercase mb-0"
                        style={{
                          fontSize: "0.75rem",
                          letterSpacing: "2px",
                          color: "#f87171",
                        }}
                      >
                        ✗ Gagal kirim. Coba lagi.
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

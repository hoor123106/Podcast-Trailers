import React, { useEffect, useState } from "react";

export default function App() {
  /* ================= RESPONSIVE ================= */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= STYLES ================= */
  const styles = {
    page: {
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #111827, #020617)",
      padding: isMobile ? "32px 16px" : "60px 24px",
      fontFamily: "Inter, Arial, sans-serif",
      color: "#e5e7eb",
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: isMobile ? "40px" : "70px",
    },
    title: {
      fontSize: isMobile ? "28px" : "42px",
      fontWeight: "700",
      marginBottom: "12px",
    },
    subtitle: {
      color: "#9ca3af",
      fontSize: isMobile ? "14px" : "16px",
    },
    section: {
      marginBottom: isMobile ? "45px" : "70px",
    },
    sectionTitle: {
      fontSize: isMobile ? "18px" : "22px",
      fontWeight: "600",
      marginBottom: "22px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
    },
    card: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      borderRadius: "18px",
      padding: isMobile ? "18px" : "22px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
    },
    cardTitle: {
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: "600",
      marginBottom: "14px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: isMobile ? "13px" : "14px",
      marginBottom: "10px",
    },
    price: {
      fontWeight: "600",
      color: "#ffffff",
    },
    badge: {
      fontSize: "11px",
      background: "#16a34a",
      color: "#fff",
      padding: "4px 8px",
      borderRadius: "999px",
      display: "inline-block",
      marginBottom: "10px",
    },
  };

  /* ================= HELPERS ================= */
  const monthlyPrice = (singlePrice, qty = 4) => {
    const total = singlePrice * qty;
    const discount = total * 0.15;
    return `$${Math.round(total - discount)}`;
  };

  /* ================= COMPONENTS ================= */
  const Section = ({ title, children }) => (
    <div style={styles.section}>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <div style={styles.grid}>{children}</div>
    </div>
  );

  const Card = ({ title, items, monthly }) => (
    <div style={styles.card}>
      {monthly && <span style={styles.badge}>15% OFF Monthly</span>}
      <h3 style={styles.cardTitle}>{title}</h3>
      {items.map((item, i) => (
        <div key={i} style={styles.row}>
          <span>{item.label}</span>
          <span style={styles.price}>{item.price}</span>
        </div>
      ))}
    </div>
  );

  /* ================= PAGE ================= */
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Content Editing & Branding Packages</h1>
          <p style={styles.subtitle}>
            Podcast • Reels • Thumbnails • Branding
          </p>
        </header>

        <Section title="Podcast Trailers – Horizontal">
          <Card
            title="Single Trailers"
            items={[
              { label: "30 Seconds", price: "$50" },
              { label: "60 Seconds", price: "$70" },
              { label: "90 Seconds", price: "$80" },
            ]}
          />
          <Card
            monthly
            title="Monthly (4 Trailers)"
            items={[
              { label: "4 × 30 Seconds", price: monthlyPrice(50) },
              { label: "4 × 60 Seconds", price: monthlyPrice(70) },
              { label: "4 × 90 Seconds", price: monthlyPrice(80) },
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

import React from "react";

export default function App() {
  /* ================= STYLES ================= */
  const styles = {
    page: {
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #111827, #020617)",
      padding: "60px 24px",
      fontFamily: "Inter, Arial, sans-serif",
      color: "#e5e7eb",
    },
    container: {
      maxWidth: "1300px",
      margin: "0 auto",
    },
    header: {
      textAlign: "center",
      marginBottom: "70px",
    },
    title: {
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "12px",
    },
    subtitle: {
      color: "#9ca3af",
      fontSize: "16px",
    },
    section: {
      marginBottom: "70px",
    },
    sectionTitle: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "22px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "28px",
    },
    card: {
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      borderRadius: "20px",
      padding: "22px",
      border: "1px solid rgba(255,255,255,0.08)",
      boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "14px",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
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

        {/* Podcast Horizontal */}
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

        {/* Podcast Horizontal + Vertical */}
        <Section title="Podcast Trailers – Horizontal + Vertical (1 Clip)">
          <Card
            title="Single Trailers"
            items={[
              { label: "30 Seconds (H + V)", price: "$80" },
              { label: "60 Seconds (H + V)", price: "$110" },
              { label: "90 Seconds (H + V)", price: "$140" },
            ]}
          />
          <Card
            monthly
            title="Monthly (4 Trailers)"
            items={[
              { label: "4 × 30 Seconds", price: monthlyPrice(80) },
              { label: "4 × 60 Seconds", price: monthlyPrice(110) },
              { label: "4 × 90 Seconds", price: monthlyPrice(140) },
            ]}
          />
        </Section>

        {/* Reels */}
        <Section title="Reels Editing">
          <Card
            title="Simple Reels"
            items={[
              { label: "30 Seconds", price: "$20" },
              { label: "60 Seconds", price: "$40" },
              { label: "90 Seconds", price: "$60" },
            ]}
          />
          <Card
            monthly
            title="Simple Reels (Monthly)"
            items={[
              { label: "4 × 30 Seconds", price: monthlyPrice(20) },
              { label: "4 × 60 Seconds", price: monthlyPrice(40) },
              { label: "4 × 90 Seconds", price: monthlyPrice(60) },
            ]}
          />

          <Card
            title="Premium Reels"
            items={[
              { label: "30 Seconds", price: "$40" },
              { label: "60 Seconds", price: "$60" },
              { label: "90 Seconds", price: "$80" },
            ]}
          />
          <Card
            monthly
            title="Premium Reels (Monthly)"
            items={[
              { label: "4 × 30 Seconds", price: monthlyPrice(40) },
              { label: "4 × 60 Seconds", price: monthlyPrice(60) },
              { label: "4 × 90 Seconds", price: monthlyPrice(80) },
            ]}
          />
        </Section>

        {/* Thumbnails */}
        <Section title="Thumbnail Design">
          <Card
            title="Thumbnail Packages"
            items={[
              { label: "1 Thumbnail", price: "$30" },
              { label: "4 Thumbnails", price: "$100" },
            ]}
          />
        </Section>

        {/* Branding */}
        <Section title="Complete Branding">
          <Card
            title="Full Brand Kit"
            items={[
              { label: "Logo, Colors, Fonts, Banners", price: "$200" },
            ]}
          />
        </Section>

        {/* Full Podcast Edit */}
        <Section title="Full Podcast Editing">
          <Card
            title="Per Episode"
            items={[
              { label: "Complete Podcast Edit", price: "$120" },
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#333" }}>Dashboard</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span>🔔</span>
        <span>👤 ALPHA CODERS</span>
      </div>
    </div>
  );
}

export default Navbar;
function Card({ title, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        borderLeft: `6px solid ${color}`,
        borderRadius: "10px",
        padding: "20px",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h3 style={{ color: "#666" }}>{title}</h3>

      <h1 style={{ marginTop: "10px", color: "#222" }}>
        {value}
      </h1>
    </div>
  );
}

export default Card;
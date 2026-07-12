import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1f2937",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        TransitOps
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/vehicles" style={linkStyle}>Vehicles</Link>
        <Link to="/drivers" style={linkStyle}>Drivers</Link>
        <Link to="/trips" style={linkStyle}>Trips</Link>
        <Link to="/maintenance" style={linkStyle}>Maintenance</Link>
        <Link to="/expenses" style={linkStyle}>Expenses</Link>
        <Link to="/reports" style={linkStyle}>Reports</Link>
      </nav>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "5px",
};

export default Sidebar;
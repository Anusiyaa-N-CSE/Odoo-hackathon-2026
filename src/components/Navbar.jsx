import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";

      case "/vehicles":
        return "Vehicle Management";

      case "/drivers":
        return "Driver Management";

      case "/trips":
        return "Trip Management";

      case "/maintenance":
        return "Maintenance Management";

      case "/expenses":
        return "Expense Management";

      case "/reports":
        return "Reports";

      default:
        return "TransitOps";
    }
  };

  return (
    <div
  style={{
    height: "70px",
    background: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
    borderBottom: "1px solid #e5e7eb",
  }}
>
  <h2
    style={{
      color: "#1e293b",
      fontSize: "28px",
      fontWeight: "700",
      margin: 0,
      letterSpacing: "0.5px",
    }}
  >
    {getPageTitle()}
  </h2>

  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      color: "#1e293b",
      fontSize: "20px",
      fontWeight: "600",
    }}
  >
    <span style={{ cursor: "pointer" }}>🔔</span>

    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      👤 <span>ALPHA CODERS</span>
    </span>
  </div>
</div>
  );
}

export default Navbar;
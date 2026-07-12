import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          background: "#f5f7fa",
          minHeight: "100vh",
        }}
      >
        <Navbar />

        <div style={{ padding: "30px" }}>
          <h1>Welcome to TransitOps Dashboard</h1>

          <p>
            Fleet Management System for tracking vehicles, drivers,
            trips, maintenance and expenses.
          </p>
        </div>
        <div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "30px",
  }}
>
  <Card title="Vehicles" value="24" color="#2563eb" />
  <Card title="Drivers" value="18" color="#16a34a" />
  <Card title="Trips Today" value="36" color="#ea580c" />
  <Card title="Revenue" value="₹1.2L" color="#9333ea" />
</div>
      </div>
    </div>
  );
}

export default Dashboard;
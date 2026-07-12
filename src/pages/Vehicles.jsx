import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Vehicles() {
  const [search, setSearch] = useState("");

  const vehicles = [
    {
      number: "TN33AB1234",
      type: "Bus",
      driver: "Rajesh",
      capacity: "50 Seats",
      status: "Active",
    },
    {
      number: "TN33CD5678",
      type: "Van",
      driver: "Kumar",
      capacity: "12 Seats",
      status: "Active",
    },
    {
      number: "TN33EF9012",
      type: "Truck",
      driver: "Arjun",
      capacity: "8 Tons",
      status: "Maintenance",
    },
    {
      number: "TN33GH3456",
      type: "Mini Bus",
      driver: "Prakash",
      capacity: "30 Seats",
      status: "Inactive",
    },
  ];

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.number.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#22c55e";
      case "Maintenance":
        return "#f59e0b";
      case "Inactive":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

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
          <h1 style={{ marginBottom: "10px" }}>Vehicle Management</h1>

          <p style={{ color: "#666" }}>
            Manage all transport vehicles.
          </p>

          <h3 style={{ marginTop: "20px" }}>
            Total Vehicles: {filteredVehicles.length}
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "25px 0",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Search Vehicle Number..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "280px",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <div>
              <button
                style={{
                  padding: "10px 18px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                + Add Vehicle
              </button>

              <button
                style={{
                  padding: "10px 18px",
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Export
              </button>
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <thead
              style={{
                background: "#1e293b",
                color: "white",
              }}
            >
              <tr>
                <th style={{ padding: "15px" }}>Vehicle No</th>
                <th>Type</th>
                <th>Driver</th>
                <th>Capacity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredVehicles.map((vehicle, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "15px" }}>{vehicle.number}</td>
                  <td>{vehicle.type}</td>
                  <td>{vehicle.driver}</td>
                  <td>{vehicle.capacity}</td>

                  <td>
                    <span
                      style={{
                        background: getStatusColor(vehicle.status),
                        color: "white",
                        padding: "6px 15px",
                        borderRadius: "20px",
                      }}
                    >
                      {vehicle.status}
                    </span>
                  </td>

                  <td>
                    <button
                      style={{
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "7px 12px",
                        borderRadius: "5px",
                        marginRight: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>

                    <button
                      style={{
                        background: "#dc2626",
                        color: "white",
                        border: "none",
                        padding: "7px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
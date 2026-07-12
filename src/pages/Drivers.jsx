import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Drivers() {
  const [search, setSearch] = useState("");

  const drivers = [
    {
      id: "DR001",
      name: "Rajesh",
      phone: "9876543210",
      license: "TN123456789",
      vehicle: "TN33AB1234",
      status: "Active",
    },
    {
      id: "DR002",
      name: "Kumar",
      phone: "9876501234",
      license: "TN987654321",
      vehicle: "TN33CD5678",
      status: "Active",
    },
    {
      id: "DR003",
      name: "Arjun",
      phone: "9876512345",
      license: "TN456789123",
      vehicle: "TN33EF9012",
      status: "Leave",
    },
    {
      id: "DR004",
      name: "Prakash",
      phone: "9876523456",
      license: "TN852741963",
      vehicle: "TN33GH3456",
      status: "Active",
    },
  ];

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "#22c55e";
      case "Leave":
        return "#f59e0b";
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
          <h1
            style={{
              textAlign: "center",
              color: "#1e293b",
            }}
          >
            Drivers Management
          </h1>

          <p style={{ color: "#666" }}>
            Manage all transport drivers.
          </p>

          <h3 style={{ marginTop: "20px" }}>
            Total Drivers: {filteredDrivers.length}
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "25px 0",
            }}
          >
            <input
              type="text"
              placeholder="Search Driver Name..."
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
                + Add Driver
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
                <th style={{ padding: "15px" }}>Driver ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>License No</th>
                <th>Assigned Vehicle</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDrivers.map((driver, index) => (
                <tr
                  key={index}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "15px" }}>{driver.id}</td>
                  <td>{driver.name}</td>
                  <td>{driver.phone}</td>
                  <td>{driver.license}</td>
                  <td>{driver.vehicle}</td>

                  <td>
                    <span
                      style={{
                        background: getStatusColor(driver.status),
                        color: "white",
                        padding: "6px 15px",
                        borderRadius: "20px",
                      }}
                    >
                      {driver.status}
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

export default Drivers;
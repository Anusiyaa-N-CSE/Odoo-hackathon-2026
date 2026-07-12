import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Trips() {
  const trips = [
    {
      id: "TR001",
      vehicle: "TN33AB1234",
      driver: "Rajesh",
      source: "Erode",
      destination: "Coimbatore",
      status: "Running",
    },
    {
      id: "TR002",
      vehicle: "TN33CD5678",
      driver: "Kumar",
      source: "Salem",
      destination: "Chennai",
      status: "Completed",
    },
    {
      id: "TR003",
      vehicle: "TN33EF9012",
      driver: "Arjun",
      source: "Karur",
      destination: "Madurai",
      status: "Delayed",
    },
    {
      id: "TR004",
      vehicle: "TN33GH3456",
      driver: "Prakash",
      source: "Namakkal",
      destination: "Tiruppur",
      status: "Scheduled",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Running":
        return "#22c55e";
      case "Completed":
        return "#2563eb";
      case "Delayed":
        return "#f59e0b";
      case "Scheduled":
        return "#9333ea";
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

        <div style={{ padding: "35px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "#1e293b",
            }}
          >
            Trip Management
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "gray",
            }}
          >
            Manage all transport trips.
          </p>

          <h2
            style={{
              textAlign: "center",
              color: "#64748b",
            }}
          >
            Total Trips Today: {trips.length}
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "30px 0",
            }}
          >
            <input
              type="text"
              placeholder="Search Trip ID..."
              style={{
                width: "320px",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "15px",
              }}
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                + Add Trip
              </button>

              <button
                style={{
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  padding: "12px 20px",
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
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <thead
              style={{
                background: "#1e293b",
                color: "white",
              }}
            >
              <tr>
                <th style={{ padding: "15px" }}>Trip ID</th>
                <th>Vehicle</th>
                <th>Driver</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {trips.map((trip) => (
                <tr
                  key={trip.id}
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <td style={{ padding: "15px" }}>{trip.id}</td>
                  <td>{trip.vehicle}</td>
                  <td>{trip.driver}</td>
                  <td>{trip.source}</td>
                  <td>{trip.destination}</td>

                  <td>
                    <span
                      style={{
                        background: statusColor(trip.status),
                        color: "white",
                        padding: "8px 18px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {trip.status}
                    </span>
                  </td>

                  <td>
                    <button
                      style={{
                        background: "#2563eb",
                        color: "white",
                        border: "none",
                        padding: "8px 14px",
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
                        padding: "8px 14px",
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

export default Trips;
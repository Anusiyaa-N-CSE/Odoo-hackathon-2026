import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Maintenance() {

  const maintenanceData = [
    {
      id: "M001",
      vehicle: "TN33AB1234",
      service: "Engine Repair",
      date: "10-07-2026",
      cost: "₹15000",
      status: "Completed"
    },
    {
      id: "M002",
      vehicle: "TN33CD5678",
      service: "Oil Change",
      date: "12-07-2026",
      cost: "₹3000",
      status: "Pending"
    },
    {
      id: "M003",
      vehicle: "TN33EF9012",
      service: "Brake Check",
      date: "15-07-2026",
      cost: "₹5000",
      status: "In Progress"
    },
    {
      id: "M004",
      vehicle: "TN33GH3456",
      service: "Tyre Replacement",
      date: "18-07-2026",
      cost: "₹12000",
      status: "Scheduled"
    }
  ];


  const statusColor = (status)=>{

    switch(status){

      case "Completed":
        return "#16a34a";

      case "Pending":
        return "#f59e0b";

      case "In Progress":
        return "#2563eb";

      case "Scheduled":
        return "#9333ea";

      default:
        return "#64748b";
    }

  };


  return (

    <div style={{display:"flex"}}>

      <Sidebar/>


      <div
      style={{
        flex:1,
        background:"#f5f7fa",
        minHeight:"100vh"
      }}
      >

        <Navbar/>


        <div style={{padding:"35px"}}>


          <h1
          style={{
            textAlign:"center",
            color:"#1e293b"
          }}
          >
            Maintenance Management
          </h1>


          <p
          style={{
            textAlign:"center",
            color:"gray"
          }}
          >
            Track vehicle service and repair activities.
          </p>



          <h2
          style={{
            textAlign:"center",
            color:"#64748b"
          }}
          >
            Total Maintenance Records : {maintenanceData.length}
          </h2>



          <div
          style={{
            display:"flex",
            justifyContent:"space-between",
            margin:"30px 0"
          }}
          >


            <input
            type="text"
            placeholder="Search Vehicle..."
            style={{
              width:"320px",
              padding:"12px",
              borderRadius:"6px",
              border:"1px solid #ccc"
            }}
            />


            <button
            style={{
              background:"#2563eb",
              color:"white",
              border:"none",
              padding:"12px 20px",
              borderRadius:"6px",
              cursor:"pointer"
            }}
            >
              + Add Maintenance
            </button>


          </div>



          <table
          style={{
            width:"100%",
            borderCollapse:"collapse",
            background:"white",
            boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
          }}
          >

            <thead
            style={{
              background:"#1e293b",
              color:"white"
            }}
            >

              <tr>

                <th style={{padding:"15px"}}>
                  ID
                </th>

                <th>
                  Vehicle
                </th>

                <th>
                  Service Type
                </th>

                <th>
                  Date
                </th>

                <th>
                  Cost
                </th>

                <th>
                  Status
                </th>

                <th>
                  Actions
                </th>


              </tr>

            </thead>



            <tbody>


            {
              maintenanceData.map((item)=>(


                <tr
                key={item.id}
                style={{
                  textAlign:"center",
                  borderBottom:"1px solid #ddd"
                }}
                >


                  <td style={{padding:"15px"}}>
                    {item.id}
                  </td>


                  <td>
                    {item.vehicle}
                  </td>


                  <td>
                    {item.service}
                  </td>


                  <td>
                    {item.date}
                  </td>


                  <td>
                    {item.cost}
                  </td>


                  <td>

                    <span
                    style={{
                      background:statusColor(item.status),
                      color:"white",
                      padding:"8px 15px",
                      borderRadius:"20px",
                      fontWeight:"bold"
                    }}
                    >
                      {item.status}
                    </span>

                  </td>



                  <td>

                    <button
                    style={{
                      background:"#2563eb",
                      color:"white",
                      border:"none",
                      padding:"8px 14px",
                      borderRadius:"5px",
                      marginRight:"8px"
                    }}
                    >
                      Edit
                    </button>


                    <button
                    style={{
                      background:"#dc2626",
                      color:"white",
                      border:"none",
                      padding:"8px 14px",
                      borderRadius:"5px"
                    }}
                    >
                      Delete
                    </button>


                  </td>



                </tr>


              ))
            }


            </tbody>


          </table>



        </div>


      </div>


    </div>

  );

}


export default Maintenance;
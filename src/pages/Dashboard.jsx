import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";


function Dashboard(){


  const cards=[
    {
      title:"Total Vehicles",
      value:"120",
      icon:"🚚"
    },
    {
      title:"Active Vehicles",
      value:"95",
      icon:"✅"
    },
    {
      title:"Total Drivers",
      value:"80",
      icon:"👨‍✈️"
    },
    {
      title:"Today's Trips",
      value:"35",
      icon:"🛣️"
    },
    {
      title:"Monthly Expense",
      value:"₹5,25,000",
      icon:"💰"
    }
  ];



  const recentTrips=[
    {
      id:"TR001",
      vehicle:"TN33AB1234",
      driver:"Rajesh",
      route:"Erode → Coimbatore",
      status:"Running"
    },
    {
      id:"TR002",
      vehicle:"TN33CD5678",
      driver:"Kumar",
      route:"Salem → Chennai",
      status:"Completed"
    },
    {
      id:"TR003",
      vehicle:"TN33EF9012",
      driver:"Arjun",
      route:"Karur → Madurai",
      status:"Delayed"
    }
  ];



  const statusColor=(status)=>{

    if(status==="Running")
      return "#22c55e";

    if(status==="Completed")
      return "#2563eb";

    return "#f59e0b";

  };




  return(


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
            Fleet Management Dashboard
          </h1>


          <p
          style={{
            textAlign:"center",
            color:"gray"
          }}
          >
            Monitor vehicles, drivers and trips easily.
          </p>




          {/* Cards */}


          <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(5,1fr)",
            gap:"20px",
            marginTop:"30px"
          }}
          >


          {
            cards.map((card,index)=>(

              <div
key={index}
style={{
background:"white",
padding:"25px",
borderRadius:"15px",
textAlign:"center",
boxShadow:"0 6px 15px rgba(0,0,0,0.12)",
borderTop:"5px solid #2563eb",
transition:"0.3s",
cursor:"pointer"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-8px)";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
}}
>


                <h1>
                  {card.icon}
                </h1>


                <h2 style={{
color:"#2563eb",
fontSize:"28px",
margin:"10px 0"
}}>
                  {card.value}
                </h2>


                <p
                style={{
color:"#64748b",
fontSize:"16px",
fontWeight:"600"
}}
                >
                  {card.title}
                </p>


              </div>

            ))
          }


          </div>





          {/* Vehicle Status */}


          <div
          style={{
            display:"flex",
            gap:"20px",
            marginTop:"40px"
          }}
          >


            <div
            style={{
              background:"white",
              flex:1,
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
            }}
            >

              <h2 style={{
color:"#1e293b",
borderBottom:"2px solid #2563eb",
paddingBottom:"10px"
}}>
                Vehicle Status
              </h2>


              <p>
                🟢 Available Vehicles : 70
              </p>


              <p>
                🟡 Maintenance Vehicles : 15
              </p>


              <p>
                🔴 Inactive Vehicles : 10
              </p>


            </div>




            <div
            style={{
              background:"white",
              flex:1,
              padding:"25px",
              borderRadius:"12px",
              boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
            }}
            >

              <h2 style={{
color:"#1e293b",
borderBottom:"2px solid #16a34a",
paddingBottom:"10px"
}}>
                Top Driver
              </h2>


              <h3>
                ⭐ Rajesh
              </h3>


              <p>
                Completed Trips : 45
              </p>


              <p>
                Rating : 4.8/5
              </p>


            </div>


          </div>





          {/* Recent Trips */}



          <h2
          style={{
marginTop:"40px",
color:"#1e293b",
borderLeft:"6px solid #2563eb",
paddingLeft:"12px"
}}
          >
            Recent Trips
          </h2>



          <table
          style={{
            width:"100%",
            background:"white",
            borderCollapse:"collapse",
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
                Trip ID
              </th>

              <th>
                Vehicle
              </th>

              <th>
                Driver
              </th>

              <th>
                Route
              </th>

              <th>
                Status
              </th>

            </tr>


          </thead>



          <tbody>


          {
            recentTrips.map((trip)=>(

              <tr
              key={trip.id}
style={{
textAlign:"center",
borderBottom:"1px solid #ddd",
transition:"0.3s"
}}

onMouseEnter={(e)=>{
e.currentTarget.style.background="#f1f5f9";
}}

onMouseLeave={(e)=>{
e.currentTarget.style.background="white";
}}
              >

                <td style={{padding:"15px"}}>
                  {trip.id}
                </td>

                <td>
                  {trip.vehicle}
                </td>

                <td>
                  {trip.driver}
                </td>

                <td>
                  {trip.route}
                </td>


                <td>

                <span
                style={{
                  background:statusColor(trip.status),
                  color:"white",
                  padding:"8px 15px",
                  borderRadius:"20px"
                }}
                >

                {trip.status}

                </span>

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


export default Dashboard;
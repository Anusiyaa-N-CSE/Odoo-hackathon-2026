import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Reports(){

  const reports = [
    {
      title:"Total Vehicles",
      value:"120",
      icon:"🚚",
    },
    {
      title:"Completed Trips",
      value:"85",
      icon:"🛣️",
    },
    {
      title:"Total Expenses",
      value:"₹5,25,000",
      icon:"💰",
    },
    {
      title:"Maintenance Cost",
      value:"₹1,20,000",
      icon:"🔧",
    }
  ];


  const tripReport=[
    {
      month:"January",
      trips:80
    },
    {
      month:"February",
      trips:95
    },
    {
      month:"March",
      trips:120
    },
    {
      month:"April",
      trips:100
    }
  ];


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
            Reports & Analytics
          </h1>


          <p
          style={{
            textAlign:"center",
            color:"gray"
          }}
          >
            View complete fleet performance reports.
          </p>



          {/* Report Cards */}

          <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(4,1fr)",
            gap:"20px",
            marginTop:"30px"
          }}
          >

          {
            reports.map((report,index)=>(

              <div
              key={index}
              style={{
                background:"white",
                padding:"25px",
                borderRadius:"12px",
                boxShadow:"0 4px 12px rgba(0,0,0,0.1)",
                textAlign:"center"
              }}
              >

                <h1>
                  {report.icon}
                </h1>


                <h2
                style={{
                  color:"#1e293b"
                }}
                >
                  {report.value}
                </h2>


                <p
                style={{
                  color:"gray"
                }}
                >
                  {report.title}
                </p>


              </div>

            ))
          }


          </div>



          {/* Trip Report Table */}


          <h2
          style={{
            marginTop:"40px",
            color:"#1e293b"
          }}
          >
            Monthly Trip Report
          </h2>


          <table
          style={{
            width:"100%",
            background:"white",
            borderCollapse:"collapse",
            marginTop:"20px",
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
                Month
              </th>

              <th>
                Number of Trips
              </th>

            </tr>

          </thead>


          <tbody>


          {
            tripReport.map((data,index)=>(

              <tr
              key={index}
              style={{
                textAlign:"center",
                borderBottom:"1px solid #ddd"
              }}
              >

                <td style={{padding:"15px"}}>
                  {data.month}
                </td>

                <td>
                  {data.trips}
                </td>

              </tr>

            ))
          }


          </tbody>


          </table>




          {/* Performance Section */}


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
              borderRadius:"10px",
              boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
            }}
            >

              <h2>
                Vehicle Performance
              </h2>

              <p>
                🟢 Active Vehicles : 95
              </p>

              <p>
                🟡 Under Maintenance : 15
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
              borderRadius:"10px",
              boxShadow:"0 4px 12px rgba(0,0,0,0.1)"
            }}
            >

              <h2>
                Driver Performance
              </h2>

              <p>
                ⭐ Top Driver : Rajesh
              </p>

              <p>
                Total Trips : 45
              </p>

              <p>
                Rating : 4.8 / 5
              </p>

            </div>


          </div>


        </div>


      </div>


    </div>


  );

}


export default Reports;
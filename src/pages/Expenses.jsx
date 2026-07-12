import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Expenses() {

  const expenses = [
    {
      id:"EX001",
      vehicle:"TN33AB1234",
      type:"Fuel",
      amount:"₹8000",
      date:"10-07-2026",
      status:"Paid"
    },
    {
      id:"EX002",
      vehicle:"TN33CD5678",
      type:"Repair",
      amount:"₹15000",
      date:"12-07-2026",
      status:"Pending"
    },
    {
      id:"EX003",
      vehicle:"TN33EF9012",
      type:"Driver Allowance",
      amount:"₹5000",
      date:"15-07-2026",
      status:"Paid"
    },
    {
      id:"EX004",
      vehicle:"TN33GH3456",
      type:"Insurance",
      amount:"₹25000",
      date:"18-07-2026",
      status:"Pending"
    }
  ];


  const statusColor=(status)=>{

    switch(status){

      case "Paid":
        return "#16a34a";

      case "Pending":
        return "#f59e0b";

      default:
        return "#64748b";
    }

  };


  const totalExpense = expenses.reduce(
    (sum,item)=>sum+parseInt(item.amount.replace("₹","")),
    0
  );


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
            Expense Management
          </h1>


          <p
          style={{
            textAlign:"center",
            color:"gray"
          }}
          >
            Track vehicle related expenses.
          </p>



          <h2
          style={{
            textAlign:"center",
            color:"#64748b"
          }}
          >
            Total Expense : ₹{totalExpense}
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
            placeholder="Search Expense..."
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
              + Add Expense
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
                  Expense ID
                </th>

                <th>
                  Vehicle
                </th>

                <th>
                  Expense Type
                </th>

                <th>
                  Amount
                </th>

                <th>
                  Date
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
              expenses.map((expense)=>(

                <tr
                key={expense.id}
                style={{
                  textAlign:"center",
                  borderBottom:"1px solid #ddd"
                }}
                >

                  <td style={{padding:"15px"}}>
                    {expense.id}
                  </td>

                  <td>
                    {expense.vehicle}
                  </td>


                  <td>
                    {expense.type}
                  </td>


                  <td>
                    {expense.amount}
                  </td>


                  <td>
                    {expense.date}
                  </td>


                  <td>

                    <span
                    style={{
                      background:statusColor(expense.status),
                      color:"white",
                      padding:"8px 18px",
                      borderRadius:"20px",
                      fontWeight:"bold"
                    }}
                    >

                    {expense.status}

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


export default Expenses;
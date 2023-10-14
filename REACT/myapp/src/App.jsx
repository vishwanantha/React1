import { useState } from "react"
import Dashboard from "./Componenet/Dashboard";
import Saidebar from "./Componenet/Saidebar";

function App() {
  const [data,setData]=useState([
  {
    invoiceid: "#GLK234",
    date: "02/19/2023",
    customer: "Mark",
    payableamount: "$30000",
    paidamount: "$100",
    due: "11",
  },
  {
    invoiceid: "#GLK235",
    date: "02/19/2023",
    customer: "Antony",
    payableamount: "$34000",
    paidamount: "$1004",
    due: "12",
  },
  {
    invoiceid: "#GLK234",
    date: "02/19/2023",
    customer: "Mark",
    payableamount: "$30000",
    paidamount: "$100",
    due: "11",
  },
  {
    invoiceid: "#GLK235",
    date: "02/19/2023",
    customer: "Antony",
    payableamount: "$34000",
    paidamount: "$1004",
    due: "12",
  },
  {
    invoiceid: "#GLK234",
    date: "02/19/2023",
    customer: "Mark",
    payableamount: "$30000",
    paidamount: "$100",
    due: "11",
  },
  {
    invoiceid: "#GLK235",
    date: "02/19/2023",
    customer: "Antony",
    payableamount: "$34000",
    paidamount: "$1004",
    due: "12",
  },
  {
    invoiceid: "#GLK234",
    date: "02/19/2023",
    customer: "Mark",
    payableamount: "$30000",
    paidamount: "$100",
    due: "11",
  },
  {
    invoiceid: "#GLK235",
    date: "02/19/2023",
    customer: "Antony",
    payableamount: "$34000",
    paidamount: "$1004",
    due: "12",
  },
  {
    invoiceid: "#GLK234",
    date: "02/19/2023",
    customer: "Mark",
    payableamount: "$30000",
    paidamount: "$100",
    due: "11",
  },
  {
    invoiceid: "#GLK235",
    date: "02/19/2023",
    customer: "Antony",
    payableamount: "$34000",
    paidamount: "$1004",
    due: "12",
  },
]);

return (
  <>
    <div className='container-fluid'>
    <div className='row content  '>
          <Saidebar />
          <Dashboard data={data} />
        </div>
    </div>
  </>
);
}
  
      
 
export default App

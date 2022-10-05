import React from 'react';
import './css/Transcation.css';
import Table from "react-bootstrap/Table";
import { useQuery } from "react-query";
import { API } from "../config/api";
// import dataTrans from '../dataDummy/DataFakeTransaction'
// import DropdownAdm from "../components/DropdownAdm";

const TablePage = () => {

    const title = "Transactions";
    document.title = "Dumbflix | " + title;

    let { data: transaction } = useQuery("transactionCache", async () => {
        const response = await API.get("/transactions");
        return response.data.data;
    });

    function Duration(dueDate, startDate) {
        const due = new Date(dueDate);
        startDate = new Date();
    
        let duration;
    
        if (startDate < due) {
          duration = new Date(due - startDate);
        }
    
        let years = duration.getFullYear() - 1970;
        let months = duration.getMonth();
        let days = duration.getDate();
    
        let yearTxt = "year";
        let monthTxt = "month";
        let dayTxt = "day";
    
        if (years > 1) yearTxt += "s";
        if (months > 1) monthTxt += "s";
        if (days > 1) dayTxt += "s";
    
        if (years >= 1) {
          duration = `${years} ${yearTxt} ${months} ${monthTxt} ${days} ${dayTxt}`;
        } else if (months >= 1) {
          duration = `${months} ${monthTxt} ${days} ${dayTxt}`;
        } else {
          duration = `${days} ${dayTxt}`;
        }
        return duration;
    }
    

  return (
    <div className="transcation-container">
        <h4 style={{marginBottom: '30px'}}>Incoming Transaction</h4>
        <Table hover className="transcation-table">
            <thead>
                <tr style={{color: "#E50914", background: "#1F1F1F"}}>
                    <th>No.</th>
                    <th>Users</th>
                    <th>Email</th>
                    <th>Remaining Active</th>
                    <th>Status Payment</th>
                </tr>
            </thead>
            <tbody>
            {transaction?.map((data, index) => {
                    console.log("table test : ", data.status)
                    return (
                      <>
                        <tr style={{ height: "60px" }} className="text-center">
                          <td>{index + 1}</td>
                          <td>{data.user.fullname}</td>
                          <td>{data.user.email}</td>
                          <td>{Duration(data.dueDate, data.startDate)}</td>
                          <td className={data.status === "Success" ? "text-success" : data.status === "Pending" ? "text-warning" : "text-danger"}>{data.status === "Success" ? "Success" : data.status === "Pending" ? "Pending" : "Failed"}</td>
                        </tr>
                      </>
                    );
                  })}
            </tbody>
        </Table>
    </div>
  );
}

export default TablePage;
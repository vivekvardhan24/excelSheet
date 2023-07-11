import React from "react";
import DataTable from 'react-data-table-component';
import recordData from "../Data/Data.js"
// import contactData from "../Data/Data2.JSON"
// console.log(contactData);
// console.log(contactData["records"])


const columns = [
    {
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastname,
        sortable: true,
    },
    {
        name: 'Contact',
        selector: row => row.contact,
        sortable: true,
    },
    {
        name: 'Actions',
        selector: row => <div>
            <button onClick={()=> console.log(row.id)}> edit  </button>
            <button href = "/"> delete  </button>
        </div>,
        sortable: false,
    }
    
];





function Table({ recordsStore }){
    
    return (<DataTable
        columns={columns}
        // data={contactData["records"]}
        data={recordsStore}
        pagination
    />);
};

export default Table;
/*
 *   Copyright (c) 2021 Sachin S. Bahegavankar
 *   All rights reserved.
 */
import React from 'react';
import Pagination from "react-js-pagination";
import helper from '../../hoc/helper';
import '../../assets/css/pagination.css';

// require("bootstrap/dist/css/bootstrap.min.css");
const DATATABLE = (props) => {
// setting dynamic headers
    const tableHeaders = props.headers.map((column, j) => (
        <th className="th_header" key={j}>{column}</th>
    ))
  
   
      
    return (
        <helper>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th><input type="checkbox" aria-label="Checkbox for following text input"/></th>
                                        {tableHeaders}
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.tableRows}
                                </tbody>
                            </table>
                        </div>
                             </div>
                </div>                
            </div>
        </div>
       
        </helper>
    )
};

export default DATATABLE;
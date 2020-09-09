import React, { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact';

export default function Basic(tableData) {
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'personName',
        field: 'personName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'personName',
        },
      },
      {
        label: 'company',
        field: 'company',
        width: 270,
      },
      {
        label: 'email',
        field: 'email',
        width: 200,
      }
    ],
    rows: []
  });
  console.log(tableData);
  console.log(datatable);
  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}

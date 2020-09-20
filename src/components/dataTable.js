import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import EnhancedTable from './EnhancedTable'

const App = (tableData) => {
  var dataTableLength = JSON.stringify(tableData).length-1;
  var insert = JSON.parse(JSON.stringify(tableData).substring(13,dataTableLength));
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'personName',
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
    ]
  )

  return (
    <div>
      <EnhancedTable
        columns={columns}
        data={insert}
      />
    </div>
  )
}

export default App

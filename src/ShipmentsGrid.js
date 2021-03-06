import React, { useEffect } from 'react'

import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { useTable } from 'react-table'
import './ShipmentsGrid.css'
 
function ShipmentsGrid(props) {

    // ----------------------------------------------
    // this is just to see the filteredShipments prop
    // provides no functionality
    // ----------------------------------------------
    // useEffect(()=>{
    //     console.log('props.filteredShipments:')
    //     console.log(props.filteredShipments)
    // })

    // ----------------------------------------------
    // memoize "data" as props.filteredShipments
    // only updates data when props.filteresShipments changes
    // this is purely for performance optimization
    // (however, react-table docs state that data MUST be memoized)
    // ----------------------------------------------
    const data = React.useMemo(
        () => props.filteredShipments,
        [props.filteredShipments]
    )

    // ----------------------------------------------
    // memoize "columns", which is used in the useTable hook
    // Header: column header in table
    // accessor: key from "data" that corresponds to column header
    // Header does not have to be the same as accessor
    // this piece of code is purely for scalability/flexibility
    // (however, the react-table docs state this value MUST be memoized)
    // memoizing columns *really* only becomes useful if
    // the structure of data might be changing (ie diff clients have diff cols)
    // ----------------------------------------------
    const columns = React.useMemo(
        () => {
            let cols = []
            for (let key in props.filteredShipments[0]) {
                console.log("Key:", key)
                cols.push({Header: key, accessor: key})
            }
            return cols
        },
        [props.filteredShipments]
    )
    
    const {
        // getTableProps - required
        // resolves any props required for table wrapper
        getTableProps,
        // getTableBodyProps - (f) required
        // resolves any props required for table body wrapper
        // (in this case there are none)
        getTableBodyProps,
        // headerGroups - array header groupings 
        // react-table allows for groups of headers (multiple header rows)
        // current data set only has a single header group
        // currently returns {role: "rowgroup"}
        headerGroups,
        // rows - array of objs created from "data" and "columns" options
        rows,
        // prepareRow - (f) required
        // lazily preps row for rendering
        // must be called for each row before every render
        // useful for lart data sets that may be paginated etc.
        prepareRow,
    } = useTable({ columns, data })

    const headerRow = headerGroups.map(headerGroup => (
        <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
                <th
                {...column.getHeaderProps()}
                style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                }}
                >
                {column.render('Header')}
                </th>
            ))}
        </TableRow>
    ))

    const bodyRows = rows.map(row => {
        prepareRow(row)
        return (
            <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                return (
                    <TableCell
                    {...cell.getCellProps()}
                    style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                    }}
                    >
                    {cell.render('Cell')}
                    </TableCell>
                )
                })}
            </TableRow>
        )
    })

    return (
        <MaUTable {...getTableProps()}>
            <TableHead>
                {headerRow}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {bodyRows}
            </TableBody>
        </MaUTable>
    )
}

export default ShipmentsGrid
import React, { useEffect } from 'react'
import { useTable } from 'react-table'
 
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
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
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
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td
                        {...cell.getCellProps()}
                        style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                        }}
                        >
                        {cell.render('Cell')}
                        </td>
                    )
                    })}
                </tr>
                )
            })}
            </tbody>
        </table>
        )
    }

export default ShipmentsGrid
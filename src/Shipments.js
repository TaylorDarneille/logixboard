import React, { useEffect } from 'react'
import { useTable } from 'react-table'
import './ShipmentsGrid.css'
 
function Shipments(props) {

    // useEffect(()=>{
    //     console.log('props.filteredShipments:')
    //     console.log(props.filteredShipments)
    // })

    const data = React.useMemo(
        () => props.filteredShipments,
        [props.filteredShipments]
    )

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
        <table {...getTableProps()}>
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

export default Shipments
import React, { useEffect } from 'react'
import { useTable } from 'react-table'
 
function Shipments(props) {

    useEffect(()=>{
        console.log('props.filteredShipments:')
        console.log(props.filteredShipments)
    })

    const data = React.useMemo(
        () => props.filteredShipments,
        [props.filteredShipments]
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Shipment ID',
                accessor: 'Shipment ID', // accessor is the "key" in the data
            },
            {
                Header: 'Client Name',
                accessor: 'Client Name',
            },
            {
                Header: 'Origin',
                accessor: 'Origin',
            },
            {
                Header: 'Destination',
                accessor: 'Destination',
            },
            {
                Header: 'Mode',
                accessor: 'Mode',
            },
            {
                Header: 'Estimated Departure',
                accessor: 'Estimated Departure',
            },
            {
                Header: 'Estimated Arrival',
                accessor: 'Estimated Arrival',
            },
            {
                Header: 'Status',
                accessor: 'Status',
            },
        ],
        []
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

export default Shipments
import './App.css'
import React from 'react'
import ClientDropDown from './ClientDropDown'
import StatusDropDown from './StatusDropDown'

function Filters(props) {
    let clients = props.allShipments.map(shipment=>{
        return shipment['Client Name']
    })
    let clientsSet = [...new Set(clients)]
    let status = props.allShipments.map(shipment=>{
        return shipment['Status']
    })
    let statusSet = [...new Set(status)]
    return (
        <div className='filters'>
            <ClientDropDown options={clientsSet} />
            <StatusDropDown options={statusSet} />
        </div>
    )
}

export default Filters;
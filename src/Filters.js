import './App.css'
import React from 'react'
import Dropdown from './Dropdown'

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
            <Dropdown 
                options={clientsSet} 
                filterName='Client Name' 
                handleFilterChange={props.handleFilterChange} 
                currentFilterValue={props.currentFilters.client}
            />
            <Dropdown 
                options={statusSet} 
                filterName='Status' 
                handleFilterChange={props.handleFilterChange} 
                currentFilterValue={props.currentFilters.client}
            />
        </div>
    )
}

export default Filters;
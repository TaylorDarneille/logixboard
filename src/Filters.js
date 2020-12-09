import './App.css'
import React from 'react'
import Dropdown from './Dropdown'

function Filters(props) {
    // ---------------------------------------
    // each fieldSet uses Set constructor to pull all the values
    // of that field from the data, the filter out duplicates
    // ---------------------------------------
    let clientsSet = [...new Set(props.allShipments.map(shipment=>shipment['Client Name']))]
    let statusSet = [...new Set(props.allShipments.map(shipment=>shipment['Status']))]
    
    return (
        <div>
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
            <h3>Total: {props.totalShipments}</h3>
        </div>
    )
}

export default Filters;
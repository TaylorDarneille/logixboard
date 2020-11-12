import './App.css'
import React, {useState, useEffect, useMemo} from 'react'
import Shipments from './Shipments'
import Filters from './Filters'
import data from './data.json'

const initialFilters = {}
initialFilters['Client Name'] = 'all'
initialFilters['Status'] = 'all'

function App() {
  const [filters, setFilters] = useState(initialFilters)
  // const [allShipments, setAllShipments] = useState([])
  const [filteredShipments, setFilteredShipments] = useState([])

  const filterShipments = () =>{
    console.log("filter shipments running inside useMemo")
    let filteredShipments = data.filter(shipment=>{
      for(const field in filters) {
        if(filters[field]!==shipment[field] && filters[field]!=='all') {
          return false
        }
      }
      return true
    })
    setFilteredShipments(filteredShipments)
  }

  // REACHED API CALL LIMIT, SO HAD TO SWITCH TO MANUAL JSON IMPORT
  // const fetchShipments = () => {
    // let query_params = new URLSearchParams({
      //   'limit': 10,
      //   'query_type': 'and',
      //   'Client Name': client, // API call breaks without this - need to debug that part to get all rows at once
      // })
      
      // let url = 'https://sheet2api.com/v1/eA5WHdSamLEn/logixboard_shipment_data_ii/Sheet1?' + query_params;
      // fetch(url).then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data)
      //   setAllShipments(data)
      // })
      // .catch((error) => {console.error('Error:', error)})
  // }

  const handleFilterChange = (e) =>{
    console.log("handleFilterchange triggered")
  }
    
  useEffect(filterShipments, [filters])

  return (
    <div className="App">
      <header className="App-header">
        <h1>LogixBoard Shipment Data</h1>
      </header>
      <main>
        <Filters allShipments={data} handleFilterChange={handleFilterChange} currentFilters={filters}/>
        <Shipments filteredShipments={filteredShipments} />
      </main>
    </div>
  )
}

export default App;

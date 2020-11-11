import './App.css'
// import React, {Component} from 'react'
import React, {useState, useEffect} from 'react'
import Shipments from './Shipments'

function App() {

  const [client, setClient] = useState('Broko')
  const [clientShipments, setShipmentsList] = useState([])

  
  const fetchShipments = () => {

    let query_params = new URLSearchParams({
      // 'limit': 10,
      'query_type': 'and',
      'Client Name': client,
    })

    let url = 'https://sheet2api.com/v1/OW9YmRzCQ3zF/logixboard_shipment_data/Sheet1?' + query_params;
    fetch(url).then(response => response.json())
    .then(data => {
      console.log('Success:', data)
      setShipmentsList(data)
    })
    .catch((error) => {console.error('Error:', error)})

  }
  
  useEffect(fetchShipments, [client])

  return (
    <div className="App">
      <header className="App-header">
        <h1>LogixBoard Shipment Data</h1>
      </header>
      <main>
        <Shipments shipments={clientShipments} />
      </main>
    </div>
  )
}

export default App;

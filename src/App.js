import './App.css'
import React, {Component} from 'react'

class App extends Component {

  state = {
    client: 'Broko'
  }

  componentDidMount() {
    this.fetchShipments()
  }
  
  fetchShipments = () => {
    let query_params = new URLSearchParams({
      // 'limit': 10,
      'query_type': 'and',
      'Client Name': this.state.client,
    })
    let url = 'https://sheet2api.com/v1/OW9YmRzCQ3zF/logixboard_shipment_data/Sheet1?' + query_params;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>LogixBoard Shipment Data</h1>
        </header>
      </div>
    )
  }
}

export default App;

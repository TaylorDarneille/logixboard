import './App.css'
import React from 'react'

function Dropdown(props) {
    let options = props.options.map(option=>{
        return <option value={option}>{option}</option>
    })
    return (
        <div className='filters'>
            <select name={props.filterName} id={props.filterName} onChange={props.handleFilterChange} value={props.currentFilterValue}>
                <option value='all'>{`${props.filterName} (all)`}</option>
                {options}
            </select>
        </div>
    )
}

export default Dropdown;
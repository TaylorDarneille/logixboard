import './App.css'
import React from 'react'

function Dropdown(props) {
    let options = props.options.map(option=>{
        return <option value={option}>{option}</option>
    })
    return (
        <div className='filters'>
            <select name={props.filterName} id={props.filterName}>
                {options}
            </select>
        </div>
    )
}

export default Dropdown;
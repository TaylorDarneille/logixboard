import './App.css'
import React from 'react'

function StatusDropDown(props) {
    let options = props.options.map(option=>{
        return <option value={option}>{option}</option>
    })
    return (
        <div className='filters'>
            <select name='status' id='status'>
                {options}
            </select>
        </div>
    )
}

export default StatusDropDown;
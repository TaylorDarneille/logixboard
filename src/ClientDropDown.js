import './App.css'
import React from 'react'

function ClientDropDown(props) {
    let options = props.options.map(option=>{
        return <option value={option}>{option}</option>
    })
    return (
        <div className='filters'>
            <select name='client' id='client'>
                {options}
            </select>
        </div>
    )
}

export default ClientDropDown;
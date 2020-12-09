import React from 'react'

import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      backgroundColor: 'white',
    },
  }));

function Dropdown(props) {
    const classes = useStyles()

    let options = props.options.map((option, i)=>{
        return <option key={i} value={option}>{option}</option>
    })

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor={props.filterName}>
                {props.filterName}
            </InputLabel>
            <Select 
                name={props.filterName} 
                id={props.filterName} 
                onChange={props.handleFilterChange} 
                value={props.currentFilterValue}
            >
                <option value='all'>{`${props.filterName} (all)`}</option>
                {options}
            </Select>
        </FormControl>
    )
}

export default Dropdown;
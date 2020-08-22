import React from 'react'


function Input(props) {

    return (
        <input 
            type={props.inputType} name={props.name} 
            placeholder={props.placeholder} className='input'
            value={props.value} onChange={props.changed} />
    )
}

export default Input

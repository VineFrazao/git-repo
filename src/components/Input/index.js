import React from 'react'

import { InputContainer } from './styles';

function Input({value, onchange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onchange}/>
        </InputContainer>
    )
}

export default Input
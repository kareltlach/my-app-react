import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 20px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(126, 207, 245);
    color: rgb(10, 56, 77);
    border-radius: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    

    &:hover {
    background: white;
    color: #262626;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
    opacity: 0.8;
    border: none;
  }
    
`

const ButtonK = props => (
    <div>
        <Button>{props.label}</Button>
    </div>

)

export default ButtonK
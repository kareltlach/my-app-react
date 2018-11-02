import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
    min-width: 320px;
    position: relative;
`

const CellImage = styled.div`
    width: 70px;
    height: 70px;
    background: #212C4F;
    border-radius: 10px;
    background-image: url(${props => props.image});
    background-size: 70px;
`

const CellTitle = styled.div`
    font-size: 24px;
    border-bottom: 0px solid rgba(0,0,0, 0.1);
    padding: 30px 0;
    margin: 0;
`

const CellData = styled.div`
    font-size: 12px;
    color: #415B76;
    opacity: 0.6;
    text-transform: uppercase;
    padding: 0 0 0 0;
    margin: 0;
    position: relative;
    top: -46px;

`

const CellText = styled.p`
    width: 320px;
    font-size: 16px;
    color: #415B76;
    padding: 0 0 0 0;
    margin: 0;
    position: relative;
    top: -20px;
`

const CellExperiencia = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>

        <CellText>{props.text}</CellText>
        <CellData>{props.data}</CellData>
    </CellGroup>
)

export default CellExperiencia
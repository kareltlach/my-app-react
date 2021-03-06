import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

// css
const SectionGroup = styled.div`
    margin: 0;
    background: url(${props => props.image});
    background-size: cover;
    height: 600px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
 
    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    width: 128px;
    margin: 0 auto;
    align-self: end;
`

const SectionTitleGroup = styled.div`
    max-width: 1000px;
    margin: 240px 40px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px auto;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
    width: 400px;
    ${'' /* max-width: 800px; */}
    color: white;
    font-size: 56px;
    margin: 0 0 0 60px;
    line-height: 1.2;
 
    @media (max-width: 720px) {
        font-size: 40px;
        margin: 0 0 0 30px;
    }
`

const SectionText = styled.p`
 
    max-width: 700px;
    margin: 0 0 0 120px ;
    color: white;
    font-weight: 100;
    line-height: 1.4;
    position: relative;

    @media (max-width: 720px) {
        margin: 0 0 0 30px ;
    }
`

//wave
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`

// component
const Section = props => (
    <SectionGroup image={props.image}>

        <WaveBottom><Wave /></WaveBottom>
        <WaveTop><Wave /></WaveTop>

        {/* <SectionLogo src={props.logo} /> */}
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section
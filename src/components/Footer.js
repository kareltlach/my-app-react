import React from 'react'
import styled from 'styled-components'
import ButtonK from './ButtonK';

const FooterGroup = styled.div`
    background: #262626;
    padding: 80px 0 20px 0;
    display: grid;
    grid-gap: 0px;
    position: relative;
    text-align: center;
`
const Text = styled.p`
    font-size: 14px;
    font-weight: 600;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 0 30px 0;
    color: white;

`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    color: white;
   

`

const Copyright = styled.div`
    margin: 0 auto;
    padding: 30px 0 0 0;
    color: white;
    text-transform: uppercase;
    font-size: 10px;
    opacity: 0.2;
`



const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Obrigado por visitar e apreciar meu site</Text>
        <ButtonK label="Possui dúvidas?" />
        
        <LinkGroup>

            {/* contentful */}
            {data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
            ))}

        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
    


)

export default Footer
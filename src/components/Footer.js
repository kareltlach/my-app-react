import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #cccccc;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    max-width: 500px;
    margin: 0 auto;

`
const Button = styled.button`
    justify-self: center;
    padding: 20px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    background: #fff;


`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

`
const Copyright = styled.div`
    margin: 0 auto;
    padding: 0 20px;
`


const Footer = ({data, children}) => (
    <FooterGroup>
        <Text></Text>
        <Button>Fale comigo</Button>
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
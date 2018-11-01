import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Wave from '../components/Wave'
import Section from '../components/Section'
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'
import styled from 'styled-components'
//import AnchorLink from 'react-anchor-link-smooth-scroll'



// css
const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  border: none;
  padding: 0 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`



const IndexPage = () => (
  <div>
    <div id="Sobre" className="Hero">

      <div className="HeroGroup">
          <h1>UI / UX Designer</h1>
          <p>Arquitetura de Informação | Design de interface | Usabilidade | Design de interação | Motion Graphics | Design System</p>
          <Link to="/page-2/">experiência</Link>
          
          {/* Logos */}
          <div className="Logos">
          <figure>
            <img class="parallax" width="60px" data-center="0.2" data-intensity="10" data-safe-height="0.2" src={require('../images/logo-sketch.png')} />
          </figure>

          <figure>
            <img class="parallax" width="60px"  src={require('../images/logo-framer.png')} />
          </figure>

          <figure>
            <img class="parallax" width="60px"  src={require('../images/logo-invision.png')} />
          </figure>

          <figure>
            <img class="parallax" width="60px"  src={require('../images/logo-react.png')} />
          </figure>
          </div>
          {/* onda */}
          <Wave />

      </div>
    </div>

    <div id="Portifolio" className="Cards">
      <h2>Alguns trabalhos desenvolvidos</h2>
        <div className="CardGroup">
          <Card
          title="Projeto 1"
          text="App do lojista"
          image={require('../images/wallpaper.jpg')}
          />
          <Card
          title="Projeto 2"
          text="Dashboard do lojista"
          image={require('../images/wallpaper2.jpg')}
          />
          <Card
          title="Projeto 3"
          text="Dashboard"
          image={require('../images/wallpaper3.jpg')}
          />
          <Card
          title="Projeto 4"
          text="Home site 2014"
          image={require('../images/wallpaper4.jpg')}
          />
          <Card
          title="Projeto 5"
          text="Banda Larga"
          image={require('../images/wallpaper3.jpg')}
          />
          <Card
          title="Projeto 6"
          text="9 telas"
          image={require('../images/wallpaper4.jpg')}
          />
        </div>
    </div>

    
    <Section
      image={require('../images/wallpaper-k1.jpg')}
      logo={require('../images/logo-sketch.png')}
      title="Processo criativo"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo metus, ullamcorper ut nisl vel, suscipit tincidunt libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sem augue, pretium ac est nec, auctor ornare purus. In hac habitasse platea dictumst." />

    
    <SectionCaption>processos e metodologias</SectionCaption>
    <SectionCellGroup>
   
    {staticdata.cells.map(cell => (
      <Cell title={cell.title} image={cell.image} text={cell.text}  />
))}
    
    </SectionCellGroup>

     <Section
      image={require('../images/wallpaper.jpg')}
      logo={require('../images/logo-invision.png')}
      title="Experiência"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo metus, ullamcorper ut nisl vel, suscipit tincidunt libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sem augue, pretium ac est nec, auctor ornare purus. In hac habitasse platea dictumst." />

   
    <SectionCaption>processos e metodologias</SectionCaption>
    <SectionCellGroup>
    
    {staticdata.cells.map(cell => (
      <Cell title={cell.title} image={cell.image} text={cell.text}  />
))}
    
    </SectionCellGroup>

  </div>

)

export default IndexPage
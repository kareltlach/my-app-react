import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/Card'
import Wave from '../components/Wave'
import Section from '../components/Section'
import Cell from '../components/Cell'
import CellExperiencia from '../components/CellExperiencia'

import styled from 'styled-components'
import ReallySmoothScroll from 'really-smooth-scroll';

import staticdata from '../../staticdata.json'
import staticdataexp from '../../staticdata-experiencia.json';

// smooth scrool
ReallySmoothScroll.shim();


// css
const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 22px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  display: grid;
  position: relative;
  width:700px;
  margin: 0 auto;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    left: 24px;
    margin: 0 auto;
    grid-column-gap: 0px;
    position: relative;
  }

  @media (min-width: 768px) and (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;
    grid-column-gap: 0px;
  } 
`


//const
const IndexPage = () => (
  <div>
    {/* sobre */}
    <div id="Sobre" className="Hero">

      <div className="HeroGroup">
          <h1>UI / UX Designer</h1>
          <p>Arquitetura de Informação | Design de interface | Usabilidade | Design de interação | Motion Graphics | Design System</p>
          <Link to="/page-2/">experiência</Link>
          
          {/* Logos */}
          <div className="Logos">
          <figure>
            <img width="60px" data-center="0.2" data-intensity="10" data-safe-height="0.2" src={require('../images/logo-sketch.png')} />
          </figure>

          <figure>
            <img width="60px"  src={require('../images/logo-framer.png')} />
          </figure>

          <figure>
            <img width="60px"  src={require('../images/logo-invision.png')} />
          </figure>

          <figure>
            <img width="60px"  src={require('../images/logo-react.png')} />
          </figure>
          </div>
          {/* onda */}
          <Wave />

      </div>
    </div>

    {/* portifolio */}
    <div id="Portifolio" className="Cards">
      <h2>Alguns projetos desenvolvidos</h2>
        <div className="CardGroup">
          <Card
          title="Projeto 1"
          text="Lorem ipsum"
          image={require('../images/wallpaper.jpg')}
          />
          <Card
          title="Projeto 2"
          text="Lorem ipsum dolor"
          image={require('../images/wallpaper2.jpg')}
          />
          <Card
          title="Projeto 3"
          text="Lorem ipsum dolor sit"
          image={require('../images/wallpaper3.jpg')}
          />
          <Card
          title="Projeto 4"
          text="Lorem ipsum dolor sit amet"
          image={require('../images/wallpaper4.jpg')}
          />
          <Card
          title="Projeto 5"
          text="Lorem ipsum dolor sit amet"
          image={require('../images/wallpaper3.jpg')}
          />
          <Card
          title="Projeto 6"
          text="Lorem ipsum dolor sit amet"
          image={require('../images/wallpaper4.jpg')}
          />
        </div>
    </div>


    {/* processos */}
    <Section
      image={require('../images/wallpaper.jpg')}
      // logo={require('../images/logo-sketch.png')}
      title="Processo e etapas"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo metus, ullamcorper ut nisl vel, suscipit tincidunt libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sem augue, pretium ac est nec, auctor ornare purus. In hac habitasse platea dictumst." />

    
    {/* <SectionCaption>processos e metodologias</SectionCaption> */}
    <SectionCellGroup>
      {/* json */}
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} text={cell.text}  />
      ))}
    </SectionCellGroup>

    {/* experiência */}
     <Section
      image={require('../images/wallpaper-k1.jpg')}
      logo={require('../images/logo-invision.png')}
      title="Experiência"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc leo metus, ullamcorper ut nisl vel, suscipit tincidunt libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer sem augue, pretium ac est nec, auctor ornare purus. In hac habitasse platea dictumst." />

    {/* experiência */}
    {/* <SectionCaption>por onde andei</SectionCaption> */}
    <SectionCellGroup>
      {/* json */}
      {staticdataexp.empresas.map(empresas => (
        <CellExperiencia title={empresas.title} data={empresas.data} image={empresas.image} text={empresas.text}  />
      ))}
    </SectionCellGroup>

  </div>

)

export default IndexPage
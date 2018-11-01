import React from 'react'
import Link from 'gatsby-link'
//import logo from '../images/logo-designcode.svg'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'




class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  /* função handleScroll */
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 10) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }

  }
  
  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'} >
        <div className="HeaderGroup">

          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <AnchorLink href='#Sobre'>Sobre</AnchorLink>
          <AnchorLink href='#Portifolio' offset='100'>Portifolio</AnchorLink>
          <Link to="/experiencia">Experiência</Link>
          <Link to="/contato"><button>Contato</button></Link>
        </div>
      </div>
    )
  }
}

export default Header

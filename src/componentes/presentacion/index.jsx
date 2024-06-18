import React from 'react'
import {Component} from 'react'
import Logo from './icono.png'
import './presentacion.css'
import '../scrollreveal'

class Presentacion extends Component{
refs = React.createRef();

  componentDidMount(){
    const config = {
      origin: 'bottom',
      duration: 3000,
      delay: 150,
      distance: '-500px',
      scale: 3,
      easing: 'ease',
      reset: false,

    };

ScrollReveal().reveal(this.refs.pres, config)
  }

  render(){
    return(
 <div ref="pres">
        <a href="index.html">
          <img src={Logo} className="logo" alt="logo" />
        </a>
       <h1 className="titulo">PAINT WITH ME</h1>
      </div>
      



    )
  }
}
  export default Presentacion;

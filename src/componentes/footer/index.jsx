import React, { Component } from "react";
import Logo from './icono.png'
import './footer.css'
import '../scrollreveal'
class Footer extends Component {
refs = React.createRef();

 
  componentDidMount(){

      const config = {
      origin: 'top',
      duration: 3000,
      delay: 150,
      distance: '-250px',
      scale: 0,
      easing: 'ease',
      reset: false,

    };

    const configCanvas = {
origin: 'top',
      duration: 3000,
      delay: 150,
      distance: '-500px',
      scale: 0,
      easing: 'ease',
      reset: false,

    }

  ScrollReveal().reveal(this.refs.foo, config)  
  
  ScrollReveal().reveal(this.refs.canvas, configCanvas)  

  }
  render() {
    return (
      <> 
<footer className="footer"  ref="foo">
        <ul className="ul">
          <li className="autor">
            Autor: Alexis Vega
          </li>
          <li className="li" >
            <a href="./index.html">
              <img className="logo-footer" src={Logo} width="50" heigth="50"  />
            </a>
          </li >
          <li className="li">
            <p className="COPYRIGHT">COPYRIGHT 2024@ Alexis Vega  </p>      
          </li>
                      </ul>
      </footer>


      </>
 


      
         );
  }
}

export default Footer;


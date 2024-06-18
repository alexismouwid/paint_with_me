import React from 'react'
import {Component} from 'react'
import Colors from './images/0.png'
import black from './images/1.png'
import naranja from './images/2.png'
import rojo from './images/3.png'
import amarillo from './images/4.png'
import azul from './images/5.png'
import verde from './images/6.png'
import claro from './images/7.png'
import cielo from './images/8.png'
import purpura from './images/9.png'
import chillon from './images/10.png'
import escarlata from './images/11.png'
import orange from './images/12.png'
import amarillo2 from './images/13.png'
import gris from './images/14.png'
import marron from './images/15.png'
import rosa from './images/16.png'
import green from './images/17.png'
import purpure from './images/18.png'
import './colores.css'
import '../scrollreveal'

class Colores extends Component{

    state = {
    isHidden: false,
   
  };

  toggleColores = () => {

    this.setState({ isHidden: !this.state.isHidden  });
  };
  
 
refs = React.createRef();
 componentDidMount() { 

const config = {
      origin: 'left',
      duration: 2000,
      delay: 150,
      distance: '-700px',
      scale: 0,
      easing: 'ease',
      reset: false,

    };

  ScrollReveal().reveal(this.refs.color, config)  
 }
  render(){

    const { chooseColor, color, tempo, cambios} = this.props;
    const { isHidden } = this.state;
    return(
      <div className="colores" ref="color"> 

        <button className="mostrar-colores" onClick={this.toggleColores}><img src={Colors} width="35" height="35"></img>
        </button>
      
      {!isHidden && (

 <div className="lista-colores">
    <button className="color-button" data-color="#000" onClick={chooseColor}><img src={black} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#ff0000"  onClick={chooseColor}><img src={rojo} width="20" height="20"></img> </button> 
    <button className="color-button" data-color="#ff9900" onClick={chooseColor}><img src={naranja} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#0000ff" onClick={chooseColor} ><img src={azul} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#00ff00" onClick={chooseColor}><img src={verde} width="20" height="20"></img> </button>
    <button className="color-button"  data-color="#ffff00" onClick={chooseColor}><img src={amarillo }width="20" height="20"></img> </button>
     

   <button className="color-button" data-color="#B2EBF2" onClick={chooseColor}><img src={claro} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#80DEEA"  onClick={chooseColor}><img src={cielo} width="20" height="20"></img> </button> 
    <button className="color-button" data-color="#FF1744" onClick={chooseColor}><img src={purpura} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#FFFF00" onClick={chooseColor} ><img src={chillon} width="20" height="20"></img> </button>
    <button className="color-button" data-color="#00796B" onClick={chooseColor}><img src={escarlata} width="20" height="20"></img> </button>
    <button className="color-button"  data-color="#FF8A65" onClick={chooseColor}><img src={orange }width="20" height="20"></img> </button>
      
     <button className="color-button" data-color="#FBC02D" onClick={chooseColor}><img src={amarillo2} width="20" height="20"></img> </button>

     <button className="color-button" data-color="#E3F2FD" onClick={chooseColor}><img src={gris} width="20" height="20"></img> </button>

     <button className="color-button" data-color="#CC6CE7" onClick={chooseColor}><img src={purpure} width="20" height="20"></img> </button>
   
     <button className="color-button" data-color="#8D6F64" onClick={chooseColor}><img src={marron} width="20" height="20"></img> </button>

     <button className="color-button" data-color="#EFC3CA" onClick={chooseColor}><img src={rosa} width="20" height="20"></img> </button>

     <button className="color-button" data-color="#8CDA05" onClick={chooseColor}><img src={green} width="20" height="20"></img> </button>
        </div>

        )} 
             </div>
    )
  }


}

export default Colores;

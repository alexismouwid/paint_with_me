import {Component} from 'react'
import React from 'react'
import Lapiz from './images/lapiz.png'
import Borrador from './images/borrador.png'
import Disminucion from './images/menos.png'
import Mas from './images/mas.png'
import Triangulo from './images/triangulo.png'
import Cuadrado from './images/cuadrado.png'
import Circulo from './images/circulo.png' 
import Limpiador from './images/icono.png'
import BubbleAlert from '../BubbleAlert'
import './herramientas.css'
import '../scrollreveal'

class Herramientas extends Component{

refs = React.createRef();

    
  componentDidMount(){

      const config = {
      origin: 'rigth',
      duration: 4000,
      delay: 150,
      distance: '-700px',
      scale: 0,
      easing: 'ease',
      reset: false,

    };

  ScrollReveal().reveal(this.refs.herramientas, config)  
  }
    render(){   

    const { canvas, ctx, 
       ChooseAction,     
       handleMouseDown, handleMouseMove, handleMouseMoveDelete, handleMouseUp,
       Limpiar, Menos, Aumentar,
        currentWidth, cambios } = this.props;
                   
        return(
           <>   


        <nav className ="opciones-herramientas" ref="herramientas">
 
   <button className="cleaner" onClick={Limpiar}><img src={Limpiador} width="40" height="40"></img> </button>
   <button className="borrar" onClick={() => ChooseAction('modeDelete')}><img src={Borrador} width="40" height="40"></img> </button>
   <button className="pintar" onClick={() => ChooseAction('modePaint') }><img src={Lapiz} width="40" height="40"></img> </button>
   <button className="btn-trazo"> <span className="bubble"><BubbleAlert value={currentWidth}/></span></button>
   <button className="menos" onClick={ Menos }><img src={Disminucion} width="40" height="40"></img> </button>
   <button className="mas" onClick={ Aumentar }><img src={Mas} width="40" height="40"></img> </button>
   <button className="triangulo" onClick={() => ChooseAction('modeTriangle') }><img src={Triangulo} width="40" height="40"></img> </button>
   <button className="circulo"  onClick={() => ChooseAction('modeCircle') }><img src={Circulo} width="40" height="40"></img> </button>                      
   <button className="cuadrado" onClick={() => ChooseAction('modeSquare') }><img src={Cuadrado} width="40" height="40"></img> </button>
                   </nav>



           </>
                 
                  
        )
    }
      }


export default Herramientas;

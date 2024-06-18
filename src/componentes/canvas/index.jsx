import React from 'react';
import {Component} from 'react'
import './canvas.css'
import '../scrollreveal'
class Canvas extends Component{
refs = React.createRef();

 
  componentDidMount(){

      const config = {
      origin: 'top',
      duration: 3000,
      delay: 150,
      distance: '-500px',
      scale: 0,
      easing: 'ease',
      reset: false,

    };

  ScrollReveal().reveal(this.refs.canvas, config)  
   this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
   }
    
    render(){
        
      
     return(
 <div>
   <main className="container-canvas"> 

<canvas
        id="canvas"
        width="720"
        height="600"
  ref="canvas"
      ></canvas>
   </main>
                  </div>
      



    )
  }
}

export default Canvas

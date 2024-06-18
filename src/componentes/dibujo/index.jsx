import React from 'react';
import {Component} from 'react'
import Herramientas from '../herramientas';
import Colores from '../colores';
import './dibujo.css'
import '../scrollreveal'

class Dibujo extends Component {

  
state =  {
      modePaint : false,
      modeDelete: false,
      modeSquare : false,
      modeTriangle : false,
      modeCircle : false,
      currentWidth : 10,
      currentColor: '#000',
      currentTempo: null,
      cambios: true,
    }

  initialX = null;
  initialY = null;



 /*MOUNT AND UNMOUNT----------------------------MOUNT AND UNMOUNT-------------------------MOUNT AND UNMOUNT-----------------------------------------------*/

refs = React.createRef();
 componentDidMount() { 

const config = {
      origin: 'top',
      duration: 3000,
      delay: 150,
      distance: '-500px',
      scale: 0,
      easing: 'ease',
      reset: false,

    };

  ScrollReveal().reveal(this.refs.can, config)  
   
   this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d'); 
    this.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.canvas.addEventListener('mouseup', this.handleMouseUp);
  
  }

  componentWillUnmount() {
  this.canvas.removeEventListener('mousedown', this.handleMouseDown);
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.canvas.removeEventListener('mouseup', this.handleMouseUp);

    }
  /*CHOOSE SECTION CONFIG---------------------------------------------------------------CHOOSE SECTION CONFIG----------------------------------------------*/
 ChooseAction = (selectedState) => {   

 this.initialX = null;
   this.initialY = null;
    this.setState({
      modePaint: selectedState === 'modePaint',
      modeDelete: selectedState === 'modeDelete',
      modeSquare: selectedState === 'modeSquare',
      modeCircle: selectedState === 'modeCircle',
      modeTriangle: selectedState === 'modeTriangle',
    }, () => {
           
      // Aplicar cambios adicionales según el estado activo
      if (['modePaint', 'modeSquare', 'modeCircle', 'modeTriangle'].includes(selectedState)) {
        this.setState((prevState) => ({
          currentColor: prevState.cambios ? prevState.currentTempo : '#000',
        }));
      };
            const trueState = this.findTrueState();
             console.log(` -${trueState}-
             \nCOLOR: ${this.state.currentColor}`);

    });
};

  chooseColor = () => {
  if (this.state.modeDelete) {
    // Si el modo borrado está activado, no hacer nada
    console.log('Modo borrado activado. No se puede cambiar el color.');
    return;
  }else{
  // Configurar los event listeners para los botones de color
 
  const colorButtons = document.querySelectorAll('.color-button');
  colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      
      this.state.currentTempo = button.dataset.color;
      this.setState({ currentColor: this.state.currentTempo});
      if(!this.state.cambios){

        this.setState({ cambios: true })
      };
    });
  });

    
  
    }
const trueState = this.findTrueState();
 console.log(`-${trueState}-
      \n Cambios: ${this.state.cambios}
      \n Nuevo color establecido: ${this.state.currentTempo}`);
      };
/*FINDTRUSTATE = Se encarga de buscar y mostrar el estado actual activado*/
 findTrueState = () => {
    const trueState = Object.keys(this.state).find(key => this.state[key] === true);
    return trueState || "No hay estados con valor true";
  }; 
  /*MODE PAINT---------------------------MODE PAINT---------------------------MODE PAINT------------------------------------------*/

  dibujar = (cursorX, cursorY) => {
    if(this.state.modePaint){
    this.ctx.beginPath();
    this.ctx.moveTo(this.initialX, this.initialY);
    this.ctx.strokeStyle = this.state.currentColor;
    this.ctx.lineWidth = this.state.currentWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.lineTo(cursorX, cursorY);
    this.ctx.stroke();
    this.initialX = cursorX;
    this.initialY = cursorY;
    }
    };
  
handleMouseDown = (evt) => {
    this.initialX = evt.offsetX;
    this.initialY = evt.offsetY;

    if(this.state.modePaint){
          this.dibujar(this.initialX,this.initialY);
         this.canvas.addEventListener('mousemove', this.handleMouseMove);
    }else

    if(this.state.modeDelete){
      this.borrar(this.initialX,this.initialY);
      this.canvas.addEventListener('mousemove', this.handleMouseMoveDelete);
    }else 

    if(this.state.modeSquare){
      this.canvas.addEventListener('mousemove', this.drawSquarePreview);
      this.canvas.addEventListener('mouseup', this.drawSquare)
    }else

    if(this.state.modeTriangle){
      this.canvas.addEventListener('mousemove', this.drawTrianglePreview);
      this.canvas.addEventListener('mouseup', this.drawTriangle)

    }else

    if(this.state.modeCircle){
      this.isDrawingCircle = true;
      this.canvas.addEventListener('mousemove',this.drawCirclePreview);
      this.canvas.addEventListener('mouseup', this.drawCircle);

    }
};


  handleMouseMove = (evt) => {
    if(this.state.modePaint){
      this.dibujar(evt.offsetX, evt.offsetY)
 }};

  handleMouseUp = () => {
    if(this.state.modePaint){
    this.canvas.removeEventListener('mousemove', this.handleMouseMove)
    } else

    if(this.state.modeDelete){
    this.canvas.removeEventListener('mousemove', this.handleMouseMoveDelete)
     } else  

      if (this.state.modeSquare) {
      this.canvas.removeEventListener('mousemove', this.drawSquarePreview);
      this.canvas.removeEventListener('mouseup', this.drawSquare);
    } else 

      if (this.state.modeTriangle) {
      this.canvas.removeEventListener('mousemove', this.drawTrianglePreview);
      this.canvas.removeEventListener('mouseup', this.drawTriangle);
    } else 

      if (this.state.modeCircle) {
         this.canvas.removeEventListener('mousemove', this.drawCirclePreview);
        this.canvas.removeEventListener('mouseup', this.drawCircle);
      }

  };
      
 
   /*MODE DELETE---------------------------MODE DELETE--------------------------------MODE DELETE-------------------*/
  borrar = (cursorX, cursorY) => {
    if(this.state.modeDelete){
  this.ctx.beginPath();
    this.ctx.moveTo(this.initialX, this.initialY);
    this.ctx.strokeStyle =  '#fff';  
    this.ctx.lineWidth = this.state.currentWidth;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.lineTo(cursorX, cursorY);
    this.ctx.stroke();
    this.initialX = cursorX;
    this.initialY = cursorY;
    }
    };
  
  handleMouseMoveDelete = (evt) => {
    if(this.state.modeDelete){
      this.borrar(evt.offsetX, evt.offsetY)


 }};
/*MODE SQUARE----------------------------------------------------------------MODE SQUARE--------------------------*/
drawSquarePreview = (evt) => {
  if(this.state.modeSquare){

 const cursorX = evt.offsetX;
  const cursorY = evt.offsetY;
  const width = cursorX - this.initialX;
  const height = cursorY - this.initialY;

  //Dibuja el cuadrado temporal
    if(this.state.cambios){
      this.ctx.fillStyle = this.state.currentTempo;
    }else{
      this.ctx.fillStyle = '#000';
    }
    this.ctx.fillRect(this.initialX, this.initialY, width, height)
    console.log(`Color: ${this.ctx.fillStyle}`)

  }
 }; //end-drawSquarePreview

drawSquare = (evt2) => {

  if(this.state.modeSquare){

const cursorX = evt2.offsetX;
	const cursorY = evt2.offsetY;
	const width = cursorX - this.initialX;
	const height = cursorY - this.initialY;

	// Dibuja el cuadrado final
     if(this.state.cambios){
      this.ctx.fillStyle = this.state.currentTempo;
    }else{
      this.ctx.fillStyle = '#000';
    }
	this.ctx.fillRect(this.initialX, this.initialY, width, height);
    console.log(`Color: ${this.ctx.fillStyle}`)
	
	console.log(`Cuadrado creado con exito.
	\n Dimensiones: ANCHO: ${width} X ALTO:${height} 
	\n Coordenadas inicales: [${this.initialX}, ${this.initialY}]
	\n Coordenadas finales: [${cursorX}, ${cursorY}]`);
	
	// Limpia los eventos para evitar que la vista previa se actualice
	canvas.removeEventListener('mousemove', this.drawSquarePreview);
	canvas.removeEventListener('mouseup', this.drawSquare);


  }
    
}; //end-drawSquare

/*MODE TRIANGLE----------------------------------------------------------------MODE TRIANGLE--------------------------*/

Triangle = (cursorX, cursorY) => {
  if(this.state.modeTriangle){

     if(this.state.cambios){
      this.ctx.fillStyle = this.state.currentTempo;
    }else{
      this.ctx.fillStyle = '#000';
    }
    this.ctx.beginPath();
    this.ctx.moveTo(this.initialX, this.initialY);
    const triHeight = cursorY - this.initialY; // Altura del triángulo
    const triWidth = cursorX - this.initialX; // Ancho de la base del triángulo
    this.ctx.lineTo(this.initialX + triWidth, this.initialY);
    this.ctx.lineTo(this.initialX + (triWidth / 2), this.initialY + triHeight);
    this.ctx.closePath();
    this.ctx.fill();
  }
   };

drawTrianglePreview = (evt) => {
  if(this.state.modeTriangle){
     
    const cursorX = evt.offsetX;
    const cursorY = evt.offsetY;

    this.Triangle(cursorX, cursorY);
  }
};

drawTriangle = (evt) => {
  if(this.state.modeTriangle){

     const cursorX = evt.offsetX;
    const cursorY = evt.offsetY;

    this.Triangle(cursorX, cursorY);

// Limpia los eventos para evitar que la vista previa se actualice
    this.canvas.removeEventListener('mousemove', this.drawTrianglePreview);
    this.canvas.removeEventListener('mouseup', this.drawTriangle);
  }
};


/*MODE CIRCULE----------------------------------------------------------------MODE CIRCULE--------------------------*/



drawCirclePreview = (evt) => {
  if(this.state.modeCircle){
    const cursorX = evt.offsetX;
    const cursorY = evt.offsetY;
   const radius = Math.sqrt(Math.pow(cursorX- this.initialX, 2) + Math.pow(cursorY - this.initialY, 2));
   



    this.ctx.beginPath();
    this.ctx.arc(this.initialX, this.initialY, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle= this.state.currentColor;
    this.ctx.lineWidth = this.state.currentWidth;
    this.ctx.stroke();

    
     }
};


drawCircle = (evt) => {
  if(this.state.modeCircle){
    const cursorX = evt.offsetX;
    const cursorY = evt.offsetY;
   const radius = Math.sqrt(Math.pow(cursorX- this.initialX, 2) + Math.pow(cursorY - this.initialY, 2));
   
    this.ctx.beginPath();
    this.ctx.arc(this.initialX, this.initialY, radius, 0, Math.PI * 2);
    this.ctx.strokeStyle= this.state.currentColor;
    this.ctx.lineWidth = this.state.currentWidth;
    this.ctx.stroke();

    
     }
};



/*LIMPIAR LIENZO - TAMAÑO DE TRAZO---------------------------------------------LIMPIAR LIENZO -TAMAÑO DE TRAZO---*/
 Limpiar = () => {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    console.log('Se borró el contenido del lienzo')
  }
  Menos = () => {
    if(this.state.currentWidth <= 0){
      return console.log('El valor no se puede disminuir más');
      
    }else{
 this.setState((prevState) => ({
     
      currentWidth: prevState.currentWidth - 10
    }));
  console.log(`Tamaño de trazo actual ${this.state.currentWidth}`)
  }


    };

     Aumentar = () => {
  this.setState((prevState) => ({

      currentWidth: prevState.currentWidth + 10
    }));

       console.log(`Tamaño de trazo actual ${this.state.currentWidth}`)

  }


render(){
    return(

      <div> 
  
             <main className="container-canvas"> 
 <Herramientas 
               canvas={this.canvas}
               ctx={this.ctx}
 handleMouseDown={this.handleMouseDown}
          handleMouseMove={this.handleMouseMove}
          handleMouseUp={this.handleMouseUp}
          ChooseAction={this.ChooseAction}
          Limpiar={this.Limpiar}
          Menos={this.Menos}
          Aumentar={this.Aumentar}
                  currentWidth={this.state.currentWidth}
          currentColor={this.state.currentColor}
        />

<canvas
        id="canvas"
        width="720"
        height="600"
  ref="can"
      ></canvas>


             <Colores 
         chooseColor={this.chooseColor}
          currentColor={this.state.currentColor}
          currentTempo={this.state.currentTempo}
          cambios={this.cambios}
        />

   </main>
         
      </div>




    )
  }


}

export default Dibujo

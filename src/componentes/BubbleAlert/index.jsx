import { Component } from "react";

class BubbleAlert extends Component{
  getNumber(n){
    if(n < 0){
      return '0';
    }else{
      return n;
    }}
     render(){
    const { value } = this.props
    return(
       <span className="bubbleAlert">

         {this.getNumber(value)}
      </span>

   
     
    )

  }
   

 }
  

export default BubbleAlert


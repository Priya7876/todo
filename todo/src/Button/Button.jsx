import React from 'react';
import "./Button.css"

const Button = (props) => {
 
  return (
   
        <button
         style={{
         
          background : props.bg,
          margin :   `${props.marginTop}px  ${props.marginRight}px ${props.marginBottom}px ${props.marginLeft}px`,
          padding :   `${props.paddTop}px ${props.paddRight}px ${props.paddBottom}px ${props.paddLeft}px`,
          border : `${props.borderWidth}px ${props.borderStyle} ${props.borderColor}`,
          font : `${props.font}`,
          color :`${props.color}px`,
          height : `${props.height}px`,
         
          width : `${props.width}px`
          


         }
          

        }
        onClick={props.onclk}
        
        
        >
     {props.text}
        </button>
      
    
  );
}

export default Button;

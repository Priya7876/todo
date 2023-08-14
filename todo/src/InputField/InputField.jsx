import React from 'react';
import './InputField.css';

const InputField = (props) => {
  
  return (
    
  
     <div className = {props.des ? "inputBox" : "inputText"} >
      <textarea
         className = "inputField"
           // value={props.todo}
            rows={5} 
            
            onChange = {(e) => {
              const eTarget = e.target.value;
              
              props.updateTodo(eTarget);
                
            }}
            
            cols={35}
            wrap= "soft"
            maxLength={props.maxLength}
            placeholder= {props.title}
            
            />
    </div>
    
 
  );
}

export default InputField;

import React from 'react';
import  './TitleAndLine.css';
import InputField  from "../InputField/InputField"
import Button from '../Button/Button'
import { useState } from 'react';

function TitleAndLineComp({props}){
const [todo,setTodo] = useState("");
const [Des,setDes]  = useState("");
const[list,setList] = useState([]);
 
  
  const updateTodo = ( m) =>{
    setTodo(m);
 
  };
 const updateDes = (n) =>{
    setDes(n);
 }
  const deleteTodo = (m)=>{
   const newTodo = list.filter((todo) =>{
   return todo!==m;
   })
   setList(newTodo);
  }

  const  Save = ()=>{
    if(todo !== "" && Des !== ""){
        ///list.push({todo : todo , Des: Des});
    setList([...list,{todo : todo , Des: Des}]);
       

    }
    console.log(todo);
           console.log(list.length);
     };
    return (
        <div className='ParentDiv'>
<div className='divBox'>
    <p className='title'> Take Notes</p>
    <hr className='line'
       
    />
</div>
<div className = "Horizon-Seg">
    <div className = "Hori-Ver1">
       <InputField  title = "Title"  maxLength = {40}  type = "textArea" des = {false} todo = {todo} updateTodo ={updateTodo}/>
       <InputField   title = "Description"  maxLength = {400}  type = "text" des= {true} todo = {Des} updateTodo = {updateDes} />
       <Button text = "Save"  bg  = "#ffffff"  marginTop={10} marginRight = {1200}  marginLeft = {30}  marginBottom = {10}
       paddTop = {10} paddRight = {10} paddLeft ={10} paddBottom = {10}
        color = "#46A0F4" font = {25} borderWidth= {4}  borderStyle = "solid"  borderColor = "#46A0F4"  onclk = {Save}
       />




    </div>
   
    <div  className = "verticalLine"></div>

    <div  className='Hori-Ver2'>
        <div className='headingNotes'>
            Added Notes
        </div>
        {console.log(list.length)}
       {list.length > 0 ?(
        <div className='divParMain'> 
            {list.map((todo) => (
        <div className = "MainCard">
            <div className = "RowTitle">
                <p className='TitlePara'> {todo.todo}</p>
                <div><img src= "./assets/trash.svg" className='image' onClick = {() =>{
                    deleteTodo(todo)
            }}/></div>
               
            </div>
            <div className='Descr'><p className='DescPara'>{todo.Des}</p></div>
        </div>))} </div>) : 
        <p>No record found</p>
}
    </div>
</div>
</div>
    )
}
export default TitleAndLineComp;





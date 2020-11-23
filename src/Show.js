import React,{useEffect, useState} from 'react';
import From from './componets/From'
import firebase from 'firebase'
import Todolist from './componets/Todolist';
import Example from './componets/Slides';


export default function Show (){
    const [todoList,setTodoList] = useState();

useEffect(()=>{
const todoRef = firebase.database().ref("Todo");
todoRef.on("value",(snapshot)=>{
   const todos = snapshot.val();
   const todoList = []
   for (let id in todos ){
       todoList.push(todos[id])
   }
   console.log(todoList);
    ssetTodoList(todoList);
})
},[])
return (
<div className="App">
    <From/>
    <Todolist/>
    
</div>

    );
}

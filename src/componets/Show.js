import React,{useEffect, useState} from 'react';

import From from './From'
import firebase from 'firebase'
import Todolist from './Todolist';


export default function App(){
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
    setTodoList(todoList);
})
},[])
return (
<div className="App">
    <From/>
    <Todolist/>
    
</div>

    );
}

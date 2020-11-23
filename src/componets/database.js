import React , { Component } from 'react';

import firebase from './firebase';
class App extends Component{
    

    state={
text : ""

    }
    handleText=e=>{
        this.setState({
            text : e.target.value
        })
    }
    handleSubmit=e=>{
        console.log(this.state.text)
    }
    render(){
        <div className="App-header">
        <input type ="text" onChange={this.handleText} id="inputText"/>
        <br/>
    <button onClick={this.handleSubmit}> Save </button>
        </div>
        
    }
}

export default App;






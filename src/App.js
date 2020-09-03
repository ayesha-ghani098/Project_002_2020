import React from 'react';
import './App.css';
import { useState } from 'react';

function App(props) {
    // return <div className="content"><strong>Hello Ayesha</strong> <ul><li>Class: BSCS</li><li>Age: {18+2}</li></ul></div>;


 //------------ Greeting  Component exercise----------//
    // return <div>Hello {props.fname} {props.lname}! </div>


//----------- Media Card Component exercise---------//
    // return <div>
    //     <img src="{props.url}"></img>
    //     <h2>
    //        {props.title}
    //     </h2>
    //     <p>
    //         {props.body}
    //     </p>
    // </div>


    //---------- Gate Component exercise---------//
    // return <div>
    //     {props.isOpen ? "Open":"Closed"}
    // </div>

    const [islit,setlit] = useState(false);
    const brightness = islit ? "lit":"dark";

 //--------Background on/off Component------//
 return <div  className={`room ${brightness}`}>
 <div className="room">
     THE ROOM IS {islit? 'LIT' : 'DARK'}
  <br />
  <button onClick={() => setlit(!islit)}>Flip</button>
  </div>   
  </div>
}

export default App;
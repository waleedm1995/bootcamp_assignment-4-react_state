import React, {useState} from 'react'
import Count from './count'
import './App.css'
function App(){

    let [isAfternoon,setDay]=useState(true);
    let [count,setCount]=useState(1);

  return (
    <div className={`basic ${isAfternoon? 'afternoon' : 'night'}`}>

      <h1>It is {isAfternoon? "Afternoon" : "Night"}    </h1>
      <button onClick={()=> setDay(!isAfternoon)}>
        {isAfternoon? "change to Night" :"change to afternoon"} </button>

      <br/>

      <button onClick={()=>setCount(++count)}>
        Increase count
      </button>   
       <Count a={count} />

    </div>


  )
}

export default App
import { countReset, log } from 'console';
import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [stop,setStop] = useState(false);

  useEffect(()=>{
    if(!stop){
      console.log(count);
    }
  },[count,stop]);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={()=>{
        if(!stop){
          setCount(count+1);
        }else{
          setCount(count)
        }}}>Update</button>
      <button onClick={()=>setStop(!stop)}>stop counting</button>
    </div>
  );
}

export default App;

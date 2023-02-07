import { countReset, log } from 'console';
import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState<number>(0);
  const [stop,setStop] = useState<boolean>(false);

  useEffect(()=>{
      console.log(count);
  },[count]);

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

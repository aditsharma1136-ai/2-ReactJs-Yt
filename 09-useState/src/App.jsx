import React from 'react'
import { useState } from 'react';

const App = () => {
  // const [userName, setUserName] = useState("Aditya")
  // const [num, setNum] = useState(10)
  // function clickedbtn(){
  //     setNum(20);
  //     setUserName("Sonu");
  // }
  const [num, setNum] = useState(0)
  function increaseNum(){
    setNum(num+1);
  }
  function decreaseNum(){
    setNum(num-1);
  }
  function jump5Num(){
    setNum(num+5);
  }
  return (
    // <div>
    //   <h1>Value of num is: {num} <br /> User name is: {userName} </h1>
    //   <button onClick={clickedbtn}>Click Me</button>
    // </div>
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>increase by 5</button>
    </div>
  )
}

export default App

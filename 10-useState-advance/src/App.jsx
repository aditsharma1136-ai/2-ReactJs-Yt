import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10,20,30])
    // const [num, setNum] = useState({user:'Aditya',age:'19'})
  const btnClicked = ()=>{
    // const newNum = {...num};
    // newNum.user ='Pallab'
    // newNum.age = 20 
    // setNum(newNum)
    const newNum = [...num];
    newNum.push(99)
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num}</h1>
      {/* <h1>{num.user},{num.age}</h1> */}
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App

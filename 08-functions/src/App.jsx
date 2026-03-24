import React from 'react'

const App = () => {
  // function btnClicked(){
  //   console.log("Hey Adi");
  // }
  function textChanging(){
    console.log("User is Typing...");
    
  }
  return (
    <div>
      {/* <h1>Hello, Master Aditya.</h1>
      <button onClick={function () {
        console.log("Hey Adi");
      }}>Click here</button> */}
      <input onChange={textChanging} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default App

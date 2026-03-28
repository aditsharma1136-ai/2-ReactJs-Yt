import React from 'react'

const App = () => {
  // function btnClicked(){
  //   console.log("Hey Adi");
  // }

  // function textChanging(val){
  //   console.log(val);
  // }

  const Scrolling = (elem) => {
    if (elem > 0) {
      console.log("seedha Scrolling...");
    } else {
      console.log("ulta Scrolling...");
    }
  }

  return (
    <div>
      {/* <h1>Hello, Master Aditya.</h1>
      <button onClick={function () {
        console.log("Hey Adi");
      }}>Click here</button> */}

      {/* --------------------------------------------------------------------------------------------------------------------------- */}

      {/* <input onChange={function(elem){
        textChanging(elem.target.value)
      }} 
      type="text" 
      placeholder='Enter Name'
      /> */}

      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      {/* <div 
        onMouseMove={(elem)=>{
          console.log(elem.clientX);
        }}
        className='box'>
        </div> */}
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
      <div onWheel={(elem) => {
        Scrolling(elem.deltaY);
      }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>
      {/* --------------------------------------------------------------------------------------------------------------------------- */}
    </div>
  )
}

export default App

import React from 'react'

const App = () => {
  // const user = {
  //   'user':'Aditya',
  //   'age':19
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // const usera =JSON.parse(localStorage.getItem('user'))
  
  // console.log(usera);
  localStorage.removeItem('user');
  return (
    <div>
      App
    </div>
  )
}

export default App

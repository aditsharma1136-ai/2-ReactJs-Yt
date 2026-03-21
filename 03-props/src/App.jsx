import React from 'react'
import Card from './components/card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Aditya' age={19} img='https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Pallab' age={21} img='https://images.unsplash.com/photo-1760434979194-7169b1ee1392?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Konkon' age={20} img='https://plus.unsplash.com/premium_photo-1742151387742-8783580f7b86?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App

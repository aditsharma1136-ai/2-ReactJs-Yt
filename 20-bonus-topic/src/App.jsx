import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState('Light')
  return (
    <div>
      <h1>This is a {theme} Theme </h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App

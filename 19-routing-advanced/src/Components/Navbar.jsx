import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-8 py-4 bg-cyan-700'>
        <h2 className='text-xl font-bold'>A1X BLAZE</h2>
        <div className='flex gap-8'>
          <Link className='text-lg font-bold' to='/'>Home</Link>
          <Link className='text-lg font-bold' to='/about'>About</Link>
          <Link className='text-lg font-bold' to='/category'>Category</Link>
          <Link className='text-lg font-bold' to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

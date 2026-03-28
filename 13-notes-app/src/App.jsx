import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title,details);
    
    setTitle('')
    setDetails('')
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 gap-4 items-start flex-col p-10 '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {/* PEHLA VALA INPUT  */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 outline-none border-2 rounded'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full flex items-start outline-none flex-row h-32 border-2 rounded'
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className='px-5 py-2 w-full border-2 rounded bg-white text-black' >Add Notes</button>

      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className="flex flex-wrap h-full overflow-auto gap-5 mt-5">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App

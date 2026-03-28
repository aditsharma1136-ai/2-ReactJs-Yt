import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    console.log(title, details);

    setTitle('')
    setDetails('')
  }
  return (
    <div className='min-h-screen lg:flex bg-black text-white'>
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
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* DETAILED VALA INPUT */}
        <textarea
          type="text"
          placeholder='Write Details'
          className='px-5 w-full flex items-start outline-none flex-row h-32 border-2 rounded'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className='active:scale-95 px-5 py-2 w-full border-2 rounded bg-white text-black' >Add Notes</button>

      </form>
      <div className='lg:w-1/2 p-10 lg:border-l-2'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div id='scrool1' className="flex flex-wrap h-[90%] overflow-auto gap-5 mt-5">
          {task.map(function(elem,idx){

            return <div key={idx} className="flex flex-col h-55 w-45 rounded-2xl bg-[url('https://i.pinimg.com/originals/4e/b0/01/4eb001f31c88294e40fe5bb24e715c8e.png')] bg-cover p-4 text-black">
              <h3 className='leading-tight font-semi-bold text-xl mt-6'>{elem.title}</h3>
              <p  id='cds' className='overflow-auto flex-1 mt-2 leading-tight text-gray-500'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

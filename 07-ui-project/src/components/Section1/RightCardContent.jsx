import React from 'react'

const RightCardContent = () => {
  return (
     <div className='absolute p-8 top-0 left-0 h-full w-full flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>1</h2>
        <div>
            <p className='text-white mb-10 text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed culpa magni perspiciatis ipsum velit.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-semi-bold px-8 py-2 rounded-full'>Satisfied</button>
                <button className='bg-blue-600 text-white font-semi-bold px-3 py-2 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent

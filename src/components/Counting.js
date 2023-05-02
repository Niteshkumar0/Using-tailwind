import React, { useState } from 'react'

export default function Counting() {
    let [count,updateCount] = useState('');

    

  return (
    <div className='flex flex-col h-48 w-83 mx-auto my-40 w-2/6 bg-lime-200 items-center bg-blue-400 rounded'>
        <p className='font-bold my-2 text-lg '>Increment/Decrement</p>
        <div className='font-bold mt-2 text-lg mb-5'>{count}</div>
        <div className='w-80 mt-10 flex justify-between	'>
        <button className=' w-2/4 border border-purple-200 mr-6' onClick={() => updateCount(count - 1)}>prev</button>
        <button className='w-2/4 border border-purple-200' onClick={() => updateCount(count + 1)} >next</button>
        </div>
    </div>
  )
}

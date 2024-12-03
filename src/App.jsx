import React from 'react'

const App = () => {
  return (
    <div className='bg-yellow-100 min-h-screen p-4 flex flex-col items-center justify-center'>
      <div className='bg-yellow-600 inline-flex items-center justify-center p-11 border-b-[1rem] border-yellow-800'>
        <div className='size-[30rem] grid grid-cols-12 grid-rows-12 border-t-[1rem] border-yellow-800 bg-white'>
          {['bg-red-900', 'bg-red-900', 'bg-red-600', 'bg-orange-400', 'bg-amber-400', 'bg-amber-400', 'bg-orange-400', 'bg-red-600', 'bg-amber-400', 'bg-amber-400', 'bg-red-900', 'bg-red-900', 'bg-red-900', 'bg-red-600', 'bg-amber-400', 'bg-amber-400', 'bg-orange-400', 'bg-orange-400', 'bg-amber-400', 'bg-amber-400', 'bg-red-600', 'bg-amber-400', 'bg-amber-400', 'bg-red-900', 'bg-red-900', 'bg-amber-400', 'bg-amber-400', 'bg'
          ].map((pixel, index) => (
            <span className={`${pixel} rounded-sm`} key={index}></span>
          ))}
        </div>
      </div>
      <div className='relative'>
        <span className='absolute top-[1.7rem] right-[2.1rem] text-sm'>🤎</span>
        <h5 className='text-center mt-8 text-xs text-amber-900'>Crafted with . by<br /> Frederick Moreno</h5>
      </div>
    </div>
  )
}

export default App

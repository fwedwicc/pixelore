import React from 'react'

const App = () => {
  return (
    <div className='bg-yellow-100 min-h-screen p-4 flex flex-col items-center justify-center'>
      <div className='bg-yellow-600 inline-flex items-center justify-center p-11 border-b-[1rem] border-yellow-800'>
        <div className='size-[30rem] grid grid-cols-12 grid-rows-12 border-t-[1rem] border-yellow-800 bg-white'>
          {['bg-blue-50', 'bg-blue-50', 'bg-blue-50', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-red-950/90', 'bg-red-950/90', 'bg-red-950/90', 'bg-red-900/90', 'bg-blue-50', 'bg-blue-50', 'bg-blue-50', 'bg-blue-50', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-red-800/70', 'bg-red-950/90', 'bg-red-900/90', 'bg-blue-50', 'bg-blue-50', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-red-800/70', 'bg-orange-300/70', 'bg-red-900/90', 'bg-red-950/90', 'bg-blue-50', 'bg-blue-50', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-red-950/90', 'bg-red-900/90', 'bg-blue-50', 'bg-blue-100', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-pink-700/50', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-red-950', 'bg-orange-300/70', 'bg-red-950/90', 'bg-red-950/90', 'bg-blue-100', 'bg-blue-100', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-red-600/90', 'bg-red-950/90', 'bg-blue-100', 'bg-blue-100', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-orange-200/70', 'bg-lime-700/70', 'bg-lime-700/70', 'bg-orange-300', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-neutral-200', 'bg-red-950/90', 'bg-blue-100', 'bg-blue-200', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-neutral-900', 'bg-orange-200/70', 'bg-orange-200/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-red-950/90', 'bg-red-950/90', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900/90', 'bg-neutral-900/90', 'bg-neutral-900', 'bg-neutral-900', 'bg-red-300', 'bg-white', 'bg-neutral-200', 'bg-neutral-900/90', 'bg-emerald-600/70', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900/90', 'bg-neutral-900', 'bg-neutral-900', 'bg-red-950/80', 'bg-white', 'bg-red-300', 'bg-red-950/80', 'bg-emerald-600/70', 'bg-neutral-900/90', 'bg-emerald-600/70', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900/90', 'bg-neutral-900', 'bg-neutral-900', 'bg-red-950/80', 'bg-red-300', 'bg-red-300', 'bg-red-950/80', 'bg-neutral-900/90', 'bg-emerald-600/70', 'bg-neutral-900/90', 'bg-emerald-600/70', 'bg-blue-200', 'bg-neutral-900/90', 'bg-neutral-900', 'bg-red-950/80', 'bg-red-950/80', 'bg-red-300', 'bg-red-300', 'bg-red-950/80', 'bg-emerald-600/70', 'bg-neutral-900/90', 'bg-emerald-600/70', 'bg-neutral-900/90', 'bg-emerald-600/70'].map((pixel, index) => (
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

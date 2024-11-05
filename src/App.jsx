import React from 'react'

const App = () => {
  return (
    <div className='bg-yellow-100 min-h-screen p-4 flex flex-col items-center justify-center'>
      <div className='bg-yellow-600 inline-flex items-center justify-center p-11 border-b-[1rem] border-yellow-800'>
        <div className='size-[30rem] grid grid-cols-12 grid-rows-12 border-t-[1rem] border-yellow-800 bg-white'>
          {['bg-sky-950', 'bg-amber-950/50', 'bg-pink-700/40', 'bg-sky-950', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-950', 'bg-pink-700/40', 'bg-amber-950/50', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-amber-900/30', 'bg-amber-950/50', 'bg-pink-700/40', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-pink-700/40', 'bg-amber-950/50', 'bg-amber-900/30', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-amber-900/30', 'bg-blue-500/70', 'bg-blue-500/70', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-blue-500/70', 'bg-blue-500/70', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-950', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-300/40', 'bg-sky-300/40', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-300/40', 'bg-sky-300/40', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-sky-950', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-pink-700/40', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-white', 'bg-pink-900/70', 'bg-pink-700/40', 'bg-pink-900/70', 'bg-white', 'bg-amber-900/30', 'bg-amber-900/30', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-white', 'bg-pink-700/40', 'bg-pink-700/40', 'bg-pink-700/40', 'bg-white', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-sky-950', 'bg-sky-950', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-amber-950/50', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-sky-950', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-amber-950/50', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-amber-950/50', 'bg-orange-300/70', 'bg-amber-950/50', 'bg-orange-300/70', 'bg-sky-950', 'bg-sky-950', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-orange-300/70', 'bg-sky-950'].map((pixel, index) => (
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

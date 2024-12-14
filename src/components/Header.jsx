import React from 'react'

const Header = () => {
  return (
    // bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500
    <article className='flex flex-col gap-1.5 md:flex-row h-40 p-1 bg-yellow-100/60 border-2 border-amber-500/80'>
      <div className='w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500'>
        s
      </div>
      <div className='md:w-[35rem] w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500'></div>
    </article>
  )
}

export default Header

import React from 'react'

const Subheader = ({ icon, name, desc }) => {
  return (
    <div className="flex gap-1.5">
      <div className="flex justify-center items-center">
        <div className='size-8 flex items-center justify-center'>
          <img src={icon} alt={name} className="w-8 h-auto text-yellow-800" />
        </div>
      </div>
      <div className="flex items-center py-1 px-1 w-full bg-yellow-200 border-4 border-yellow-300/50 ring-1 ring-amber-500 text-yellow-800">
        <p className='pixel-font text-[10px] leading-tight'>{name} : <span className='text-yellow-600'>{desc}</span></p>
      </div>
    </div>
  )
}

export default Subheader

import React from 'react'

const Subheader = ({ icon, name, desc }) => {
  return (
    <div className="flex gap-2">
      <div className="flex justify-center items-center">
        <div className='border size-7 flex items-center justify-center'>
          <img src={icon} alt={name} className="w-6 h-auto text-yellow-800 mx-1 border" />
        </div>
      </div>
      <div className="flex items-center py-1 px-1 w-full bg-yellow-200 border-4 border-yellow-300/50 ring-1 ring-amber-500 text-yellow-800">
        <p className='pixel-font text-[10px] leading-tight'>{name} : <span className='text-yellow-600'>{desc}</span></p>
      </div>
    </div>
  )
}

export default Subheader

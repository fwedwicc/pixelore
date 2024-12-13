import React from 'react'

const Frame = ({ variant, pixel, onClick }) => {
  return (
    <div className='inline-flex flex-col items-center justify-center' onClick={onClick}>
      <div className={`${variant === 'sm' ? 'border-b-[0.4rem] p-4' : 'border-b-[1rem] p-10'} bg-yellow-600 inline-flex items-center justify-center border-yellow-800`}>
        <div className={`${variant === 'sm' ? 'size-[9rem] border-t-[0.4rem]' : 'size-[25rem] border-t-[1rem]'} grid grid-cols-12 grid-rows-12 border-yellow-800 bg-white`}>
          {pixel.map((pixel, index) => (
            <span className={`${pixel} ${variant === 'sm' ? 'rounded-[1px]' : 'rounded-sm'}`} key={index}></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frame

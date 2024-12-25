import React from 'react'

const Frame = ({ variant, pixel, onClick }) => {
  return (
    <div className={`inline-flex flex-col items-center justify-center ${variant === 'sm' ? 'md:hover:ring-[6px] hover:ring-[3px] hover:ring-amber-300/80 cursor-pointer cursor-click' : ''}`} onClick={onClick}>
      <div className={`${variant === 'sm' ? 'md:border-b-[5px] border-b-[4px] md:p-3.5 p-2.5 cursor-click' : 'md:border-b-[1rem] border-b-[0.7rem] md:p-8 p-6'} bg-yellow-600 inline-flex items-center justify-center border-yellow-800`}>
        <div className={`${variant === 'sm' ? 'md:size-[8rem] size-[4.7rem] md:border-t-[5px] border-t-[4px] cursor-click' : 'md:size-[20rem] size-[15rem] md:border-t-[1rem]'} border-t-[0.7rem] grid grid-cols-12 grid-rows-12 border-yellow-800 bg-white`}>
          {pixel.map((pixel, index) => (
            <span className={`${pixel} ${variant === 'sm' ? 'md:rounded-[1px] rounded-[0.7px] cursor-click' : 'md:rounded-sm rounded-[1.5px]'}`} key={index}></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Frame

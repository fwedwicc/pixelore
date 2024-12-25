import React from 'react'
import { Frame } from '../components'

const Modal = ({ pixel, name, desc, palette, tiktokLink, onClose }) => {
  return (
    <div className="bg-yellow-950/30 size-full fixed inset-0 -top-[5px] z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="sm:max-w-[27rem] sm:w-full md:m-4 m-[22px] sm:mx-auto">
        <div className="flex flex-col bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
          <div className="flex flex-col md:gap-4 gap-2 md:p-4 p-2">
            <Frame variant={'lg'} pixel={pixel} />
            <div className='relative w-full md:pb-14 pb-10 space-y-4'>
              <div className='space-y-1'>
                <h5 className='md:text-lg text-xs'>{name}</h5>
                <p className='pixel-font md:text-[10px] text-[9px] leading-tight text-yellow-600'>{desc}</p>
              </div>
              <div className='space-y-1'>
                <p className='pixel-font md:text-[10px] text-[9px] leading-tight text-yellow-600'>Palette:</p>
                <div className='flex flex-wrap gap-1'>
                  {palette.map((pixel, index) => (
                    <span className={`${pixel} md:rounded-sm rounded-[1.5px] md:size-6 size-5`} key={index}></span>
                  ))}
                </div>
              </div>
              <div className='flex w-full items-end justify-between absolute bottom-0 right-0'>
                {tiktokLink ? (
                  <a href={tiktokLink} target="_blank" rel="noopener noreferrer" className="md:px-3 px-2 md:py-2 py-1 md:text-xs text-[10px] bg-stone-800 hover:bg-stone-900 pixel-font text-white">Watch on TikTok</a>
                ) : (
                  <p className='pixel-font md:text-[10px] text-[9px] leading-tight text-yellow-600'>TikTok not available</p>
                )}
                <button className="md:px-3 px-2 md:py-2 py-1 md:text-xs text-[10px] bg-yellow-300/50 hover:bg-yellow-300/70 pixel-font text-yellow-800" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

import React from 'react'
import { Avatar, HeaderBg } from '../assets'

const Header = () => {

  const activeLink = 'active:border-t-[5px] active:border-l-[5px] active:border-b-0 active:border-r-0'
  const defaultLink = 'border-b-[5px] border-r-[5px]'

  return (
    <article className='flex flex-col gap-1.5 md:flex-row md:h-40 h-full p-1 bg-yellow-100/60 border-2 border-amber-500/80'>
      <div className='relative w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500 md:h-auto h-[7rem]'>
        <img src={HeaderBg} alt="Pixel Header Background" className='object-cover w-full h-full' />
        {/* TikTok link */}
        <div className='absolute bottom-1 left-1'>
          <a href="#" className={`bg-stone-800 hover:bg-stone-700 hover:border-stone-900 border-stone-950 flex items-center gap-2 md:p-2 p-1 ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            <p className='pixel-font text-[10px] leading-none text-white cursor-click'>View on TikTok</p>
          </a>
        </div>
      </div>
      <div className='md:w-[35rem] w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500 space-y-1'>
        {/* Profile and informations */}
        <div className='flex gap-3'>
          {/* Profile */}
          <div className='shrink-0 md:border-b-[5px] border-b-[4px] md:p-2.5 p-2 md:size-[6.3rem] size-[5rem] bg-yellow-600 inline-flex items-center justify-center border-yellow-800'>
            <div className='md:border-t-[5px] border-t-[4px] border-yellow-800 bg-white h-full w-full'>
              <img src={Avatar} alt="Avatar" className='brightness-150 object-cover w-full h-full' />
            </div>
          </div>
          {/* Informations */}
          <div className='space-y-1 pt-2'>
            <p className='pixel-font text-md leading-none text-yellow-800'>Frederick Moreno</p>
            <p className='pixel-font md:text-[10px] text-[9px] leading-none text-yellow-600'>@fwedwicc</p>
            <p className='pt-3 italic pixel-font md:text-[10px] text-[9px] leading-tight text-yellow-600'>"I'm confident my younger self is rooting for me."</p>
          </div>
        </div>
        {/* Socials */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
            <a href="#" className={`bg-blue-500 hover:bg-blue-400 border-blue-700 hover:border-blue-600 md:size-9 size-7 flex items-center justify-center ${defaultLink} ${activeLink}`}>
              <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            </a>
            <a href="#" className={`bg-pink-600 hover:bg-pink-500 border-pink-800 hover:border-pink-700 md:size-9 size-7 flex items-center justify-center ${defaultLink} ${activeLink}`}>
              <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            </a>
            <a href="#" className={`bg-blue-600 hover:bg-blue-500 border-blue-800 hover:border-blue-700 md:size-9 size-7 flex items-center justify-center ${defaultLink} ${activeLink}`}>
              <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            </a>
            <a href="#" className={`bg-neutral-600 hover:bg-neutral-500 border-neutral-800 hover:border-neutral-700 md:size-9 size-7 flex items-center justify-center ${defaultLink} ${activeLink}`}>
              <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            </a>
          </div>
          <a href="#" className={`bg-yellow-700 hover:bg-yellow-600 hover:border-yellow-800 border-yellow-900 flex items-center gap-2 md:p-2 p-1 ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto cursor-click' />
            <p className='pixel-font text-[10px] leading-none text-yellow-100 cursor-click'>Linktree</p>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Header

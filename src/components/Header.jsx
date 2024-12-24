import React from 'react'
import { Avatar } from '../assets'

const Header = () => {

  const activeLink = 'active:border-t-[5px] active:border-l-[5px] active:border-b-0 active:border-r-0'
  const defaultLink = 'border-b-[5px] border-r-[5px]'

  return (
    <article className='flex flex-col gap-1.5 md:flex-row md:h-40 h-full p-1 bg-yellow-100/60 border-2 border-amber-500/80'>
      <div className='w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio illo molestias odit quisquam veniam eveniet, enim quis aperiam, autem culpa! Blanditiis alias sapiente saepe magnam illum quia quas ad.
      </div>
      <div className='md:w-[35rem] w-full bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500 space-y-1'>
        {/* Profile and informations */}
        <div className='flex gap-3'>
          {/* Profile */}
          <div className='shrink-0 border-b-[5px] p-2.5 size-[6.3rem] bg-yellow-600 inline-flex items-center justify-center border-yellow-800'>
            <div className='border-t-[5px] border-yellow-800 bg-white h-full w-full'>
              <img src={Avatar} alt="Avatar" className='brightness-150 object-cover w-full h-full' />
            </div>
          </div>
          {/* Informations */}
          <div className='space-y-1 pt-2'>
            <p className='pixel-font text-md leading-none text-yellow-800'>Frederick Moreno</p>
            <p className='pixel-font text-[10px] leading-none text-yellow-600'>@fwedwicc</p>
            <p className='pt-3 italic pixel-font text-[10px] leading-none text-yellow-600'>"Hello world, Hello world, Hello world ,Hello world, Hello world"</p>
          </div>
        </div>
        {/* Socials */}
        <div className='flex items-center gap-1'>
          <a href="#" className={`bg-blue-500 border-blue-600 size-9 flex items-center justify-center ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto' />
          </a>
          <a href="#" className={`bg-blue-500 border-blue-600 size-9 flex items-center justify-center ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto' />
          </a>
          <a href="#" className={`bg-blue-500 border-blue-600 size-9 flex items-center justify-center ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto' />
          </a>
          <a href="#" className={`bg-blue-500 border-blue-600 size-9 flex items-center justify-center ${defaultLink} ${activeLink}`}>
            <img src="https://placehold.co/30x30" alt="" className='w-4 h-auto' />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Header

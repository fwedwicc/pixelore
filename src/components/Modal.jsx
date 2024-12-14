import React from 'react'
import { Frame } from '../components'

const Modal = ({ pixel, name, desc, onClose }) => {
  return (
    <div className="bg-yellow-950/30 size-full fixed inset-0 -top-[5px] z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="sm:max-w-5xl sm:w-full m-4 sm:mx-auto">
        <div className="flex flex-col bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
          <div className="flex md:flex-row flex-col gap-7 p-7">
            <Frame variant={'lg'} pixel={pixel} />
            <div className='relative w-full pb-14'>
              <h5>{name}</h5>
              <p>{desc} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia velit porro nam nulla aliquid facilis eveniet eos sequi? Maxime eveniet iusto voluptatibus sit voluptatum, est asperiores nam laboriosam. Illum, iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, numquam deserunt officiis quia hic quisquam cum sapiente odit delectus minus illo incidunt aperiam consequatur vitae, earum quis similique quaerat velit?</p>
              <div className='absolute bottom-0 right-0'>
                <button className="px-3 py-2 bg-yellow-300/50 hover:bg-yellow-300/70 pixel-font text-yellow-800" onClick={onClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

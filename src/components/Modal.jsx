import React from 'react'
import { Frame } from '../components'

const Modal = ({ pixel, name, desc, onClose }) => {
  return (
    <div className="bg-yellow-950/30 size-full fixed inset-0 -top-[5px] z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="sm:max-w-6xl sm:w-full m-4 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="flex flex-col gap-4 items-center justify-center text-center p-7">
            <h4>Pixel Details</h4>
            <Frame variant={'lg'} pixel={pixel} />
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
          <div className="overflow-y-auto pb-7 flex justify-center gap-7">
            <div className="items-center gap-4 flex">
              <button className="btn btn-success" onClick={onClose}>Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

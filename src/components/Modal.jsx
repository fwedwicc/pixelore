import React from 'react'

const Modal = ({ pixel, onClose }) => {
  return (
    <div className="bg-yellow-950/30 size-full fixed inset-0 -top-[5px] z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="sm:max-w-4xl sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="flex flex-col gap-4 items-center justify-center text-center p-7">
            <h4>Pixel Details</h4>
            <p>Details about the selected pixel will be displayed here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quam, sapiente in facere modi architecto ipsa a. Impedit nemo iste eius, ratione esse unde, repellat temporibus suscipit consequatur modi obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laudantium magnam necessitatibus quaerat laborum dolorem consequuntur officia natus repudiandae cupiditate quis, similique ex praesentium quae recusandae dolorum, sequi enim explicabo!</p>
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

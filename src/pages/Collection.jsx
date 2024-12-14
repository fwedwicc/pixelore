import React, { useState } from 'react';
import { Frame, Modal } from '../components';
import { Data } from '../data/pixels';

const Collection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPixel, setSelectedPixel] = useState(null);

  const handleFrameClick = (pixel) => {
    setSelectedPixel(pixel);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPixel(null);
  };

  return (
    <section className="p-1 space-y-[4.5px]">
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-yellow-800 mx-1"
          >
            <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
          </svg>
        </div>
        <div className="flex items-center px-1 w-full bg-yellow-200 border-4 border-yellow-300/50 ring-1 ring-amber-500 text-yellow-800">
          <p className='pixel-font text-[10px] leading-none'>Collection : <span className='text-yellow-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span></p>
        </div>
      </div>
      <div className="p-3 pt-[19px] bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
        {/* <div className="flex flex-col items-center justify-center mb-4">
          <h5>Collections</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugi</p>
        </div> */}
        <div className="flex justify-center flex-wrap gap-4">
          {Object.keys(Data).map((category) => (
            Data[category].map((item, index) => (
              <Frame
                key={`${category}-${index}`}
                variant={'sm'}
                pixel={item.pixels}
                onClick={() => handleFrameClick(item)}
              />
            ))
          ))}
        </div>
      </div>
      {isModalOpen && (
        <Modal
          pixel={selectedPixel.pixels}
          name={selectedPixel.name}
          desc={selectedPixel.description}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Collection;

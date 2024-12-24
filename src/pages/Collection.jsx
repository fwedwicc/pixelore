import React, { useState } from 'react';
import { Frame, Modal, Subheader } from '../components';
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
      <Subheader />
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

import React, { useState, useEffect } from 'react';
import { Frame, Modal, Subheader } from '../components';
import { CollectionIcon } from '../assets/icon';
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


  // Extract unique colors from the pixel array
  const extractUniqueColors = (pixels) => {
    return Array.from(new Set(pixels));
  };

  useEffect(() => {
    Object.keys(Data).forEach((category) => {
      Data[category].forEach((item) => {
        item.palette = extractUniqueColors(item.pixels);
      });
    });
  }, []);

  return (
    <section className="p-1 space-y-[4.5px]">
      <Subheader
        icon={CollectionIcon}
        name={'Collection'}
        desc={'Diverse collection of my coded pixel masterpieces.'}
      />
      <div className="md:p-3 p-1 md:pt-[19px] pt-[6px] bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
        <div className="flex justify-center flex-wrap md:gap-4 gap-1.5">
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
          category={selectedPixel.category}
          desc={selectedPixel.description}
          palette={selectedPixel.palette}
          tiktokLink={selectedPixel.tiktokLink}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Collection;

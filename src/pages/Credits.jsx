import React from 'react'
import { Subheader } from '../components';

const Credits = () => {
  return (
    <section className="p-1 space-y-[4.5px]">
      <Subheader
        icon={'https://placehold.co/30x30'}
        name={'Credits'}
        desc={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
      />
      <div className="p-3 pt-[19px] bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
        This is Credits Page
      </div>
    </section>
  )
}

export default Credits

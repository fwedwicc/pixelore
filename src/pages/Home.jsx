import React from 'react'
import { Subheader } from '../components';
import { HomeIcon } from '../assets/icon';

const Home = () => {
  return (
    <section className="p-1 space-y-[4.5px]">
      <Subheader
        icon={HomeIcon}
        name={'Home'}
        desc={'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
      />
      <div className="p-3 pt-[19px] bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
        This is Home
      </div>
    </section>
  )
}

export default Home

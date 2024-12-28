import React from 'react'
import { Subheader } from '../components';
import { HomeIcon } from '../assets/icon';

const Home = () => {
  return (
    <section className="p-1 space-y-[4.5px]">
      <Subheader
        icon={HomeIcon}
        name={'Home'}
        desc={'Represents home page.'}
      />
      <div className="p-3 pt-[19px] bg-[#fef6b2] border-4 border-yellow-200/80 ring-1 ring-amber-500">
        <p className='pixel-font md:text-[10px] text-[9px] leading-tight text-yellow-700'>Home page, under construction.</p>
      </div>
    </section>
  )
}

export default Home

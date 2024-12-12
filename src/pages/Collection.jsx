import React from 'react'
import { Frame } from '../components'
import { pixels } from '../data/pixels'

const pixelData = [
  pixels.RubberDucky, pixels.Zenitsu, pixels.Insouke, pixels.NezukoXTanjiro, pixels.DeadpoolXWolverine, pixels.Rengoku
]

const Collection = () => {
  return (
    <section className='p-4'>
      <div className='flex flex-col items-center justify-center mb-4'>
        <h1>Collections</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fugi</p>
      </div>
      <div className='flex justify-center flex-wrap gap-4'>
        {pixelData.map((item, index) => (
          <Frame key={index} variant={'sm'} pixel={item} />
        ))}
      </div>
    </section>
  )
}

export default Collection

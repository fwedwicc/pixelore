import React from 'react'
import Frame from './components/Frame'
import { pixels } from './data/pixels'

const pixelData = [
  pixels.RubberDucky, pixels.Zenitsu, pixels.Insouke, pixels.NezukoXTanjiro, pixels.DeadpoolXWolverine, pixels.Rengoku
]

const App = () => {
  return (
    <div className='p-12'>
      <h5 className='text-3xl text-center font-medium text-amber-900'>Welcome to nowhere</h5>
      <div className='flex justify-center flex-wrap gap-8 pt-12'>
        {pixelData.map((item, index) => (
          <Frame key={index} variant={'sm'} pixel={item} />
        ))}
      </div>
    </div>
  )
}

export default App
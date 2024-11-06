import React from 'react'
import Frame from './components/Frame'
import { pixels } from './data/pixels'

const App = () => {
  return (
    <div className='p-12'>
    <h5 className='text-3xl text-center font-medium text-amber-900'>Welcome to nowhere</h5>
    <div className='flex justify-center flex-wrap gap-8 pt-12'>
      <Frame variant={'sm'} pixel={pixels.RubberDucky} />
      <Frame variant={'sm'} pixel={pixels.Zenitsu} />
      <Frame variant={'sm'} pixel={pixels.Insouke} />
    </div>
    </div>
  )
}

export default App
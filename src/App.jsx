import React from 'react'
import Frame from './components/Frame'
import { pixels } from './data/pixels'

const App = () => {
  return (
    <>
      <Frame variant={'sm'} pixel={pixels.RubberDucky} />
      <Frame variant={'lg'} pixel={pixels.Zenitsu} />
    </>
  )
}

export default App
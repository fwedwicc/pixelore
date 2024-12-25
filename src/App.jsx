import React from 'react'
import { Home, Collection, Credits } from './pages'
import { Header, Nav } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <div className='md:hidden block sticky top-0 z-50 bg-yellow-100 w-full h-3'></div>
      <main className='md:p-6 p-3 pt-0 lg:px-36 md:px-12 px-3 md:h-screen h-auto flex justify-center items-center'>
        <div className='relative h-[95%] w-[100%]'>
          <section className='md:absolute sticky md:top-0 top-3 bg-yellow-100 w-full space-y-[1px]'>
            <Header />
            <Nav />
          </section>
          <section className='md:pt-[204px] pt-0 w-full overflow-y-auto custom-scrollbar h-full bg-yellow-100/60 border-t-0 border-2 border-amber-500/80'>
            <div className=''>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/collection' element={<Collection />} />
                <Route path='/credits' element={<Credits />} />
              </Routes>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper

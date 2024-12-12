import React from 'react'
import { Home, Collection, Credits } from './pages'
import { Header, Nav } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <main className='border border-blue-500 md:p-6 p-3 md:px-36 px-3 md:h-screen h-auto flex justify-center items-center'>
        <div className='relative border border-green-500 h-[95%] w-[100%]'>
          <section className='md:absolute sticky top-0 border border-red-500 bg-yellow-100 w-full'>
            <Header />
            <Nav />
          </section>
          <section className='pt-[11.7rem] w-full overflow-y-auto h-full'>
            <div className='bg-yellow-200/30 rounded-2xl border'>
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
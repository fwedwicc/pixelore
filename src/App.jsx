import React from 'react'
import { Home, Collection, Credits } from './pages'
import { Header, Nav } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <main className='border border-blue-500 md:p-12 p-3 md:px-36 px-3 md:h-screen h-auto flex justify-center items-center'>
        <div className='border border-green-500 h-[95%] w-full'>
          <section className='border border-red-500 sticky bg-yellow-100 top-0'>
            <Header />
            <Nav />
          </section>
          <section className='w-full overflow-y-auto max-h-[92%] bg-green-500/50'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/collection' element={<Collection />} />
              <Route path='/credits' element={<Credits />} />
            </Routes>
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
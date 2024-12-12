import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className='flex gap-1 border border-yellow-700/40 p-1'>
      <Link to={'/'} className={`${pathname === '/' ? 'border-t-[5px] border-l-[5px] border-b-0 border-r-0' : 'border-b-[5px] border-r-[5px]'} inline-flex px-3.5 py-1 bg-yellow-700 text-yellow-100 border-yellow-900`}>
        Home
      </Link>
      <Link to={'/collection'} className={`${pathname === '/collection' ? 'border-t-[5px] border-l-[5px] border-b-0 border-r-0' : 'border-b-[5px] border-r-[5px]'} inline-flex px-3.5 py-1 bg-yellow-700 text-yellow-100 border-yellow-900`}>
        Collection
      </Link>
      <Link to={'/credits'} className={`${pathname === '/credits' ? 'border-t-[5px] border-l-[5px] border-b-0 border-r-0' : 'border-b-[5px] border-r-[5px]'} inline-flex px-3.5 py-1 bg-yellow-700 text-yellow-100 border-yellow-900`}>
        Credits
      </Link>
    </div>
  )
}

export default Nav

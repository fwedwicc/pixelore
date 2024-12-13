import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation();

  const activeLink = 'border-t-[5px] border-l-[5px] border-b-0 border-r-0'
  const defaultLink = 'border-b-[5px] border-r-[5px]'
  const linkStyles = 'inline-flex items-center gap-1 px-3 py-1.5 bg-yellow-700 text-yellow-100 border-yellow-900 pixel-font'

  return (
    <div className='flex gap-1 border border-yellow-700/40 p-1'>
      <Link to={'/'} className={`${pathname === '/' ? activeLink : defaultLink} ${linkStyles}`}>
        Home
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/' ? 'rotate-90' : ''} size-3`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
      <Link to={'/collection'} className={`${pathname === '/collection' ? activeLink : defaultLink} ${linkStyles}`}>
        Collection
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/collection' ? 'rotate-90' : ''} size-3`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
      <Link to={'/credits'} className={`${pathname === '/credits' ? activeLink : defaultLink} ${linkStyles}`}>
        Credits
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/credits' ? 'rotate-90' : ''} size-3`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  )
}

export default Nav

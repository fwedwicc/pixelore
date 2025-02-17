import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
  const { pathname } = useLocation();

  const activeLink = 'border-t-[5px] border-l-[5px] border-b-0 border-r-0'
  const defaultLink = 'border-b-[5px] border-r-[5px] hover:bg-yellow-600 hover:border-yellow-800'
  const linkStyles = 'inline-flex items-center gap-1 md:px-3 px-2 md:py-1.5 py-1 md:text-xs text-[10px] bg-yellow-700 text-yellow-100 border-yellow-900 pixel-font cursor-click'

  return (
    <div className='flex md:justify-start justify-center gap-1 py-1 border-b-2 border-amber-500/80'>
      <Link to={'/'} className={`${pathname === '/' ? activeLink : defaultLink} ${linkStyles}`}>
        Home
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/' ? 'rotate-90' : ''} size-3 cursor-click`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
      <Link to={'/collection'} className={`${pathname === '/collection' ? activeLink : defaultLink} ${linkStyles}`}>
        Collection
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/collection' ? 'rotate-90' : ''} size-3 cursor-click`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
      <Link to={'/credits'} className={`${pathname === '/credits' ? activeLink : defaultLink} ${linkStyles}`}>
        Credits
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`${pathname === '/credits' ? 'rotate-90' : ''} size-3 cursor-click`}>
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  )
}

export default Nav

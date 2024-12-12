import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='space-x-4'>
      <Link to={'/'}>Home</Link>
      <Link to={'/collection'}>Collection</Link>
      <Link to={'/credits'}>Credits</Link>
    </div>
  )
}

export default Nav

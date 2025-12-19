import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <div className='bg-amber-200 '>
      <Link to='/homepage'>homepage</Link>
      <Link to='/products'>products</Link>
      <Link to='/about'>about us</Link>
      <Link to='/contact'>contact us</Link>
    </div>
  )
}

export default Nav

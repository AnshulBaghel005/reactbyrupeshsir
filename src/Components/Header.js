import React from 'react'
import './Header.css'
const Header = (promps) => {
    const userName=promps.user;
  return (
    <div className='top-section'>
        <div>
            <h2>logo</h2>
            <span>{userName}</span>
        </div>
        <div className='nav-bar'>
            <h2>Abont</h2>
            <h2>Login</h2>
            <h2>Sign Up</h2>
            <h2>Account</h2>
        </div>
    </div>
  )
}

export default Header
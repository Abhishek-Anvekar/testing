import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assests/logo_git.png'

const Navbar: React.FC<{}> = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="tabs">
        <Link to="/" className="tab">Home</Link>
        <Link to="/search" className="tab">Search</Link>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import { useLocation } from 'react-router-dom'
import './admin.css'

const Admin = () => {
  const location = useLocation()

  return (
    <div className="loginpage-container">
    <div className='box'>
      <div className="content">
      <h1>Admin Panel</h1>
      <h4> User {location.state.id} is now logged in </h4>
      <p> Admin Page WIP </p>
      <a href="/" className="btn-cta">Log Out</a>
      </div>
            <i></i>
        </div>
        </div>
  )
}

export default Admin
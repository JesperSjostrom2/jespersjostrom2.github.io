import React from 'react'
import './loginpage.css'

const Loginpage = () => {
  return (
    <div className="loginpage-container">
    <div className='box'>
      <form>
        <h2> Sign in </h2>
        <div className="inputBox">
          <input type="text" required="required"/>
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required="required"/>
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
          <a href="#">Forgot Password</a>
          <a href="#">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
    </div>
  )
}

export default Loginpage
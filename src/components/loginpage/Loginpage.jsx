import React from 'react'
import { useState } from 'react'
import axios from "axios"
import './loginpage.css'
import { useNavigate, Link } from 'react-router-dom'

const Loginpage = () => {

  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/login",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/admin",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("This user has not signed up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


  return (
    <div className="loginpage-container">
    <div className='box'>
      <form action="POST">
        <h2> Login </h2>
        <div className="inputBox">
          <input type="email" required="required" onChange={(e)=>{setEmail(e.target.value)}} />
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputBox">
          <input type="password" required="required" onChange={(e)=>{setPassword(e.target.value)}} />
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Forgot Password</a>
          <Link to="/signup">Signup</Link>
        </div>
        <input type="submit" value="Login" onClick={submit} />
      </form>
    </div>
    </div>
  )
}

export default Loginpage
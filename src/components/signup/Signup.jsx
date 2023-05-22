import React, {useState} from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './signup.css'

function Signup() {
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{
          await axios.post("http://localhost:8000/signup",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/admin",{state:{id:email}})
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
        <h2> Sign up </h2>
        <div className="inputBox">
        <input type="email" required="required" onChange={(e) => { setEmail(e.target.value) }}  />
            <span>Username</span>
            <i></i>
        </div>
        <div className="inputBox">
        <input type="password" required="required" onChange={(e) => { setPassword(e.target.value) }} />
            <span>Password</span>
            <i></i>
        </div>
        <div className="links">
        <a href="/login">Login</a>
        </div>
        <input type="submit" value="Sign up" onClick={submit} />
      </form>
    </div>
    </div>
  )
}

export default Signup
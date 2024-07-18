import React from 'react'
import "./login.css"
import {Link} from "react-router-dom"
const Login = () => {
  return (
    <div className='login'>
        <span className="logintitle">
            Login
        </span>
      <form className="loginform">
        <label htmlFor="">Email:</label>
        <input type="text" placeholder='email...' className='logininput'/>
        <label htmlFor="">Password:</label>
        <input type="password" placeholder='password here...' className='logininput' />
        <button className='loginbtn'>Login</button>
      </form>
      <button className='loginregisterbtn'><Link to="/register" style={{textDecoration:"none",color:"inherit"}}>Register</Link></button>
    </div>
  )
}

export default Login

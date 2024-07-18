import React from 'react'
import "./Register.css";
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
    <span className="registertitle">
        Register
    </span>
  <form className="registerform">
    <label htmlFor="">Email:</label>
    <input type="text" placeholder='email...' className='registerinput'/>
    <label htmlFor="">Username:</label>
    <input type="text" placeholder='username...' className='registerinput'/>
    <label htmlFor="">Password:</label>
    <input type="password" placeholder='password here...' className='registerinput' />
    <button className='registerbtn'>Register</button>
  </form>
  <button className='registerloginbtn'><Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link></button>
</div>
  )
}

export default Register

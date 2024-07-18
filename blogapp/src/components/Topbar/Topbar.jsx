import React from 'react'
import "./Topbar.css";
import {Link} from "react-router-dom"
const Topbar = () => {
  const user=false;
  return (
    <div className='top'>
      <div className="topleft">
      <i className="top-icon fab fa-facebook"></i>
      <i className="top-icon fa-brands fa-square-x-twitter"></i>
      <i className="top-icon fa-solid fa-location-dot"></i>
      <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className='toplist'>
            <li className='toplist-item'>
              <Link to="/"style={{textDecoration:"none",color:"inherit"}}>Home</Link></li>
            <li className='toplist-item'><Link to="#"style={{textDecoration:"none",color:"inherit"}}>About</Link></li>
            <li className='toplist-item'><Link to="#"style={{textDecoration:"none",color:"inherit"}}>Contact</Link></li>
            <li className='toplist-item'><Link to="/write"style={{textDecoration:"none",color:"inherit"}}>Write</Link></li>
            <li className='toplist-item'>{user&&"logout"}</li>

        </ul>
      </div>
      <div className="topright">
        {user?(<>
          <img  className="top-img" src="https://avatar.iran.liara.run/public/9"/>
          <i className="top-search fa-solid fa-magnifying-glass"></i>
          </>):(<ul className='toplist'>
            <li className='toplist-item'><Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link></li>
            <li className='toplist-item'><Link to="/register" style={{textDecoration:"none",color:"inherit"}}>Register</Link></li>

          </ul>
            
          )}
       
      </div>

    </div>
  )
}

export default Topbar

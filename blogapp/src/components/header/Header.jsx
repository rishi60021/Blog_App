import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <div className="headertitle">
          <span className='headertitlesm'>React & Node</span>
          <span className='headertitlelg'>Blog</span>
        </div>
      <img  src="https://images.pexels.com/photos/3849373/pexels-photo-3849373.jpeg?auto=compress&cs=tinysrgb&w=600" className='headerimg'/>
    </div>
  )
}

export default Header

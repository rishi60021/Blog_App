import React from 'react'
import "./Single.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Singlepost from '../../components/singlepost/Singlepost'
const Single = () => {
  return (
    <div className='single'>
        <Singlepost/>
      <Sidebar/>
      
    </div>
  )
}

export default Single

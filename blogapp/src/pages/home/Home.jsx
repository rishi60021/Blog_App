import React from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/postss/Posts'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
       <Sidebar/>
       
     
       </div>
    </>
    
  )
}

export default Home

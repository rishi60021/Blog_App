import React from 'react'
import "./Settings.css"
import Sidebar from '../../components/sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingswrapper">
            <div className="settingstitle">
                <span className="settingsupdatetitle">Update your Account</span>
                <span className="settingsdeletetitle">Delete your Account</span>
            </div>
            <forms className="settingsform">
                <label>Profile pic</label>
                <div className="settingspp">
                    <img src="https://avatar.iran.liara.run/public/9"/>
                    <label htmlFor='fileinput'>
                    <i class="settingsprofilepic fa-solid fa-user"></i>

                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}}/>
                </div>
                <label>Username:</label>
                <input type="text" placeholder='Enter your username..'></input>
                <label>Email:</label>
                <input type="email" placeholder='Enter your email..'></input>
                <label>Password:</label>
                <input type="password"></input>
                <button className="settingsSubmit">Update</button>
            </forms>

        </div>
        <Sidebar/>
      
    </div>
  )
}

export default Settings

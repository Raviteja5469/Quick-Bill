import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './CSS/FeaturePage.css'

const FeaturePage = () => {
  return (
    <div className='featurepage'>
        <div className="sidebar-container">
            <Sidebar />
        </div>
        <div className='feature-container'>
            outlet is here
            <Outlet />
        </div>
    </div>
  )
}

export default FeaturePage

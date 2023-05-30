import React from 'react'
import './Sidebar.scss'
import FeeLogo from "../../assets/fee-logo.png"

import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiOutlineAdjustmentsVertical, HiOutlineChartPie, HiOutlineUser, HiOutlineBellAlert  } from "react-icons/hi2"


function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='menus-container'>
        <div className='labels'>
          <p className='sidebar-icon'><HiOutlineAdjustmentsVertical/></p>
          <p className='sidebar-menus'> Evento</p>
        </div>
        <div className='labels'>
          <p className='sidebar-icon'><HiOutlineChartPie/></p>
          <p className='sidebar-menus'> Dashboard</p>
        </div>
        <div className='labels'>
          <p className='sidebar-icon'><HiOutlineUser/></p>
          <p className='sidebar-menus'> Asistentes</p>
        </div>
        <div className='labels'>
          <p className='sidebar-icon'><HiOutlineBellAlert/></p>
          <p className='sidebar-menus'> Notificaciones</p>
        </div>
      </div>
      

      <div className='sidebar-media'>
        <div className='media-content'>
          <p>Powered By</p>
          <img src={FeeLogo} alt="" />
          <div className='social-icons'>
            <a href="https://www.linkedin.com/company/feending/" target="_blank"><BsLinkedin/></a>
            <a href="https://www.instagram.com/feending_com/" target="_blank"><BsInstagram/></a>
            <a href="https://twitter.com/feending" target="_blank"><BsTwitter/></a>
            <a href="https://www.facebook.com/Feending-Group-107537795383359" target="_blank"><BsFacebook/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar


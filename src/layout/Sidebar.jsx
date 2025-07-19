import React from 'react'
import
{BsCart3 ,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,
  BsMenuButtonWideFill,BsFillGearFill
}
from 'react-icons/bs'

export default function sidebar() {
  return (
   <aside id='sidebar'>
    <div className='sidebar-title'>
      <div className='side-brand'>
        <BsMenuButtonWideFill className='icon_header'/>InterHub
        <span className='icons close_icon'>X</span>
      </div>
      
    </div>
    <ul className='sidebar_list'>
      <li className='sidebar-item-list'>
        <a href="">
          <BsGrid1X2Fill className='icon'/>Dashboard
        </a>
      </li>
       <li className='sidebar-item-list'>
        <a href="">
          <BsPeopleFill className='icon'/>Candidate
        </a>
      </li>
       <li className='sidebar-item-list'>
        <a href="">
          <BsPeopleFill className='icon'/>Login
        </a>
      </li>
       <li className='sidebar-item-list'>
        <a href="">
          <BsListCheck className='icon'/>Report
        </a>
      </li>
       <li className='sidebar-item-list'>
        <a href="">
          <BsFillGrid3X3GapFill className='icon'/>Internship
        </a>
      </li>
       <li className='sidebar-item-list'>
        <a href="">
          <BsMenuButtonWideFill className='icon'/>Setting
        </a>
      </li>
      
    </ul>
   </aside>
  )
}

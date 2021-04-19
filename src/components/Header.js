import React from 'react';
import Logo from '../Logo';
import '../styles/header.css';


export default function Header(props) {
  return (
    <header className='d-flex align-items-center justify-content-between'>
      <div className='companyLogo align-items-center d-flex'>
        <Logo />
        <span>ribbon</span>
      </div>
      <div className='d-flex'>
        <div className='icon' id='user'>
          <i className='fa fa-user-circle'></i>
        </div>
        <div className='icon' id='notification'>
          <i className='fa fa-bell'></i>
        </div>
      </div>
    </header>
  )
}
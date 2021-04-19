import React from 'react';
import '../styles/footer.css';

function Footer() {
  const [activeLink, setActiveLink] = React.useState('home');
  function clickHandler(e) {
    e.preventDefault();
    setActiveLink(e.currentTarget.textContent.toLowerCase());
  }
  return (
    <footer class='d-flex'>
      <a className={`${activeLink === 'home' ? 'active' : ''} footer_router`} href='null' onClick={clickHandler}>
        <i className='fa fa-home'></i>
        <span className='small'>Home</span>
      </a>
      <a className={`${activeLink === 'activities' ? 'active' : ''} footer_router`} href='null' onClick={clickHandler}>
        <i className='fa fa-calendar-alt'></i>
        <span className='small'>Activities</span>
      </a>
      <a className={`${activeLink === 'wallet' ? 'active' : ''} footer_router`} href='null' onClick={clickHandler}>
        <i className='fa fa-money-check'></i>
        <span className='small'>Wallet</span>
      </a>
      <a className={`${activeLink === 'market' ? 'active' : ''} footer_router`} href='null' onClick={clickHandler}>
        <i className='fa fa-store-alt'></i>
        <span className='small'>Market</span>
      </a>
      <a className={`${activeLink === 'earn' ? 'active' : ''} footer_router`} href='null' onClick={clickHandler}>
        <i className='fa fa-gift'></i>
        <span className='small'>Earn</span>
      </a>
    </footer>
  )
}

export default Footer

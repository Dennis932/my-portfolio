import React from 'react'
import './header.css';
import Cta from './Cta';

import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Dennis</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className='me'>
          <h1>FRONTEND DEVELOPER</h1>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
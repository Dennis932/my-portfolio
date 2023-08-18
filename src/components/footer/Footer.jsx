import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Dennis</a>
      <ul className='permalinks'>
        <li><a href='#home'>home</a></li>
        <li><a href='#about'>about</a></li>
        <li><a href='#experience'>experience</a></li>
        <li><a href='#services'>services</a></li>
        <li><a href='#portfolio'>portfolio</a></li>
        <li><a href='#testimonials'>testimonials</a></li>
        <li><a href='#contact'>contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twiter.com'><ImTwitter/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; dennisramsy@2023.allrightsreserved</small>
      </div>
    </footer>
  )
}

export default Footer
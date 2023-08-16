import React from 'react'
import './about.css';
import me from '../../assets/me-about.jpg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt='About Me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>300+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Completed Projects</h5>
              <small>250+ Projects</small>
            </article>
          </div>
          <p>
            lorem ipghier gugvc gfuguwe bhiuhg mhftrhehy4t huhyf848grb nvfioniorvf nvfhiehufh ivhruihgf
            hyusfdyuhfiodiohcv bfugiedgugfyufyfr.
          </p>
          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
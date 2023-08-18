import React from 'react'
import './about.css';
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>2+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>100+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Completed Projects</h5>
              <small>98+ Projects</small>
            </article>
          </div>
          <p> 
            Aspiring frontend developer with a solid grasp of HTML, CSS, JavaScript, React.js, TypeScript, and C/C++. 
            Passionate about crafting user-friendly interfaces and enhancing user experiences. 
            Committed to continuous learning, eager to contribute to meaningful projects, and excited to evolve within the dynamic world of web development. 
            Connect with me on LinkedIn and explore my GitHub repository for a closer look at my journey and work. Let's build together!
          </p>
          <a href='#contact' className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
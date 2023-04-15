import React from 'react'
import './About.css'
import Aditya from './aditya.jpg'
import Kalyan from './kalyan.jpg'
import Amog from './amog.jpg'
const About = () => {
  return (
    <div>
      <header className='headerrAbout'>
      <h1 className='Abouth1'>About Us</h1>
    </header>
    <main className='Aboutmain'>
      <section className='AboutSection'>
        <h2 className='Abouth2'>Our Story</h2>
        <p className='Aboutp'>Kvss Pavan Aditya, Kalyan Kumar, and Amogh Varshith were all friends from college who had studied engineering together. they all pursued careers in the space management, and fate brought them together again when they were hired to work on a top-secret space management project.
        Three engineering friends reunited for a space project. They designed a spacecraft for deep-space exploration, working tirelessly and having fun together. Their hard work paid off with a successful mission, and they celebrated as friends, excited for their next project.
</p>
      </section>
      <section className='AboutSection'>
        <h2 className='Abouth2'>Our Team</h2>
        <ul className='Aboutul'>
          <li className='Aboutli'>
            <img className="Aboutimg"src={Aditya} alt="John Doe"/>
            <h3 className='Abouth3'>KVSS PAVAN ADITYA</h3>
            <p className='Aboutp'>LEADER</p>
          </li>
          <li className='Aboutli'>
            <img className='Aboutimg' src={Kalyan} alt="Jane Smith"/>
            <h3 className='Abouth3'>KALYAN KUMAR</h3>
            <p className='Aboutp'>MEMBER</p>
          </li>
          <li className='Aboutli'>
            <img className='Aboutimg' src={Amog} alt="Bob Johnson"/>
            <h3 className='Abouth3'>AMOG VARSHITH</h3>
            <p>MEMBER</p>
          </li>
        </ul>
      </section>
    </main>
    </div>
  )
}

export default About

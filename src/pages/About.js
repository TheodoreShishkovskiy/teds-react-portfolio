import React from 'react'
import Profile from '../assets/images/profile.png';

function About() {
  return(
    <section className='title'>
      <h1 class="name">About: Ted Shishkovksiy</h1>
      <hr></hr>

      <div className='row justify-content-center'>
        <div className='col-10' id='about-me'>
          <img class="mb-5" src={Profile} alt="Ted Shishkovskiy"/>
          <p>
            Hi my name is Ted Shishkovksiy!
            I am currently finishing up the UNCC Full Stack Coding Bootcamp.
            This is just the start of a journey as a future software developer.
          </p>
        </div>
      </div>
    </section>
  )
}



export default About;
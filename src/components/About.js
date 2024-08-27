import React from 'react'
import { User } from './User';
import { Userr } from './User';

const About = () => {
  return (
    <div className="grid place-content-center">
      <h1 className='font-bold'>About</h1>
      <p>This is an about page.</p>
      <User name={"NS🏍️ VARUN"} age={"Twenty Two"}/>
      <Userr name={"NS🚀 200"} mileage={"Thirty Three"}/>
    </div>
  )
}

export default About;

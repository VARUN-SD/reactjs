import React from 'react'
import { User } from './User';
import { Userr } from './User';
import UserContext from '../utils/UserContext';

const About = () => {
  return (
    <div className="grid place-content-center">
      <h1 className='font-bold'>About</h1>
      <UserContext.Consumer>
        {({loggedInUser}) => (<h1 className='text-xl font-semibold'>{loggedInUser}</h1>)}
      </UserContext.Consumer>
      <p>This is an about page.</p>
      <User name={"NS🏍️ VARUN"} age={"Twenty Two"}/>
      <Userr name={"NS🚀 200"} mileage={"Thirty Three"}/>
    </div>
  )
}

export default About;

import React from 'react'
import Splash from '../components/Splash'

const About = () => {
  const content = (
    <div>
      <p>
        React (or any another popular Front-end framework) was sorely missing from my
        list of skills. So this project is an attempt to remedy that.
      </p>
      <p>
        I had often seen the RealWorld repo pop up on GitHub and thought it would be
        a good project to get going on. However, in an effort to reduce the temptation
        of looking at their already complete React implementation I decided to
        use an entirely new UI design.
      </p>
      <p>
        As the backend being used is open to everyone for development purposes don't
        expect to find great content.
      </p>
    </div>
  )

  return (
    <div>
      <Splash title='About'>
        {content}
      </Splash>
    </div>
  )
}
export default About

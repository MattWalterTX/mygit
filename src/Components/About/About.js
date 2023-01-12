import * as React from 'react';
import Link from '@mui/material/Link';
import './About.css'

const About = () => {
    return (
      <div className='info-container'>
          <h2 className='about-title'>About myGit</h2>
          <article className='info-sub-container'>
            <h3 className='info-title'>Dad Jokes on Demand</h3>
            <p className='about-myGit'>
              Welcome to our dad joke application, DOKES! We are a team of three software developers who are passionate about bringing joy and laughter to people's lives through the power of dad jokes. Our goal is to create a platform that not only delivers a never-ending supply of terrible jokes, but also (planned future extensions) allows users to contribute their own jokes and vote on their favorites. Whether you're a fan of classic groaners or you have a knack for crafting your own terrible puns, there's something for everyone in our dad joke application. So come on in and join the fun!
            </p>
            {/* <p className='about-myGit'>
              <Link id='matt' color="#9966cc" href="https://github.com/MattWalterTX" underline="none"> Matt</Link>
              <Link id='walter' color="#9966cc" href="https://www.linkedin.com/in/matt-walter-67b810246/" underline="none"> Walter</Link>
              . Feel free to explore my Github (first name) and LinkedIn (last name) via these links!
            </p> */}
            <p className='about-myGit'>(And for Devs, the footer contains a repo link)</p>
          </article>
        </div>
    )
  }

export default About;
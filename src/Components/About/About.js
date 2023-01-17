import React from 'react';
import Link from '@mui/material/Link';
import './About.css'

const About = () => {
    return (
      <div className='info-container'>
        <h2 className='about-title'>About myGit</h2>
        <article className='info-container'>
          <h3 className='about-title'>myGit: the Hubbening</h3>
          <p className='about-myGit'>
            myGit: the Hubbening is an application designed to view cards from the newest set from Magic: the Gathering. On load the cards of all 5 colors will load in. They can be further sorted down by color selection, clicked to view the card and added to a collection. 
          </p>
          <p className='about-us'>
            Feel free to explore my
            <Link id='matt' color="#9966cc" href="https://github.com/MattWalterTX" underline="none"> Github </Link>
            and 
            <Link id='walter' color="#9966cc" href="https://www.linkedin.com/in/matt-walter-67b810246/" underline="none"> LinkedIn </Link>
            via these links.
          </p>
          <p>For devs, there is a repo link in the footer!</p>
        </article>
      </div>
  )
}

export default About;
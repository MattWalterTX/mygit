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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut pulvinar turpis, nec auctor sapien. In metus purus, dictum in ante congue, sollicitudin aliquet leo. Donec in sagittis nunc, ac mattis nulla. Vestibulum vitae libero vel turpis hendrerit porttitor. Quisque in viverra enim. Aenean neque mauris, volutpat a justo a, ultrices sollicitudin purus. Fusce auctor metus sit amet fringilla aliquam. Mauris a elementum dolor. Fusce egestas dictum rhoncus. Aliquam dapibus nunc ac mi hendrerit luctus. Ut neque justo, fringilla eget tincidunt sed, condimentum quis massa.
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
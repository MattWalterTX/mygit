import React from 'react';
import Link from '@mui/material/Link';
import './About.css'

const Prompt = () => {
    return (
      <div className='info-container'>
          <h2 className='prompt-title'>Oh No!</h2>
          <article className='info-sub-container'>
            <p className='prompt'>
              You have not yet added any cards to your collection... <Link color="#9966cc" href="/">SAVE SOME</Link>!
            </p>
          </article>
        </div>
    )
  }

export default Prompt;
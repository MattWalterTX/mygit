import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


const Whoopsie = () => {
    return (
      <div>
        <h2>You don't have any cards in your collection yet</h2>
        <Button variant="contained" component={Link} to="/" sx={() => ({
          backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '35%' })}>
            Go Home
        </Button>
      </div>
    )
  }


export default Whoopsie;
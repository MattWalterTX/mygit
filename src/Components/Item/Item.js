import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

const Item = ({ jokes, addJoke }) => {
  
  return (
    <div className='card-container'>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography>May not need stack. Render card image on top, details below, remember to add fav Fn</Typography>
        <Button>Fav somehow</Button>
      </Stack>
    </div>
  );
}

export default Item; 

// add proptypes!!
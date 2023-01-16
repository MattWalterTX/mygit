import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../../theme';
import './Form.css'

const Form = ({ sort }) => {

  function handleChange (event) {
    sort(event.target.value)
  }

  return (
    <Stack direction="row" spacing={2} justifyContent="space-evenly" className='form' >
      <select name='color' onChange={(event) => handleChange(event)}>
        <option defaultValue="cards" value="cards">All</option>
        <option value="blacks">B - Black</option>
        <option value="blues">U - Blue</option>
        <option value="greens">G - Green</option>
        <option value="reds">R - Red</option>
        <option value="whites">W - White</option>
      </select>
    </Stack>
  )
}

export default Form
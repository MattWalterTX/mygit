import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../../theme';

import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      color: 'all'
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Stack direction="row" spacing={2} justifyContent="space-evenly" className='form' >
        <select name='color' value={this.state.color} onChange={this.handleChange}>
          <option defaultValue="All">All</option>
          <option value="black">B - Black</option>
          <option value="blue">U - Blue</option>
          <option value="green">G - Green</option>
          <option value="red">R - Red</option>
          <option value="white">W - White</option>
        </select>
        <Button variant="contained" sx={() => ({
          backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '35%' })}>
            Sort Cards
        </Button>
      </Stack>
    )
  }
}

export default Form
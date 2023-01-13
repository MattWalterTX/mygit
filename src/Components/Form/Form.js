import React, { Component } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import theme from '../../theme';

import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      color: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <Stack direction="row" spacing={2} justifyContent="space-evenly" className='form' >
        <select name='color' value={this.state.color} onChange={this.handleChange}>
          <option defaultValue="null">Select a Color</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="multicolored">Multicolored</option>
        </select>
        <Button variant="contained" sx={(theme) => ({
              backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '35%' })}>Get Cards</Button>
      </Stack>
    )
  }
}

export default Form
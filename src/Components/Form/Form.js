import React, { Component } from 'react'
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
      <form className='form'>
        <select name='color' value={this.state.color} onChange={this.handleChange}>
          <option defaultValue="null">Select a Color</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>

        <button >Get Cards</button>
      </form>
    )
  }
}

export default Form
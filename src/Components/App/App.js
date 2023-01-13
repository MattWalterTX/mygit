import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import About from '../About/About';
import Home from '../Home/Home'
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import BadURL from '../BadURL/BadURL'
import theme from '../../theme';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './App.css';

const Copyright = () => {
  return (
    <Typography variant="body2" color="#FFCB5F" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/thomedpete/Dokes">
        Matt Walter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class  App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(response => response.json())
    .then(data => console.log(data))
}

  // componentDidMount() {
  //    let setBRO = []
  //   fetch('https://api.magicthegathering.io/v1/cards?page=109')
  //   .then(response => response.json())
  //   .then(data => console.log('109', data))
  //   fetch('https://api.magicthegathering.io/v1/cards?page=110')
  //   .then(response => response.json())
  //   .then(data => console.log('110', data))
  //   fetch('https://api.magicthegathering.io/v1/cards?page=111')
  //   .then(response => response.json())
  //   .then(data => console.log('111', data))
  //   fetch('https://api.magicthegathering.io/v1/cards?page=112')
  //   .then(response => response.json())
  //   .then(data => console.log('112', data))
  //   fetch('https://api.magicthegathering.io/v1/cards?page=113')
  //   .then(response => response.json())
  //   .then(data => console.log('113', data))
  // }

  render() {
    return (
      // can remove cssbaseline after theme implementation
      <div className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header/>
          <Routes>
            <Route path='/' element={(<Home />)} />
            <Route path='/collection' element={(<Collection />)} />
            <Route path='/about' element={(<About />)} />
            <Route path='/*' element={(<BadURL />)} />
          </Routes>

          <Box sx={{ bgcolor: '#000', p: 2, color: '#FFCB5F' }} component="footer">
          <Copyright />
            <Typography
              variant="subtitle1"
              align="center"
              color="#FFCB5F"
              component="p"
            >
            </Typography>
          </Box>


        </CssBaseline>
        </ThemeProvider>
      </div>
    )
  }
}

export default App;

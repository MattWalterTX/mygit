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
// import ThemeProvider from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import './App.css';
import Item from '../Item/Item';

const Copyright = () => {
  return (
    <Typography variant="body2" color="#FFCB5F" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/MattWalterTX/mygit">
        Matt Walter
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      collection: []
    }
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
    .then(response => response.json())
    .then(data => console.log(data))
}

  render() {
    return (
      // can remove cssbaseline after theme creation
      <div>
        {/* <ThemeProvider> */}
          <CssBaseline />
            <div className='App'>
              <Header/>
              <Routes>
                <Route path='/' element={(<Home />)} />
                <Route path='/collection' element={(<Collection />)} />
                <Route path='/about' element={(<About />)} />
                <Route path='/*' element={(<BadURL />)} />
              </Routes>
            </div>

          <Box sx={{ bgcolor: '#000', p: 2, color: '#FFCB5F' }} component="footer">
            <Copyright />
          </Box>
        {/* </ThemeProvider> */}
      </div>
    )
  }
}

export default App;

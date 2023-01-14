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
import Button from '@mui/material/Button';

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

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      error: null,
      selected: null
    }
  }

  getData = (color) => {
    return fetch(`https://api.magicthegathering.io/v1/cards?set=BRO&colors=${color}`)
    .then(response => response.json())
    .then(data => data.cards)
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })
  }

  componentDidMount() {
    Promise.all([this.getData('W'), this.getData('B'), this.getData('U'), this.getData('R'), this.getData('G')])
    .then(data => {
      const allFetched = [...data[0], ...data[1], ...data[2], ...data[3], ...data[4]];
      console.log(allFetched);
      this.setState({ cards: allFetched });
    })
  } 

  render() {
    return (
      // can remove cssbaseline after theme implementation
      <div className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header/>
          <Routes>
            <Route path='/' element={(<Home cards={this.state.cards}/>)} />
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

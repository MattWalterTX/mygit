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
import { BedroomParentSharp, ControlCameraSharp } from '@mui/icons-material';
import { wait } from '@testing-library/user-event/dist/utils';

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

let whites = [];
let blacks = [];
let blues = [];
let reds = [];
let greens = [];
// let allFetched = [...whites, ...blacks, ...blues, ...reds, ...greens]
let allFetched = []

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
      error: null,
      selected: null
    }
  }
  
  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards?set=BRO&colors=W')
    .then(response => response.json())
    .then(data => whites.push(data.cards))
    .then(console.log('AF', allFetched, 'W', whites))
    // .then(data => this.setState({ cards: data.cards }))
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })

    fetch('https://api.magicthegathering.io/v1/cards?set=BRO&colors=B')
    .then(response => response.json())
    .then(data => blacks.push(data.cards))
    // .then(data => allFetched.push(data.cards))


    // .then(data =>  this.setState({ cards: [...this.state.cards, data.cards ] }))
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })


    fetch('https://api.magicthegathering.io/v1/cards?set=BRO&colors=U')
    .then(response => response.json())
    .then(data => blues.push(data.cards))
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })


    fetch('https://api.magicthegathering.io/v1/cards?set=BRO&colors=R')
    .then(response => response.json())
    .then(data => reds.push(data.cards))
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })


    fetch('https://api.magicthegathering.io/v1/cards?set=BRO&colors=G')
    .then(response => response.json())
    .then(data => greens.push(data.cards))
    .then(data => console.log('AF', allFetched))
    .catch((error) => {
      this.setState({ error: 'The server is experiencing some issues please try  again later'})
    })
    .then(data => console.log(whites, 'w', blues, 'u', blacks, 'b', reds, 'r', greens, 'g')) // remove log
    .then(data => allFetched = [...whites[0], ...blacks[0], ...blues[0], ...reds[0], ...greens[0]])
    // whites.cards.forEach(card => allFetched.push(card))
    .then(data => this.setState({ cards: allFetched }))
  } 
// let allFetched = [...whites, ...blacks, ...blues, ...reds, ...greens]

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

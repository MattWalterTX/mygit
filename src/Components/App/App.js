import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import About from '../About/About';
import Home from '../Home/Home'
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import BadURL from '../BadURL/BadURL'
import MTGCard from '../MTGCard/MTGCard'
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
      cards: [],
      error: null,
      selected: null,
      collection: []
    }
  }

  // removeDupes = (cards) => {
  //   return cards.filter(card => )
  // }

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
      let noDupes = allFetched.filter( (ele, ind) => ind === allFetched.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))
      this.setState({ cards: noDupes });
    })
  } 

  addCard = (newCard) => {
    if(!this.state.collection.some(item => item.id === newCard.id))
      this.setState({ collection: [...this.state.collection, newCard]})
  }

  removeCard = (card) => {
    console.log('delete this')
  }

  showMore = (showCard) => {
    console.log(this.state.cards.find( card => card.id === showCard.id))
    this.setState({ selected: [this.state.cards.find( card => card.id === showCard.id)]})
  }

  render() {
    return (
      // can remove cssbaseline after theme implementation
      <div className="App">
        <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header/>


          <Routes>
            <Route path='/' element={(<Home cards={this.state.cards} addCard={this.addCard} removeCard={this.removeCard} showMore={this.showMore} />)} />
            <Route path='/collection' element={(<Collection collection={this.collection} addCard={this.addCard} removeCard={this.removeCard}/>)} />
            <Route path="/:id" element={<MTGCard state={this.state.selected} />} />
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

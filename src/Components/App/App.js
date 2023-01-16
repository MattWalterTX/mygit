import React, { Component } from 'react';
import { Routes, Route, useParams } from 'react-router-dom'
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
      collection: [],
      whites: [],
      blues: [],
      blacks: [],
      reds: [],
      greens: [],
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
      let noDupes = allFetched.filter( (ele, ind) => ind === allFetched.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))
      this.setState({ cards: noDupes });
      this.setState({ whites: data[0] });
      this.setState({ blacks: data[2] });
      this.setState({ blues: data[1] });
      this.setState({ reds: data[3] });
      this.setState({ greens: data[4] });
    })
  } 

  addCard = (newCard) => {
    if(!this.state.collection.some(item => item.id === newCard.id))
      this.setState({ collection: [...this.state.collection, newCard]})
  }

  removeCard = (event, card) => {
    const update = this.state.collection.filter(item => item.id !== event.id)
    this.setState({ collection: update})
  }

  showMore = (showCard) => {
    this.setState({ selected: this.state.cards.find( card => card.id === showCard.id) })
  }

  sort = () => {
    let { selection } = useParams()
  }

  // sort = () => {
    // to hold the dropdown state (all or color) so we can pass this dynamically into the Homes
        // maybe have to hold this as a var instead of a static Fn? try if this fails.
    // change Form default value from all to cards, or rework everything with cards
  // }



                  // <Route path='/' element={(<Home cards={`this.state.${sort}`} showMore={this.showMore}  />)} />
                        // should be able to render home page w/ sort result {default value is cards/ all}

  render() {
    return (
      // can remove cssbaseline after theme implementation
      <div className="App">
        <ThemeProvider theme={theme}>
          <Header/>


          <Routes>
            <Route path='/' element={(<Home cards={this.state.cards} showMore={this.showMore} />)} />
            <Route path='/collection' element={(<Collection collection={this.state.collection}  removeCard={this.removeCard}/> )} />
            <Route exact path="/:id" element={<MTGCard card={this.state.selected} addCard={this.addCard} />} />
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


        </ThemeProvider>
      </div>
    )
  }
}

export default App;

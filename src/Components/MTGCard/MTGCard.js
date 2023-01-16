import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import About from '../About/About';
import Home from '../Home/Home'
import Header from '../Header/Header';
import Collection from '../Collection/Collection';
import BadURL from '../BadURL/BadURL'
import theme from '../../theme';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { spacing } from '@mui/system';

const MTGCard = ({ card, addCard }) => {




  return (
    <div>
      {!card ? <BadURL /> : 
      <Card sx={{ minWidth: 275, pb: '5%'}} >
        <CardContent>
          <img src={card.imageUrl} alt={card}></img>
          <CardActions>
            </CardActions>
        </CardContent>
        <Stack direction="row" spacing={2} justifyContent="center" >
          <Button variant="contained" component={Link} to="/" sx={() => ({
            backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '35%' })}>
              Go Home
          </Button>
          <Button variant="contained" onClick={() => addCard(card)} sx={() => ({
            backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '35%' })}>
              Collect
          </Button>
        </Stack>
      </Card>
      }
    </div>
  )
}

export default MTGCard
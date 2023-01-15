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
import Button from '@mui/material/Button';

const MTGCard = ({ card }) => {
  return (
    <div>card</div>
  )
}

export default MTGCard
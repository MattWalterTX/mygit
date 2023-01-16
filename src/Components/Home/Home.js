import React, { Component, useRef } from 'react'
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Form from '../Form/Form'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = ({ cards, showMore }) => {
  function createData(
    name: string,
    color: string,
    cmc: number,
    ) {
    return { name, color, cmc};
  }

  const rows = cards.map(card => {
    return <TableRow key={card.id}>
      <TableCell>
        <Button variant="contained" state={card} component={Link} to={`/${card.id}`} onClick={() => showMore(card)} sx={() => ({
          backgroundColor: '#0E86D4', color: 'white', fontStyle: 'italic', width: '70%' })}>
            {card.name}
        </Button>
      </TableCell>
      <TableCell align="right">{card.colors}</TableCell>
      <TableCell align="right">{card.cmc}</TableCell>
    </TableRow>
  })
    
  return (
    <div>
      <h2>Set: The Brothers' War</h2>
      <h4>Pick a color to sort.</h4>
      <h4>Select a card to view more details.</h4>
      <Form />
      {!cards.length && <h2>Fetching Card Info</h2>}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Color</TableCell>
              <TableCell align="right">CMC</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
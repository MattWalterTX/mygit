import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Whoopsie from '../Whoopsie/Whoopsie'

const Collection = ({ collection, removeCard }) => { // bring down collection prop from state
  // const cardCollection = collection.map((card) => {
  //   return (
  //     <div> table item of card name, w/ color and CMC</div>
  //   )
  // })

  function createData(
    name: string,
    color: string,
    cmc: number
    ) {
    return { name, color, cmc };
  }

  const rows = collection.map(card => {
    return <TableRow key={card.id}>
      <TableCell>
        <Button variant="contained" state={card} onClick={() => removeCard(card)} sx={() => ({
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
      <h3>Your Acquisitions</h3>
      <h4>Select a card to REMOVE from your collection</h4>
      {!collection.length && <Whoopsie />}
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

export default Collection
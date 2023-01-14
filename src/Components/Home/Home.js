import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component, useRef } from 'react'
import Form from '../Form/Form'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Home = ({ cards }) => {
  function createData(
    name: string,
    color: string,
    cmc: number
    ) {
    return { name, color, cmc };
  }


  // remove after connecting data
  const rows = [
    createData("Corrupt", "Black", 6),
    createData("Titania, Voice of Gaea // Titania, Gaea Incarnate", "Green", 3),
    createData("Junkyard Genius", "Black, Red", 3),
    createData("Recommission", "White", 2),
    createData("Powerstone Fracture", "Black", 2),
    createData("Draconic Destiny", "Red", 3),
    createData("Urza, Lord Protector // Urza, Planeswalker", "Blue, White", 3),
    createData("Calamity's Wake", "White", 2),
    createData("Visions of Phyrexia", "Red", 4),
    createData("The Temporal Anchor", "Blue", 6),
  ];

  return (
    <div>
      <h2>Set: The Brothers' War</h2>
      <h4>Pick a color to sort.</h4>
      <h4>Click a card's name to view more details.</h4>
      <Form></Form>
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.cmc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home
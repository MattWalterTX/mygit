import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Collection = ({ collection, addCard, removeCard }) => { // bring down collection prop from state
  // const cardCollection = collection.map((card) => {
  //   return (
  //     <div> table item of card name, w/ color and qty</div>
  //   )
  // })

  function createData(
    name: string,
    color: string,
    qty: number
    ) {
    return { name, color, qty };
  }

    // remove after connecting data
  const rows = [
    createData("Recommission", "White", 2),
    createData("Junkyard Genius", "Black, Red", 3),
    createData("Powerstone Fracture", "Black", 2),
    createData("Titania, Voice of Gaea // Titania, Gaea Incarnate", "Green", 3),
    createData("Visions of Phyrexia", "Red", 4),
    createData("Draconic Destiny", "Red", 3),
    createData("The Temporal Anchor", "Blue", 6),
    createData("Corrupt", "Black", 6),
    createData("Urza, Lord Protector // Urza, Planeswalker", "Blue, White", 3),
    createData("Calamity's Wake", "White", 2),
  ];

  return (
    <div>
      <h3>Your Acquisitions</h3>
      <h4>Click a card's name to view more details.</h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Color</TableCell>
                <TableCell align="right">Qty</TableCell>
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
                  <TableCell align="right">{row.qty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Collection
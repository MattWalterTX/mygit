import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from '../../theme';
import './Header.css'


const options = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/collection',
    text: 'Collection'
  },
  {
    path: '/about',
    text: 'About'
  }
];

const ITEM_HEIGHT = 48;

const Header = () => {
  // let titleText = useRef(null)
  // let logoIcon = useRef(null)
  // let tl = useRef(null)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className='header-container' sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='toolBar' disableGutters sx={(theme) => ({
              backgroundColor: '#0E86D4' })} >
          <IconButton
            aria-label="more"
            className='icon-button'
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            id="long-menu"
            className='menuButton'
            MenuListProps={{ 'aria-labelledby': 'long-button', }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
                backgroundColor: '#000000',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem id={option.text} key={option.path} selected={option === 'Pyxis'} onClick={handleClose}>
                <Link className='little-link' to={option.path}>{option.text}</Link>
              </MenuItem>
            ))}
          </Menu>
          <Typography >
            myGit: the Hubbening
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header
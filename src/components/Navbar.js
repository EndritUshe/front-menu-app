import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"blueviolet" }} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOP SCRIPT
          </Typography>
          <Link 
          to="/save" 
          style={{ display: 'flex',
          marginLeft: '10px',
          marginTop: '5px',
          borderRadius: '5px',
          backgroundColor: 'mediumpurple',
          padding: '6px 16px',
          fontSize: '14px',
          textDecoration: 'none',
          color: 'white', }}>Add Product</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

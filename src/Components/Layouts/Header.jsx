import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../../style/Headerstyle.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import BookIcon from '@mui/icons-material/Book';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export default function Header() {
  const [openMobile, setopenMobile] = useState(false)
  const handleDrawer = () => {
    setopenMobile(!openMobile)
  };
  const drawerStyle = {
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: '240px',
    },
  };
  return (
    <div>

      <AppBar component={"nav"} sx={{ bgcolor: 'black' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color='inherit' aria-label='open drawer'
            edge="start" sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography color={'goldenrod'} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <FastfoodIcon />My Restaurant
          </Typography>
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ul className='Navigation-style'>
              <li>
                <Link to="/">
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <HomeIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <InfoIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />About
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                    <BookIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />Menu
                  </Typography></Link>
              </li>
              <li>
                <Link to="/contact">
                  <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }} >
                    <ContactPageIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />Contact</Typography></Link>
              </li>
              <li>
                <Link to="/login">
                  <Typography variant='body1' sx={{
                    display: 'flex',
                    alignItems: 'center', background: '#737838'
                    , borderRadius: '8px', '&:hover': {
                      background: '#387839',
                      '&:active': {
                        color: 'red'
                      }
                    }
                  }}><LoginIcon
                      sx={{ fontSize: 'inherit', mr: 0.5 }} />Login
                  </Typography></Link>
              </li>
              <li>
                <Link to="/register">
                  <Typography variant='contained' sx={{
                    display: 'flex',
                    alignItems: 'center', background: '#737838',
                    borderRadius: '8px', '&:hover': {
                      background: '#387839', '&:active': {
                        color: 'red'
                      }
                    }
                  }}>
                    <HowToRegIcon
                      sx={{ fontSize: 'inherit', mr: 0.5 }} />Signup </Typography>
                </Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="temporary" open={openMobile} onClose={handleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '240px',
            padding: '10px',

          }
        }}>
        <Box onClick={handleDrawer}
          sx={{ textAlign: 'center' }}>
             <Typography color={'goldenrod'} sx={{ flexGrow: 1, display:'flex',my:2 ,alignItems: 'center' }}>
            <FastfoodIcon />My Restaurant
          </Typography>
          <ul className='Navigation-Mobileopen'>
            <li >
              <Link to="/">
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <HomeIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <InfoIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />About
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <MenuIcon sx={{ fontSize: 'inherit', mr: 0.5, ml: 2 }} />Menu
                </Typography></Link>
            </li>
            <li>
              <Link to="/contact">
                <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }} >
                  <ContactPageIcon sx={{ fontSize: 'inherit', mr: 0.5 }} />Contact</Typography></Link>
            </li>
            <li>
              <Link to="/login">
                <Typography variant='body1' sx={{
                  display: 'flex',
                  alignItems: 'center', background: '#737838'
                  , borderRadius: '8px', '&:hover': {
                    background: '#387839',
                    '&:active': {
                      color: 'red'
                    }
                  }
                }}><LoginIcon
                    sx={{ fontSize: 'inherit', mr: 0.5 }} />Login
                </Typography></Link>
            </li>
            <li>
              <Link to="/register">
                <Typography variant='contained' sx={{
                  display: 'flex',
                  alignItems: 'center', background: '#737838',
                  borderRadius: '8px', '&:hover': {
                    background: '#387839', '&:active': {
                      color: 'red'
                    }
                  }
                }}>
                  <HowToRegIcon
                    sx={{ fontSize: 'inherit', mr: 0.5 }} />Signup </Typography>
              </Link>
            </li>
          </ul>
        </Box>
      </Drawer>
      <Box>
      <Toolbar/>
      </Box>

    </div>
  )
}

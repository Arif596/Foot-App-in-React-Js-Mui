import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Avatar, FormControlLabel, Grid, Paper, TextField,Button, Typography } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckBox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom';
import '../style/Login.css'

export default function Login() {
  const paperStyle = {
    padding: 20,
    margin: "auto",
    width: "350px",
    height: "65vh",
    marginBottom:6,
    marginTop:20
  };
  const buttonStyle = {
    marginLeft: '15px', 
    width: '100%', 
    fontSize: '10px',
    marginTop:1
     
  };
  return (
    <Layout>
      <Grid container >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={{ background: "green" }}><LockOpenIcon /></Avatar>
            <h1>Sign In</h1>
          </Grid>
          <br /> <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Username" placeholder='Username'
                variant='filled' required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" placeholder='Password'
                variant='filled' required fullWidth />
            </Grid>
            <FormControlLabel required control={<CheckBox
             sx={{ml:2}}/>} 
                    label="Remember me"/>
                    <Button variant="contained" sx={buttonStyle} >Sign In</Button>
                    <Typography sx={{ml:2,mt:1}}>
                      <Link href="#">Forget Password?</Link>
                    </Typography>
                    <Typography sx={{ml:2}}>Do you have an account
                      <Link href="/register">Sign Up?</Link>
                    </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  )
}

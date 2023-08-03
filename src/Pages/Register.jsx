import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Avatar, Button, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CheckBox from '@mui/material/Checkbox'

export default function Register() {
  const stylePaper = {
    padding: 20,
    margin: 'auto',
    width: "400px",
    height: "80vh",
    marginBottom:9,
    backgroundColor: '#f0f0f0',
    marginTop:"20px"
  }
  return (
    <Layout>
      <Grid container>
        <Paper elevation={10} style={stylePaper}>
          <Grid align="center">
            <Avatar style={{ background: "green" }}><AppRegistrationIcon /></Avatar>
            <h2>Registration form</h2>
          </Grid>
          <br />
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="filled"
                placeholder="First Name"
                required
                
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="filled"
                placeholder="Email"
                required
                
              />
            </Grid>
            <FormControl sx={{ mt: 2 ,ml:2}}>
              Gender
              <RadioGroup row>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
            <Grid item xs={12}>
              <TextField label="Phone No" variant='filled'
              placeholder='Phone No' required fullWidth/>
            </Grid>
            <Grid item xs={6}>
              <TextField label="Password" variant='filled'
              placeholder='Password' required />
            </Grid>
            <Grid item xs={6}>
              <TextField label="CPassword" variant='filled'
              placeholder='CPassword' required />
            </Grid>
            <FormControlLabel required control={<CheckBox
            sx={{ml:2}}/>}
             label="I accept term and condition"/>
          </Grid>
          <Button variant='contained' align="center"
          sx={{ml:15}}>Signup</Button>
        </Paper>
      </Grid>
    </Layout>
  )
}

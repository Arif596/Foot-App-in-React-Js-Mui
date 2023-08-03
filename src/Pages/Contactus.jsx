import React, { useState } from 'react'
import Layout from '../Components/Layouts/Layout'
import { Avatar, Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import DetailsIcon from '@mui/icons-material/Details';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
export default function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  return (
    <Layout>
      <Box sx={{
        my: 10, ml: 3,
        '& h5': {
          fontSize: 40,
          fontWeight: 'bold',
          ml: 2
        }, '& p': {

          textAlign: 'justify',
          marginLeft: 2,
          marginRight: 2
        }
      }}>
        <Typography variant='h5'sx={{mb:5}}>
          Contact with my resturent
        </Typography>
        <p>
          Feel free to reach out to us through our contact page for any inquiries or assistance.
          We are here to serve you with the utmost care and dedication.
        </p>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}>
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" align="center"
              sx={{
                fontSize: 40, marginTop: '30px'
              }}>Contact us</Typography>
            <form action='' onSubmit={handleSubmit} >
              <TextField xs={12} sx={{ width: 600 }}
                label="name" placeholder='Name'
                fullWidth
                required
                onChange={handleName}
                value={name} />
              <TextField sx={{ mt: 4 }}
                label="email"
                placeholder='Email'
                fullWidth
                required
                value={email}
                onChange={handleEmail} />
              <TextField sx={{ mt: 4 }}
                multiline
                rows={5}
                labell="message"
                placeholder='Message'
                fullWidth
                required
                value={message}
                onChange={handleMessage} />
              <Button
                variant='contained'
                sx={{
                  mt: 3, ml: 25,
                  '&:hover': {
                    color: 'goldenrod'
                  }
                }}>Submit</Button>
            </form>
          </Box>
        </Box>
      </Box>
      <Box sx={{m:4,width:'600px',ml:10}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ color: 'blue', fontSize: '30px',textAlign:'center'
                  ,background:'gray'
                   }}>
                    <DetailsIcon/>Contact Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                sx={{color:'goldenrod',fontSize:'30px'}}>
                  <SupportAgentIcon/>1800-00-800(callfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: 'goldenrod', fontSize: '30px' }}
                  ><ContactsIcon/>03367060596</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ color: 'goldenrod', fontSize: '30px' }}
                  ><EmailIcon/>arifjamalchohan596@gmail.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

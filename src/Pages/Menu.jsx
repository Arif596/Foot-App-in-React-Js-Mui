import React from 'react'
import Layout from '../Components/Layouts/Layout'
import {MenuList} from '../data/Data'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

export default function Menu() {
  return (
    <Layout>
      <Box sx={{display:'flex',
      flexWrap:'wrap',justifyContent:'center'}}
      >
{
  MenuList.map((item)=>(
    <Card sx={{maxWidth:'390px',
    display:'flex',m:3}}>
      <CardActionArea>
        <CardMedia sx={{minHeight:'400px'}}
        component={"img"}
        src={item.image}
        alt={item.name}/>
        <CardContent>
          <Typography variant='h4' gutterBottom component={'div'}>
            {item.name}
        
          </Typography>
          <Typography variant='h6'sx={{textAlign:'justify'}}>
            {item.description}
          </Typography>
          <Typography variant='h4'>
            {item.price}
          </Typography>
          <Typography>
          <Button 
          sx={{ml:18}} variant='contained'>Payment</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ))
}
      </Box>
    </Layout>
  )
}

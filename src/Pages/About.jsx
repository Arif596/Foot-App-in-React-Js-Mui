import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'


export default function About() {
  return (
    <Layout>
      <Box sx={{my:15,
       textAlign:'center', '& h5':{
        fontSize:'30px',
        fontWeight:'bold'
       },
       '& p':{
        textAlign:'justify',
        margin:4,
        fontSize:20,
        color:'black'
       },
       "@media (max-width:600px)":{
        margin:0
       }}}>
        <Typography variant='h5'>
          <h1>Welcome To Our Resturent</h1>
        </Typography>
        <p>Welcome to our food website! We take immense pride
           in presenting the best of Pakistani cuisine to all 
           food enthusiasts out there. Our website is a culinary
            journey that celebrates the rich and diverse flavors 
            of Pakistan. From the vibrant streets of Lahore to the
             aromatic kitchens of Karachi, we bring you an exquisite
              array of dishes that reflect the true essence of Pakistani
               culture and tradition. Whether it's the sizzling kebabs, 
               the delectable biryanis, or the mouthwatering desserts,
                our menu is a delightful fusion of taste and authenticity.
                 Each dish is crafted with passion and care, using the finest 
                 ingredients and time-honored recipes passed down through generations. 
                 So, come and embark on a gastronomic adventure with us, as we invite you to experience 
          the best food that Pakistan has to offer. Get ready to indulge in a symphony of flavors that 
          will leave your taste buds craving for more. Happy feasting!</p>
      </Box>
    </Layout>
  )
}

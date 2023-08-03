import React from 'react'
import Layout from '../Components/Layouts/Layout'
import firstimage from '../images/banner.jpeg'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import '../style/Home.css'


export default function Home() {
  return (
    <Layout>
    <div className="home" style={{backgroundImage:`url(${firstimage})`}}>
      <div className="heading">
        <h2>Best Food</h2>
        <p>Best Food in pakistan</p>
        <Link to="/menu">
        <Button variant='contained'
        sx={{borderRadius:'10px',backgroundColor:'black'}}>Order noew</Button></Link>
      </div>
      </div> 
    </Layout>
  )
}

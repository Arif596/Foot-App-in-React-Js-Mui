import React from 'react'
import Header from './Header'
import Footer from '../../Pages/Footer'
export default function Layout({children}) {
  return (
    <div>
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}

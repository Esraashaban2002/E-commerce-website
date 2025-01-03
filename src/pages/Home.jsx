import React from 'react'
import { Footer, Main, Navbar, Product } from '../components'

function Home() {
  return (
    <div className='position-relative'>
      <Navbar />
      <Main />
      <Product />
      <Footer />
    </div>
  )
}

export default Home

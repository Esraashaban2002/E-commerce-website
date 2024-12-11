import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-body-secondary pb-3 mt-5 w-100 position-absolute bottom-0">
      <div className="container">
        <p className="text-center">SEF Academy <Link href="#" className='text-dark fs-5'>Esraa Shaban</Link></p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { Footer, Navbar } from '../components'
import { NavLink } from 'react-router-dom'

function Register() {
  return (
    <div>
    <Navbar />
    <div className='container'>
    <h2 className='text-center fs-1 fw-bolder mt-4'>Register</h2>
    <hr/>
    <form className='mt-5 mx-auto' style={{width:"350px"}} >
      <div className="mb-4">
          <label for="exampleInputName" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Your Name" />
      </div>
      <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
      </div>
      <div className="mb-4">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'/>
      </div>
      <div className="mb-4">
          <span className="">Already has an account? <NavLink className="text-primmary" to="/login">Login</NavLink></span>
      </div>
      <div className="mb-4 d-flex justify-content-center">
      <button type="submit" className="btn btn-secondary">Register</button>
      </div>
  </form>
  </div>
    <Footer />
  </div>
  )
}

export default Register

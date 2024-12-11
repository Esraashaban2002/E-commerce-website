import React from 'react'
import { Footer, Navbar } from '../components'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <h2 className='text-center fs-1 fw-bolder mt-4'>Login</h2>
      <hr/>
      <form className='mt-5 mx-auto ' style={{width:"350px"}} >
        <div className="mb-4">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
        </div>
        <div className="mb-4">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder='password'/>
        </div>
        <div className="mb-4">
            <span className="">New Here? <NavLink className="text-primmary" to="/register">Register</NavLink></span>
        </div>
        <div className="mb-4 d-flex justify-content-center">
        <button type="submit" className="btn btn-secondary">Login</button>
        </div>
    </form>
    </div>
      <Footer />
    </div>
  )
}

export default Login

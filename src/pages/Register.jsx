import React, { useState } from 'react'
import { Footer, Navbar } from '../components'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({username:"" , email: "" , password: ""})
  const [message , setMessage] = useState('')
  const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name , value} = e.target
    setFormData((data)=>({
      ...data,
      [name]: value,
    }));
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const checkResponse = await axios.get(`https://679b8ac633d3168463243c22.mockapi.io/users`);
      const existingUser = checkResponse.data.find(user => user.email === formData.email);
  
      if (existingUser) {
        setMessage('Email already exists. Please login instead.');
      } else {
        await axios.post('https://679b8ac633d3168463243c22.mockapi.io/users', formData);
        setMessage('User registered successfully!');
        setTimeout(() => {
          navigate('/login'); 
        }, 1000);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Registration failed.');
    }
  }

  return (
    <div>
    <Navbar />
    <div className='container'>
    <h2 className='text-center fs-1 fw-bolder mt-5'>Register</h2>
    <hr/>
    <form onSubmit={handleSubmit } className='mt-5 mx-auto' style={{width:"350px"}} >
      <div className="mb-4">
          <label htmlFor="exampleInputName" className="form-label">Full Name</label>
          <input type="text" 
          className="form-control" id="exampleInputName"
           placeholder="Enter Your Name" 
           name="username"
           value={formData.username}
            onChange={handleChange}
            required
           />
      </div>
      <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
           aria-describedby="emailHelp" placeholder="name@example.com" 
           name="email"
           value={formData.email}
           onChange={handleChange}
           required
           />
      </div>
      <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" 
          id="exampleInputPassword1" placeholder='password'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          />
      </div>
      <div className="mb-4">
          <span className="">Already has an account? <NavLink className="text-primmary" to="/login">Login</NavLink></span>
      </div>
      <div className="mb-4 d-flex justify-content-center">
      <button type="submit" className="btn btn-secondary">Register</button>
      </div>
       {message && <p className='text-success'>{message}</p>}
  </form>
  </div>
    <Footer />
  </div>
  )
}

export default Register

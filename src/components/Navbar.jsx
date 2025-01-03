import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
 <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary py-3 sticky-top">
  <div className="container">
    <NavLink className="nav-link fw-bold fs-4" to="/">E-commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 fs-5">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" >Contact</NavLink>
        </li>
      </ul>
      <form className="d-flex gap-3" role="search">
        <button className="btn btn-outline-dark d-flex align-items-center"> 
          <span className="material-symbols-outlined me-1 fw-semibold"> login </span>
            <NavLink className="nav-link" to="/login" >Login</NavLink></button>
        <button className="btn btn-outline-dark d-flex align-items-center">
          <span className="material-symbols-outlined me-1 fw-semibold"> person_add </span>
           <NavLink className="nav-link" to="/register" >Register</NavLink></button>
        <button className="btn btn-outline-dark d-flex align-items-center">
        <span className="material-symbols-outlined me-1 fw-semibold">shopping_cart </span>
            <NavLink className="nav-link" to="/cart" >Cart (0)</NavLink> </button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar

import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { FaStar } from 'react-icons/fa6';

function Product() {
const {id} = useParams()
const [product , setProduct] = useState([])
 const componentMounted = useRef(true); 

useEffect(()=>{
    const getProduct = async () =>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (componentMounted.current) {
            setProduct(await response.clone().json());
        }
  
        return () => {
          componentMounted.current = false;
        };
      };
    getProduct();
} , [id]);

  return (
    <>
    <Navbar />
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.image}
            alt={product.title}
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h4 className="text-uppercase text-muted">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            {product.rating && product.rating.rate}{" "}
            <FaStar />
          </p>
          <h3 className="display-6  my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark"> Add to Cart </button>
          <Link to="/cart" className="btn btn-dark mx-3"> Go to Cart </Link>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default Product

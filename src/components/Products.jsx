import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const componentMounted = useRef(true); 



  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted.current) {
        setData(await response.clone().json());
        setFilter(await response.json());
      }

      return () => {
        componentMounted.current = false;
      };
    };

    getProducts();
  }, []);

    const filterProduct = (category) => {
        const updatedList = data.filter((item) => item.category === category);
        setFilter(updatedList);
    };

    const ShowProducts = () => { 
        return (
            <>
            <div className="buttons text-center py-5">
            <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => setFilter(data)}
            >
                All
            </button>
            <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => filterProduct("men's clothing")}
            >
                Men's Clothing
            </button>
            <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => filterProduct("women's clothing")}
            >
                Women's Clothing
            </button>
            <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => filterProduct("jewelery")}
            >
                Jewelery
            </button>
            <button
                className="btn btn-outline-dark btn-sm m-2"
                onClick={() => filterProduct("electronics")}
            >
                Electronics
            </button>
            </div>

            {filter.map((product) => {
                return(
                    <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" id={product.id} key={product.id}>
                        <div className="card border-1 text-center h-100 "  key={product.id}>
                        <img src={product.image} className="card-img-top p-3" alt="Card" height={300} />
                        <div className="card-body">
                            <h5 className="card-title"> {product.title.substring(0,12)}... </h5>
                            <p className="card-text"> {product.description.substring(0, 90)}...</p>
                        </div>
                        <ul className="list-group list-group-flush align-items-center">
                            <li className="list-group-item">$ {product.price}</li>
                        </ul>
                        <div className="card-body ">
                            <Link to={"/product/" + product.id} className="btn btn-dark me-2">Buy Now</Link>
                            <button  className="btn btn-dark">Add to Cart</button>
                        </div>
                        </div>
                </div>
                )
            })}
        </>
        )
    }

  return (
    <div className="container mt-5 pb-5">
    <div className="row">
      <div className="col-12">
        <h2 className="display-5 text-center">Latest Products</h2>
        <hr />
      </div>
    </div>
    <div className="row justify-content-center">
       <ShowProducts />
    </div>
  </div>
  )
}

export default Products

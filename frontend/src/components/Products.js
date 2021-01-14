import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">${product.price}</div>

        </div>
        <div className="row">
        <div>Status</div>
        {product.countInStock > 0 ? (<span className="success">In stock</span>) : (<span className="danger">Unavailaible</span>)}

      </div>
      </div>
      
    </div>
  );
}
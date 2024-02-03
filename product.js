import React from 'react';
import './product.css';
import cart from './download.png'
import Vid from './ok.mp4'

const Product = ({ product, addToCart }) => (
  <div key={product.id}>
    <table border={1} className='shopping' cellSpacing={25}>
      <thead>
        <tr>
          <td>
            <img src={product.image} alt={product.name} className='prodImage'></img>
          </td>
          <th >
            {product.name}<br /><br />₹{product.price} only
          </th>
          <td>
            <button onClick={() => addToCart(product)}><img className='cartImage' src={cart} alt='cart'></img></button>
          </td>
          <td>
            <video src={Vid} controlsList='abho' autoPlay loop playsInline />
          </td>
        </tr>
      </thead>
    </table>

  </div>
);

export default Product;

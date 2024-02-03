import React from 'react';

const Cart = ({ product, removeFromCart }) => (
    <div key={product.id}>
        <h2>{product.name}</h2>
        <h3>{product.price}</h3>
        <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
);

export default Cart;

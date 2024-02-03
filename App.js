import React, { useState } from 'react';
import Product from './product';
import Cart from './Cart';
import './App.css'
import vid from './ok.mp4'

const products = [
    { id: 1, name: 'Mens Abor Sneakers', price: 100, image: 'https://m.media-amazon.com/images/I/71m+EGqdJ0L._AC_UL480_QL65_.jpg' },
    { id: 2, name: 'Mens Clanal Sneakers', price: 200, image: 'https://m.media-amazon.com/images/I/71aKceM2M4L._AC_UL480_QL65_.jpg' },
    { id: 3, name: 'Mens Stefab Sneakers', price: 300, image: 'https://m.media-amazon.com/images/I/617iRyCKdpL._AC_UL480_QL65_.jpg' }
];

const App = () => {
    const [cart, setCart] = useState([]);

    const anima = () => {
        <video src={vid}/>
    }

    const addToCart = (product) => {
        setCart((currentCart) => [...currentCart, product]);
    };

    const removeFromCart = (productToRemove) => {
        setCart((currentCart) => currentCart.filter((product) => product !== productToRemove));
    };

    return (
        <div>
            <h1 className='App-header'>Shopping Page</h1>
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} anima = {anima}/>
            ))}
            <h1>Cart</h1>
            {cart.map((product) => (
                <Cart key={product.id} product={product} removeFromCart={removeFromCart} />
            ))}
        </div>
    );
};

export default App;

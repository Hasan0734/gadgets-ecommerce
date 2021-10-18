import React from 'react';
import Nav from '../Nav/Nav';

const CartProduct = () => {
    const product = JSON.parse(localStorage.getItem('cartProduct'))

    return (
        <>
        <Nav></Nav>
        <div className="container">
        <h1>Hello world</h1>
            <ul>
                {product.map(pd => <li>{pd.id}</li>)}
            </ul>
        </div>
        </>
    );
};

export default CartProduct;
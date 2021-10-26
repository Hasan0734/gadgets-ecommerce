
import React from 'react';

import CartProduct from '../CartProduct/CartProduct';
import Nav from '../Nav/Nav';

const CartProducts = () => {

    let product = JSON.parse(localStorage.getItem('cartProduct') || [])

    const removeProduct = (id) => {
        product.find(pd => {
            if (pd.id === id) {
                localStorage.removeItem(pd.id)
                console.log(true)
            }
            product = JSON.parse(localStorage.getItem('cartProduct'))
            return false;
        }

        )
    }
    return (
        <>
            <Nav></Nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="border">
                            <p className="p-4 bg-secondary">PRODUCT</p>
                            <div className="py-4 overflow-hidden">

                                {product.map(pd => <CartProduct product={pd} removeProduct={removeProduct} ></CartProduct>)}

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>

            </div>
        </>
    );
};

export default CartProducts;
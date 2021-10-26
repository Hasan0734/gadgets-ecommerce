import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
const CartProduct = ({ product, removeProduct }) => {

    const [quantity, setQuantity] = useState(product.quantity)

    const handleQuantity = (isTrue) => {

        if (isTrue) {
            setQuantity(quantity + 1)
        }
        else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="row border-bottom pb-3 mb-3">

            <div className="col-3">
                <img className="w-100" src={product.image} alt="" />
                <div className="quantity">
                    <button onClick={() => handleQuantity(true)} className="m-1">+</button>

                    <input className="m-1 text-center" type="text" value={quantity} />
                    <button onClick={() => handleQuantity(false)} className="m-1">-</button>
                </div>
            </div>
            <div className="col-6">
                <h6>iPhone 12 Pro Max</h6>
                <p>Brand: Apple</p>
                <p><small>{ }, Dual, US</small></p>
            </div>
            <div className="col-3 text-center">
                <button onClick={() => removeProduct(product.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                <p>BDT${product.charge * quantity}</p>
            </div>
        </div>

    );
};

export default CartProduct;
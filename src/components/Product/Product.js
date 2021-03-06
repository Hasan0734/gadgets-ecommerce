
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Product.css'
const Product = (props) => {

    const { product, combination, handleQuantity, quantity, allCombination, selectedCombination, setAllCombination } = props
    const cartAddedProduct = JSON.parse(localStorage.getItem('cartProduct'))
    const [addCart, setAddCart] = useState(cartAddedProduct || [])

    selectedCombination(allCombination)
    const selectCombination = (id, combName) => {

        if (combName === 'storage') {

            setAllCombination({ ...allCombination, storage: id })

        } else if (combName === 'color') {

            setAllCombination({ ...allCombination, color: id })
        } else if (combName === 'sim') {

            setAllCombination({ ...allCombination, sim: id })
        } else if (combName === 'region') {

            setAllCombination({ ...allCombination, region: id })
        }

    }
    const handleAddToCart = (e) => {
        e.preventDefault()
        const addProduct = { ...product, quantity }

        if (addCart.length > 0) {
            addCart.map((pd, index) => {
                if (pd.id === addProduct.id) {
                    const newQuantity = pd.quantity + addProduct.quantity
                    const product = addCart[index]
                    product.quantity = newQuantity
                    const OtherProduct = addCart.filter(pd => pd.id !== addProduct.id)

                    setAddCart([...OtherProduct, product])

                } else {
                    setAddCart([...addCart, addProduct])
                }
            })

        } else {
            setAddCart([...addCart, addProduct])
        }
    }

    if (addCart.length) {
        localStorage.setItem('cartProduct', JSON.stringify(addCart));

    }
    return (
        <div className="product-area d-flex">

            <img className="" src={product.image} alt="" />
            <div className="mt-5">
                <h3 className="pt-5">iPhone 12 Pro Max</h3>
                <h3>{product.id}</h3>
                <h4 className="text-secondary">TK.{product.charge * quantity}</h4>
                <input type="checkbox" name="emi" id="emi" />
                <label className="ms-1" htmlFor="emi"><small>Available EMI Offer <a href="view-plan" className="text-decoration-none text-warning">View Plans</a></small></label>
                <div className="product-variation border-top mt-3 pt-4">
                    <ul className="list-unstyled">
                        <li><span>Storage:</span>
                            <div className="variation-1">
                                {
                                    combination.length && combination[0].Storage.map(storage =>
                                        <button onClick={() => selectCombination(storage.id, 'storage')}

                                            key={storage.id} className={allCombination.storage === storage.id ? "selected select-btn" : "select-btn"}>
                                            {storage.value}</button>
                                    )
                                }
                            </div>
                        </li>
                        <li><span>Color:</span>
                            <div className="variation-2 d-flex">
                                {combination.length && combination[1].Color.map(color =>
                                    <div onClick={() => selectCombination(color.id, 'color')} key={color.id} className={allCombination.color === color.id ? "selected border rounded-circle me-2" : "border rounded-circle me-2"} >
                                        <div title={color.value.substring(0, color.value.indexOf('_'))} className={`${color.value} color-box m-1 d-flex justify-content-center align-items-center`}></div>
                                    </div>
                                )}

                            </div>
                        </li>
                        <li><span>Sim:</span>
                            <div className="variation-3">
                                {
                                    combination.length && combination[2].Sim.map(sim =>
                                        <button onClick={() => selectCombination(sim.id, 'sim')}

                                            key={sim.id} className={allCombination.sim === sim.id ? "selected select-btn" : "select-btn"}>
                                            {sim.value}</button>
                                    )
                                }


                            </div>
                        </li>
                        <li><span>Region:</span>
                            <div className="variation-4">
                                {
                                    combination.length && combination[3].Region.map(region =>
                                        <button onClick={() => selectCombination(region.id, 'region')}

                                            key={region.id} className={allCombination.region === region.id ? "selected select-btn" : "select-btn"}>
                                            {region.value}</button>
                                    )
                                }


                            </div>
                        </li>
                        <li>Quatity:
                            <div className="quantity">
                                <button onClick={() => handleQuantity(true)} className="m-1">+</button>
                                <input className="m-1 text-center" type="text" value={quantity} onScroll="none" />
                                <button onClick={() => handleQuantity(false)} className="m-1">-</button>
                            </div>
                        </li>
                    </ul>
                    <button onClick={(e) => handleAddToCart(e)} className="btn btn-warning ms-4 text-white">ADD TO CART</button>
                    <Link to="/checkout" className="text-decoration-none text-warning ms-4">Go To Checkout</Link>
                </div>
            </div>

        </div>
    );
};

export default Product;
import { faMinus, faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Product.css'
const Product = ({ product, combination, handleQuantity, quanity}) => {

    const [storageSelect, setStorageSelect] = useState(null)
  const handleStorage = (e) => {
     const value = e.target.value;
  
  }
    return (
        <div className="product-area d-flex">

            <img className="" src={product.image} alt="" />
            <div className="mt-5">
                <h3 className="pt-5">iPhone 12 Pro Max</h3>
                <h4 className="text-secondary">TK.{product.charge}</h4>
                <input type="checkbox" name="emi" id="emi" />
                <label className="ms-1" htmlFor="emi"><small>Available EMI Offer <a href="view-plan" className="text-decoration-none text-warning">View Plans</a></small></label>
                <div className="product-variation border-top mt-3 pt-4">
                    <ul className="list-unstyled">
                        <li><span>Storage:</span>
                            <div className="variation-1">
                                {
                                combination.length && combination[0].Storage.map(storage => 
                                <button onClick={(e) => handleStorage(e)} value={storage.id} key={storage.id} className ="select-btn">{storage.value}</button>
                                )
                                }
                            </div>
                        </li>
                        <li><span>Color:</span>
                            <div className="variation-2 d-flex">
                                <div className="border rounded-circle me-2">
                                    <div className="color-box m-1 d-flex justify-content-center align-items-center"><span>1</span></div>
                                </div>
                                <div className="border rounded-circle me-2">
                                    <div className="color-box m-1 d-flex justify-content-center align-items-center"><span>1</span></div>
                                </div>
                                <div className="border rounded-circle me-2">
                                    <div className="color-box m-1 d-flex justify-content-center align-items-center"><span>1</span></div>
                                </div>
                                <div className="border rounded-circle me-2">
                                    <div className="color-box m-1 d-flex justify-content-center align-items-center"><span>1</span></div>
                                </div>

                            </div>
                        </li>
                        <li><span>Sim:</span>
                            <div className="variation-3">
                                <button className="select-btn">e-Sim</button>
                                <button className="select-btn">Dual</button>

                            </div>
                        </li>
                        <li><span>Region:</span>
                            <div className="variation-4">
                                <button className="select-btn">Regular</button>
                                <button className="select-btn">USA</button>

                            </div>
                        </li>
                        <li>Quatity: 
                            <div className="quantity">
                                <button onClick={ () => handleQuantity(true)} className="m-1">+</button>
                                <input className="m-1 text-center" type="text" value={quanity} onScroll="none"/>
                                <button onClick={() => handleQuantity(false)} className="m-1">-</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Product;
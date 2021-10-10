
import React, { useState } from 'react';
import './Product.css'
const Product = ({ product, combination, handleQuantity, quanity, selectedVariation }) => {

    const [allVariation, setAllVariation] = useState({ storage: 3480, color: 3483, sim: 3487, region: 3489 })

    
    selectedVariation(allVariation);
    
    const selectVariation = (id, combName) => {
        if (combName === 'storage') {
            
            setAllVariation({...allVariation, storage: id})

        } else if (combName === 'color') {
           
            setAllVariation({...allVariation, color: id})
        } else if (combName === 'sim') {
           
            setAllVariation({...allVariation, sim: id})
        } else if (combName === 'region') {
           
            setAllVariation({...allVariation, region: id})
        }

    }
    // selectedVariation(storageSelect.values[0], selectColor.values[0], selectSim.values[0], selectRegion.values[0])
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
                                        <button onClick={() => selectVariation(storage.id, 'storage')}

                                            key={storage.id} className={allVariation.storage === storage.id ? "selected select-btn" : "select-btn"}>
                                            {storage.value}</button>
                                    )
                                }
                            </div>
                        </li>
                        <li><span>Color:</span>
                            <div className="variation-2 d-flex">
                                {combination.length && combination[1].Color.map(color =>
                                    <div onClick={() => selectVariation(color.id, 'color')} key={color.id} className={allVariation.color === color.id ? "selected border rounded-circle me-2" : "border rounded-circle me-2"} >
                                        <div title={color.value.substring(0, color.value.indexOf('_'))} className={`${color.value} color-box m-1 d-flex justify-content-center align-items-center`}></div>
                                    </div>
                                )}

                            </div>
                        </li>
                        <li><span>Sim:</span>
                            <div className="variation-3">
                                {
                                    combination.length && combination[2].Sim.map(sim =>
                                        <button onClick={() => selectVariation(sim.id, 'sim')}

                                            key={sim.id} className={allVariation.sim === sim.id ? "selected select-btn" : "select-btn"}>
                                            {sim.value}</button>
                                    )
                                }


                            </div>
                        </li>
                        <li><span>Region:</span>
                            <div className="variation-4">
                                {
                                    combination.length && combination[3].Region.map(region =>
                                        <button onClick={() => selectVariation(region.id, 'region')}

                                            key={region.id} className={allVariation.region === region.id ? "selected select-btn" : "select-btn"}>
                                            {region.value}</button>
                                    )
                                }


                            </div>
                        </li>
                        <li>Quatity:
                            <div className="quantity">
                                <button onClick={() => handleQuantity(true)} className="m-1">+</button>
                                <input className="m-1 text-center" type="text" value={quanity} onScroll="none" />
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
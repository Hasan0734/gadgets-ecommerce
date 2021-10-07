import React from 'react';

const Product = ({product}) => {
    return (
        <div className="col-md-4">
            <div classNam="card">
                <img className="w-50" src={product.image} alt="" />
            </div>
        </div>
    );
};

export default Product;
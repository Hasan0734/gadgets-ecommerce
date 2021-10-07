import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import fakeData from '../../fakeData/data.json'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(fakeData)
    }, [])

    console.log(products)
    return (
        <section>
            <div className="container">
                <div className="row">
                    {products.map(pd => <Product product={pd} key={pd.id}></Product>)}
                </div>
            </div>
        </section>
    );
};

export default Products;
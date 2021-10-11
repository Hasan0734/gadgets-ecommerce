import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [combination, setCombination] = useState([]);
    const [quanity, setQuantity] = useState(1);
    const [newProduct, setNewProduct] = useState({})
    const [productDefault, setProductDefault] = useState([])

    useEffect(() => {
        const variation = 'https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/variation.json'
        fetch(variation)
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            }, []);

        const combination = 'https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/combination.json'
        fetch(combination)
            .then(res => res.json())
            .then(data => setCombination(data))
    })

    const handleQuantity = (isTrue) => {
        if (isTrue) {
            setQuantity(quanity + 1)
        }
        else if (quanity > 1) {
            setQuantity(quanity - 1)
        }
    }
   
  
    const selectVariation = (vari) => {
        const comb = [vari.storage, vari.color, vari.sim, vari.region]

        products.filter((pd, index) => {
            if (pd.attribute_combination.toString() === comb.toString()) {
               
                setNewProduct(products[index])
                return true
            }
            return false
        })
    
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    {<Product
                        selectedVariation={selectVariation}
                        handleQuantity={handleQuantity}
                        quanity={quanity}
                        product={newProduct}
                        productDefault = {productDefault}
                        combination={combination}>
                    </Product>}
                </div>
            </div>
        </section>
    );
};

export default Products;
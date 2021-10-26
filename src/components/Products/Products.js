import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../../App';
import Product from '../Product/Product';
const Products = () => {

    const {products, setProducts,combination, setCombination} = useContext(ProductContext);
    const [quantity, setQuantity] = useState(1);
    const [newProduct, setNewProduct] = useState({})

    const [allCombination, setAllCombination] = useState({ storage: null, color: null, sim: null, region: null })


    useEffect(() => {
        const variation = 'https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/variation.json'
        fetch(variation)
            .then(res => res.json())
            .then(data => {
                data.find((pd, index) => {
                    if (pd.is_default) {
                        setNewProduct(data[index])
                        const combi = {
                            storage: pd.attribute_combination[0],
                            color: pd.attribute_combination[1],
                            sim: pd.attribute_combination[2],
                            region: pd.attribute_combination[3]
                        }
                        setAllCombination(combi)
                    }

                    return false
                })
                setProducts(data)

            });

        const combination = 'https://raw.githubusercontent.com/qtecsolution/Sample-JSON/main/combination.json'
        fetch(combination)
            .then(res => res.json())
            .then(data => setCombination(data))
    }, [])


    const handleQuantity = (isTrue) => {
        if (isTrue) {
            setQuantity(quantity + 1)
        }
        else if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const selectedCombination = (combi) => {
        const comb = [combi.storage, combi.color, combi.sim, combi.region]

        products.filter((pd, index) => {
            if (pd.attribute_combination.toString() === comb.toString()) {
                setNewProduct(products[index])
            }
            return false
        })

    }
    
    return (
        <section>
            <div className="container">
                <div className="row">
                    {<Product
                        selectedCombination={selectedCombination}
                        handleQuantity={handleQuantity}
                        quantity={quantity}
                        product={newProduct}
                        setAllCombination={setAllCombination}
                        allCombination={allCombination}
                      
                        combination={combination}
                        
                    >
                    </Product>}
                </div>
            </div>
        </section>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [combination, setCombination] = useState([]);
    const [quanity, setQuantity] = useState(1);
    const [newProduct, setNewProduct] = useState({})

    const [allCombination, setAllCombination] = useState({ storage: false, color: false, sim: false, region: false })


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
            setQuantity(quanity + 1)
        }
        else if (quanity > 1) {
            setQuantity(quanity - 1)
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
                        quanity={quanity}
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
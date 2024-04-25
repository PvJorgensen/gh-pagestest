import React, { useState, useEffect } from 'react';
import styles from './data.module.scss'

export const Getdata = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(err => {
                console.error('Error fetching data', err);
            });
    }, []);
    console.log(products);

    return (
        <>
            <div className={styles.wrapper}>
                <h1>Products</h1>
                <div className={styles.products}>
                    {products.map(product => (
                        <>
                        <div className={styles.gridcontainer}>
                        <h2 key={product.id}>{product.title}</h2>
                        <p>{product.description}</p>
                        <img src={product.thumbnail} alt="asd" />
                        <p>{product.price}.00.kr</p>
                        <button>Køb nu</button>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

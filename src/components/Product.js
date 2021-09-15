import React from 'react'
import Product from './Product';
import Product from './src/styles/Product.css';

const Product = ({ product }) => {

    return (
        <div className="card">
            <img src="" alt="" title={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.descpriction}</p>
            <p>{product.price}</p>

            <button aria-label="Add to cart">
                <AddToShoppingCart />
            </button>
        </div>

    )
}

export default Product;
import React from 'react';
import '../styles/Product.css';

const Product = ({ product }) => {

    return (
        <div className="card-product" item key="{product.id}">
            <img className="card-product-image" src={product.img} title={product.name}/>
                <div className="card-product-content">
                    <h3>{product.name}</h3>
                    <p>{product.descpriction}</p>
                    <p>{product.price}</p>
                </div>

            <button className="card-product-btn" aria-label="Add to cart">
                {/* <AddToShoppingCart /> */}
            </button>
        </div>
    );
}

export default Product;
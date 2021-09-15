import React from 'react'
import Product from './Product';
import '../styles/Product.css';


const products = [
    { id: 1, name: 'Dress', descpriction: 'Black long dress', price: '100SEK'},
    { id: 2, name: 'Cup', descpriction: "White cup", price: '50SEK'},
    { id: 3, name: 'Dress', descpriction: 'Black long dress', price: '100SEK'},
    { id: 4, name: 'Cup', descpriction: "White cup", price: '50SEK'},
    { id: 5, name: 'Cup', descpriction: "White cup", price: '50SEK'},
];

const Products = () => {
    return(
        <main className="container-products">
            {products.map((product) => (
                <Product product={product} />
            ))}
        </main>

    );
}
    export default Products;
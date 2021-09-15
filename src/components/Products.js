import React from 'react'
import Product from './Product';


const products = [
    { id: 1, name: 'Dress', descpriction: 'Black long dress', price: '100SEK'},
    { id: 2, name: 'Cup', descpriction: "White cup", price: '50SEK'},
];

const Products = () => {
    <main>
        {products.map((product) => (
            <Product product={product} />
        ))}
    </main>
}
    export default Products;
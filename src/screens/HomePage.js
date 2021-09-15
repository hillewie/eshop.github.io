import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Products from '../components/Products'

export const HomePage = () => {
    return (
        <div>
            <Nav />
            <Header />

            <Products />

            <Footer />
        </div>
    )
}
export default HomePage;

import React from 'react';
import Banner from '../Banner/Banner';
import Deliver from '../Deliver/Deliver';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Deliver></Deliver>
           <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;
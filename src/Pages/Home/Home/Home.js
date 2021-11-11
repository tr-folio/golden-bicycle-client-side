import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import CarbonBicycle from "../CarbonBicycle/CarbonBicycle";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <br/>
            <Products></Products>
            <br/>
            <Reviews></Reviews>
            <br/>
            <CarbonBicycle></CarbonBicycle>
            <br/>
            <Footer></Footer>
        </>
    );
};

export default Home;
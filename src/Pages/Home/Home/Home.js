import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import CarbonBicycle from "../CarbonBicycle/CarbonBicycle";
import Technology from "../NewTechnology/technology";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import Stories from "../Stories/Stories";
import Support from "../Support/Support";

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <br/>
            <Products></Products>
            <br/>
            <Technology></Technology>
            <br/>
            <Reviews></Reviews>
            <br/>
            <CarbonBicycle></CarbonBicycle>
            <Stories></Stories>
            <br/>
            <Support></Support>
            <br/>
            <Footer></Footer>
        </>
    );
};

export default Home;
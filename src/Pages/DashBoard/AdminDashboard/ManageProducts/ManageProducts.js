import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ManageAProduct from "./ManageAProduct/ManageAProduct";

const ManageProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/readproducts')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    }, []);

    return (
        <div>
            <h2 className="text-start">Manage Products</h2>
            <br/>
            <Container>
                <Row>
                {
                    allProducts.map(product => 
                        <ManageAProduct key={product._id} product={product}></ManageAProduct>    
                    )
                }
                </Row>
            </Container>
        </div>
    );
};

export default ManageProducts;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const [selectedProduct, setSelectedProduct] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:5000/readSingleProduct/${id}`)
        .then(res => res.json())
        .then(data => setSelectedProduct(data[0]));
    }, [id]);

    return (
        <div>
            <Header></Header>
            <h2>{selectedProduct.productName}</h2>
        </div>
    );
};

export default Purchase;
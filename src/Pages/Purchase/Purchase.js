import React from 'react';
import { useParams } from 'react-router';
import Header from '../Shared/Header/Header';

const Purchase = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <Header></Header>
            <h2>This is Purchase page</h2>
        </div>
    );
};

export default Purchase;
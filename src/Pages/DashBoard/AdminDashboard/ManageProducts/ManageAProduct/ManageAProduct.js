import React from 'react';
import { Button, Col } from 'react-bootstrap';

const ManageAProduct = (props) => {
    const { product } = props;

    const deleteAProduct = () => {
        const deleteConfirmation = window.confirm('Do you want to delete this item?');
        if (deleteConfirmation) {
            fetch(`https://powerful-dawn-56436.herokuapp.com/deleteAProduct/${product._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    window.alert('product deleted successfully');
                    window.location.reload();
                }
            })
        }
    }

    return (
        <Col xs="12">
            <h6 className="fw-bold text-start w-50 border border-1 border-primary p-2 d-inline-block">{product.productName}</h6> &nbsp;
            <Button variant="primary" style={{marginTop: '-7px'}} onClick={deleteAProduct}>Delete Product</Button>
        </Col>
    );
};

export default ManageAProduct;
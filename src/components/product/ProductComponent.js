import React from 'react';
import './product.module.css';

const ProductComponent = ({item}) => {
    return (
        <div>
            <h2>{item.title} {item.price}</h2>
            <img src={item.image} align={item.title}/>
        </div>
    );
};

export default ProductComponent;
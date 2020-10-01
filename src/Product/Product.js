import React from 'react';
import product from './Product.module.css';



function Product(props) {
    return (
        <div className={product.product}>
            <div className={product.Img}>
                <img className={product.ProductImg} src={props.products.img} alt={"h"}/>
            </div>
            <div className={product.Name}>{props.products.name}</div>
            <h4>{props.products.price}</h4>
        </div>
    );
}


export default Product;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
   
 const {name,img,seller,ratings,price,id} =props.product;
    
    return (
        <div className='product' >
            <img  src={img} alt={id} ></img> 
            
            <div className='product-info'>
            <p className='product-name' >{name} </p>
            <p className='' >price: ${price}</p>
            <p className='' ><small>Seller:{seller}</small></p>
            <p className='' ><small>Ratings:{ratings} stars</small></p>
            </div>
             <button onClick={() => props.handleaAddToCart(props.product)} className='btn-cart'>
                    <p>Add to cart <span>
                    <FontAwesomeIcon
                    icon={faShoppingCart}
                    ></FontAwesomeIcon>
                    </span></p>
                </button>
        </div>
    );
};

export default Product;
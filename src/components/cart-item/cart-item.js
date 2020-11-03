import React from 'react';

import './cart-item.scss';

const CartItem = ({item})=>{
    const {name , imageUrl , price , quantity} = item;
    return(
        <div className='cart-item'>
            <div className='cart-img'>
                <img src={imageUrl}></img>
            </div>
            <div className='cart-info'>
                <h3>{name}</h3>
                <span>{price}$ x {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;
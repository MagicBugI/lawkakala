import React from 'react';
import {increaseQuantity , decreaseQuantity , removeItem} from '../../redux/cart/cart.action'
import './checkout-item.scss';
import {connect} from 'react-redux'

const CheckoutItem = ({item , increaseQuantity , decreaseQuantity , removeItem})=>{
    const {name , imageUrl , price , quantity} = item;
    return (
        <div className='checkout-item'>
            <div className='item-block'>
                <img src={imageUrl}></img>
            </div>
            <div className='item-block'>
                <span>{name}</span>
            </div>
            <div className='item-block item-quantity'>
                <span onClick={()=> decreaseQuantity(item)} className='arrow'>&#10094;</span>
                <span>{quantity}</span>
                <span onClick={()=> increaseQuantity(item)} className='arrow'>&#10095;</span>
            </div>
            <div className='item-block'>
                <span>{price}$</span>
            </div>
            <div className='item-block'>
                <span className='remove' onClick={()=> removeItem(item)}>&#10005;</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    decreaseQuantity : user => dispatch(decreaseQuantity(user)),
    increaseQuantity : user => dispatch(increaseQuantity(user)),
    removeItem : user => dispatch(removeItem(user))
});


export default connect(null , mapDispatchToProps)(CheckoutItem);
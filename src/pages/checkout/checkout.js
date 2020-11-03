import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item';
import {selectCartItems , selectTotalPrice} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';

import './checkout.scss';

const CheckOut = ({items , totalPrice})=>{
    return(
        <div className='checkout'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            <div className='checkout-main'>
                {items.map(item=><CheckoutItem key={item.id} item={item}></CheckoutItem>)}
            </div>
            <div className='total-price'>
                <span>Total price: {totalPrice} $</span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    items : selectCartItems(state),
    totalPrice : selectTotalPrice(state)
})

export default connect(mapStateToProps)(CheckOut);
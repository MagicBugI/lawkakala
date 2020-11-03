import React from 'react';

import './cart-dropdown.scss';
import CustomBtn from '../custom-btn/custom-btn';
import CartItem from '../cart-item/cart-item';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {Link , withRouter} from 'react-router-dom';
import {setCart} from '../../redux/cart/cart.action';

import {connect} from 'react-redux';

const listCreator = (arr) =>{
    return arr.map(item => <CartItem key={item.id} item={item}></CartItem>)
}

const CartDropdown = ({items , history , setCart})=>{
    return(
        <div className='cart-dropdown'>
            <div className='items'>
               {
                   items.length ?
                   listCreator(items):
                   <span className='empty-message'>Your cart is empty</span>
               }
            </div>
            <CustomBtn onClick={()=>{
                history.push('/checkout');
                setCart();
                }}> CHECKOUT 
            </CustomBtn>
        </div>
    )
}

const mapStateToProps = state =>({
    items:selectCartItems(state)
})
const mapDispatchFromProps = dispatch =>({
    setCart : () => dispatch(setCart())
})

export default withRouter(connect(mapStateToProps , mapDispatchFromProps)(CartDropdown));
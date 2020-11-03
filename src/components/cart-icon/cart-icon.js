import React from 'react';
import {connect} from 'react-redux';
import {setCart} from '../../redux/cart/cart.action';
import {selectItemsQuantity} from '../../redux/cart/cart.selectors'


import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({setCart , items})=>{
    return(
        <div className='cart-icon' onClick={()=>setCart()}>
            <ShoppingIcon className='icon'></ShoppingIcon>
            <span   span className='cart-count'>{items}</span>
        </div>
    )
};

const mapDispatchFromProps = dispatch =>({
    setCart : () => dispatch(setCart())
})

const mapStateToProps = state =>({
    items : selectItemsQuantity(state)
})


export default connect(mapStateToProps , mapDispatchFromProps)(CartIcon);
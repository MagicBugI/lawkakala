import { createStore } from 'redux';
import {createSelector} from 'reselect'

const cart = state => state.cart.items;
const hidden = state => state.cart.isShowed;

export const selectItemsQuantity = createSelector(
    cart,
    items => items.reduce((acc , item)=> acc + item.quantity, 0)
);

export const selectCartItems = createSelector(
    cart , 
    cart => cart
);

export const selectCartHidden = createSelector(
    hidden,
    hidden => hidden
);

export const selectTotalPrice = createSelector(
    cart , 
    items => items.reduce((acc , item) => acc += item.price * item.quantity , 0 )
)



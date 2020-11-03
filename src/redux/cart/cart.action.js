import {CartTypes} from './cart.types';

export const setCart = ()=>({
    type:CartTypes.SET_CART
});

export const setItem = (item)=>({
    type:CartTypes.SET_ITEM,
    payload:item
});

export const increaseQuantity = (item)=>({
    type: CartTypes.INCREASE_ITEM,
    payload:item
})

export const decreaseQuantity = (item)=>({
    type: CartTypes.DECREASE_ITEM,
    payload:item
});

export const removeItem = (item) =>({
    type:CartTypes.REMOVE_ITEM,
    payload:item
});
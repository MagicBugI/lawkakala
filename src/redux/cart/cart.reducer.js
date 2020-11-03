import { CartTypes } from './cart.types';
import { addItemToCart, increaseCurrentItem, decreaseCurrentItem , removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    isShowed: false,
    items: []
}

const cartReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case CartTypes.SET_CART:
            return {
                ...state,
                isShowed: !state.isShowed
            }
        case CartTypes.SET_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, actions.payload)
            }
        case CartTypes.INCREASE_ITEM:
            return {
                ...state,
                items: increaseCurrentItem(state.items, actions.payload)
            }
        case CartTypes.DECREASE_ITEM:
            return {
                ...state,
                items: decreaseCurrentItem(state.items, actions.payload)
            }
        case CartTypes.REMOVE_ITEM:
            return {
                ...state , 
                items:removeItemFromCart(state.items , actions.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;

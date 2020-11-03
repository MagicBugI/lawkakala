import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import testReducer from './test/test.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    user:userReducer,
    test:testReducer,
    cart:cartReducer
});
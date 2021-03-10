import { combineReducers } from 'redux'
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart-reducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import menuReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';


const persistConfig = 
{
    key: "root",
    storage,
    whitelist: ["cart"]// this basically tells what to persist.
};

const rootReducer = combineReducers({

    user: userReducer,
    cart : CartReducer, 
    menu : menuReducer, 
    shop : shopReducer 
});

export default persistReducer(persistConfig, rootReducer);


// persistreducer now returns a modified version of rootreducer with persistconfig 
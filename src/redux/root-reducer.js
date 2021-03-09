import { combineReducers } from 'redux'
import userReducer from './user/user.reducer';
import CartReducer from './cart/cart-reducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = 
{
    key: "root",
    storage,
    whitelist: ["cart"]// this basically tells what to persist.
};

const rootReducer = combineReducers({

    user: userReducer,
    cart : CartReducer
});

export default persistReducer(persistConfig, rootReducer);


// persistreducer now returns a modified version of rootreducer with persistconfig 
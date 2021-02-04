import {CartActionTypes} from './cart-types'

const INITIAL_STATE ={

    hidden : true,
    cartItems : []

}

const CartReducer = (currentState = INITIAL_STATE, action) =>
{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN :
            return{

                ...currentState,
                hidden: !currentState.hidden
            }
        case CartActionTypes.ADD_ITEM :
            return{

                ...currentState,
                cartItems : [...currentState.cartItems , action.payload] 
            }
        default:
            return currentState; 
    }
}


export default CartReducer;
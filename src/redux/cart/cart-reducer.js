import {CartActionTypes} from './cart-types'
import {addItemToCart,RemoveItemFromCart} from './cart-utils'

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
                cartItems : addItemToCart(currentState.cartItems , action.payload) 
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...currentState,
                cartItems : RemoveItemFromCart(currentState.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM : 
            return{
                ...currentState,
                cartItems : currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return currentState; 
    }
}


export default CartReducer;
import {CartActionTypes} from './cart-types'

const ToggleCartHidden = () => (
    {
        type : CartActionTypes.TOGGLE_CART_HIDDEN
    }
)

export const AddCartItem = item =>
(
    {
        type : CartActionTypes.ADD_ITEM,
        payload : item
    }
)

export const RemoveCartItem = item =>
(
    {
        type : CartActionTypes.REMOVE_ITEM,
        payload : item 
    }
)

export const ClearCartItem = item =>
(
    {
        type : CartActionTypes.CLEAR_ITEM,
        payload : item
    }
)

export default ToggleCartHidden



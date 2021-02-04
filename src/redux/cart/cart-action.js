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

export default ToggleCartHidden



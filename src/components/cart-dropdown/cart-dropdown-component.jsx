import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown-styles.scss'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart-selector'

const CartDropdown = ({ cartItems }) =>
(
    <div className='cart-dropdown text-white'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                
                    (<CartItem key={cartItem.id} item={cartItem}/>)
                
                )
            }
        </div>
        <CustomButton type='button' styles='btn btn-dark button'>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state =>
(
    
    {
        cartItems: selectCartItems(state)
    }
    
)
// ({ cart: { cartItems } }) , without selector
export default connect(mapStateToProps)(CartDropdown)


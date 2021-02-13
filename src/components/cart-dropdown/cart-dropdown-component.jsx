import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown-styles.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import CheckoutComponent  from '../../pages/checkout/checkout-component'
import { selectCartItems } from '../../redux/cart/cart-selector'


// since withRouter is enabled we can now use history.push method
const CartDropdown = ({ cartItems, history }) =>
(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {  
                cartItems.length ?
                (cartItems.map(cartItem => 
                
                    (<CartItem key={cartItem.id} item={cartItem}/>)
                
                ))

                :
                (
                    <span className='empty-cart'>YOUR CART IS EMPTY!</span>
                )
                
                
            }
        </div> 
          
        <CustomButton type='button' styles='btn btn-dark button' onClick = {()=> history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state =>
(
    
    {
        cartItems: selectCartItems(state)
    }
    
)
// ({ cart: { cartItems } }) , without selector
export default withRouter(connect(mapStateToProps)(CartDropdown))

// withRouter gets the components from cartdropdown and to which history match and 'params' are passed into, therefore order of wrapping matters.


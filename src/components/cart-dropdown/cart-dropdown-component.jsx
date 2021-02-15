import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown-styles.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import  ToggleCartHidden  from '../../redux/cart/cart-action'
import { selectCartItems } from '../../redux/cart/cart-selector'


// since withRouter is enabled we can now use history.push method
const CartDropdown = ({ cartItems, history, dispatch }) =>
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
          
        <CustomButton type='button' styles='btn btn-dark button' onClick = {()=> {
            history.push('/checkout'); 
            dispatch(ToggleCartHidden());}}>GO TO CHECKOUT</CustomButton>
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

// in connect if we dont pass in mapDispatchToProps , it automatically passes it onto the component, it does this so that its easier for us to one line dispatch calls and we wont have to write mapdispatch for it. we can access it as other props 
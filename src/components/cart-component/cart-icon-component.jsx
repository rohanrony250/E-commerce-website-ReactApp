import React from 'react';
import { connect } from 'react-redux'
import ToggleCartHidden from '../../redux/cart/cart-action'
import { ReactComponent as ShoppingIcon } from '../../resources/cart-icon.svg';
import './cart-icon-styles.scss';


const CartComponent = ({ToggleCartHidden, itemCount}) => (

    <div className='cart-icon' onClick = {ToggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> {itemCount} </span>
    </div>
)

const mapDispatchToProps = dispatch => (
    {
        ToggleCartHidden : () => dispatch(ToggleCartHidden())
    }
)

const mapStateToProps = ({cart: {cartItems}}) => (
    {
        itemCount : cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,0)
        // here everything before '0' is the total value that we need , and '0' is the initial value/currentvalue if an existing value is not passed in.
    }
) 

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent)
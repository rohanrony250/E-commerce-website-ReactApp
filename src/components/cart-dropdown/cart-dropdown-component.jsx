import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown-styles.scss'


const CartDropdown = () =>
(
    <div className='cart-dropdown text-white'>
        <div className='cart-items'></div>
        <CustomButton type='button' styles='btn btn-dark button'>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown
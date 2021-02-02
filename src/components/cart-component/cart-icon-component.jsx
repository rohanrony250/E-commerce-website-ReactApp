import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../resources/cart-icon.svg';
import './cart-icon-styles.scss';


const CartComponent = () => (

    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'> 0 </span>
    </div>
)

export default CartComponent
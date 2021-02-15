import React from 'react'
import './checkout-item-styles.scss'
import {ClearCartItem} from '../../redux/cart/cart-action'
import { connect } from 'react-redux'
const CheckoutItem = ({cartItem, clearItem}) =>
{
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className = 'image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearItem(cartItem)}>
                &#10008;
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch =>
(
    {
        
        clearItem: item => dispatch(ClearCartItem(item))
    
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem)
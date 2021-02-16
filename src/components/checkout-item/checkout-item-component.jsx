import React from 'react'
import './checkout-item-styles.scss'
import {ClearCartItem,AddCartItem} from '../../redux/cart/cart-action'
import { connect } from 'react-redux'
const CheckoutItem = ({cartItem, clearCheckoutItem, addItem}) =>
{
    const {name, imageUrl, price, quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className = 'image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=> clearCheckoutItem(cartItem)}>
                &#10008;
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch =>
(
    {
        
        clearCheckoutItem: item => dispatch(ClearCartItem(item)),
        addItem: item => dispatch(AddCartItem(item))
    
    }
)

export default connect(null, mapDispatchToProps)(CheckoutItem)
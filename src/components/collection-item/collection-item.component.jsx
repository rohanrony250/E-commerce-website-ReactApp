import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { AddCartItem } from '../../redux/cart/cart-action'
import { connect } from 'react-redux'
const CollectionItem = ({item, AddCartItem}) =>
{
    const {name, imageUrl, price} = item
    return(
        <div className = 'collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='collection-footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
            </div>
            
            <CustomButton type='button' styles = 'btn btn-light' onClick = {()=> AddCartItem(item)}>ADD TO CART</CustomButton>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({

    AddCartItem : item => dispatch(AddCartItem(item))
})

export default connect(null , mapDispatchToProps)(CollectionItem)
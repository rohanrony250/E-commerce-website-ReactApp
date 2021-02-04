import React from 'react'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

const CollectionItem = ({id, name, imageUrl, price}) =>
(
    <div className = 'collection-item'>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'> {price} </span>
        </div>
        
        <CustomButton type='button' styles = 'btn btn-light'>ADD TO CART</CustomButton>
        
    </div>
)

export default CollectionItem
import React from 'react'
import SHOP_ITEMS from './shop-items'
import CollectionPreview from '../../components/shop-collection/shop-collection-preview'
class Shop_component extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            collections: SHOP_ITEMS
        }
        
    }

    render()
    {   const {collections} = this.state 
        return(
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))
            }
        </div>
            
        )
    }
}

export default Shop_component
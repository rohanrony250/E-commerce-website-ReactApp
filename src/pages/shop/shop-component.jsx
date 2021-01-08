import React from 'react'
import SHOP_ITEMS from './shop-items'
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
    {
        return(
            <div>Shop Page Loading...</div>
        )
    }
}

export default Shop_component
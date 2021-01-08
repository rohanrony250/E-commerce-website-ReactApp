import React from 'react'
import SHOP_ITEMS from './shop-items'
class shop extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            collections: SHOP_ITEMS
        }
        
    }
}
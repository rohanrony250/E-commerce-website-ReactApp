import React from 'react'
import CollectionsOverview from '../../components/shop-collection-overview/shop-collection-overview-component'
import CategoryPage from '../../pages/category/category-component'
import {Route} from 'react-router-dom';


const Shop_component = ({match}) =>
{
    console.log(match)    
    return(
        <div className='shop-page'>
           <Route exact path = {`${match.path}`} component = {CollectionsOverview} />
           <Route path = {`${match.path}/:collectionId`} component = {CategoryPage} />
        </div>
    )
        
            
}




export default Shop_component
import React from 'react'
import './category-styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'


const CategoryPage = ({match}) =>
{
    console.log(match.params.collectionId)
    return(
        <div className='category'>
            <h2>test category</h2>
        </div>
    )
}

export default CategoryPage
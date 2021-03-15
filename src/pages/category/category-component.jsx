import React from 'react'
import './category-styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'
import {selectCollection} from '../../redux/shop/shop-selector'

const CategoryPage = ({collecion}) =>
{
    console.log(collecion)
    return(
        <div className='category'>
            <h2>test category</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryPage)
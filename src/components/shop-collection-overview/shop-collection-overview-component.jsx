import React from 'react'
import './shop-collection-overview-styles.scss'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../shop-collection/shop-collection-preview'
import { selectCollectionItems } from '../../redux/shop/shop-selector'

const CollectionsOverview = ({collections}) =>
(
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionItems
})
export default connect(mapStateToProps)(CollectionsOverview)

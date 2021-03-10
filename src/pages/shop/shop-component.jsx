import React from 'react'
import CollectionPreview from '../../components/shop-collection/shop-collection-preview'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCollectionItems } from '../../redux/shop/shop-selector'

const Shop_component = ({collections}) =>
(
        <div className='shop-page'>
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

export default connect(mapStateToProps)(Shop_component)
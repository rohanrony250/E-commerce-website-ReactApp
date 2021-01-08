import React from 'react'
import './shop-collection.styles.scss'

const CollectionPreview = ({title,items}) =>
(
    <div className='collection-preview'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {
                items
                .filter((item,idx) => idx < 4) 
                
                // filter() has callback with three arguments by default:
                //     1. value of element (item)
                //     2. index of element (idx)
                //     3. array object being traversed.
                
                .map(item => (
                    <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview
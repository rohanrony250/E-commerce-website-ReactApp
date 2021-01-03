import React from 'react'
import './menu.item-styles.scss'

const MenuItem = ({title,imageUrl,size}) =>
(
    <div className={`${size} menu-item`} style={{backgroundImage: `url(${imageUrl})`}}>
        <div className='item-content'>
            <h1 className='title'>
                {title}
            </h1>
            <span className='subtitle'>
                SHOP NOW
            </span>
        </div>
    </div>
)

export default MenuItem
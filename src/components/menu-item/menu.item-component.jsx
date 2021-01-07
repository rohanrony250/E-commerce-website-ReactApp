import React from 'react'
import {withRouter} from 'react-router-dom'
import './menu.item-styles.scss'

const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) =>
(
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}> 
        {/* history method finds the url to goto by using the match method within so that react knows where to go for each item in the menu, eg: hats will lead to hats page */}
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='item-content'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <span className='subtitle'>
                SHOP NOW
            </span>
        </div>
    </div>
)

export default withRouter(MenuItem)
import React from 'react'
import MenuItem from '../menu-item/menu.item-component'
import './menu-styles.scss'
import { connect } from 'react-redux'
import {selectMenuItems} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from 'reselect'
const MenuComponent = ({items}) =>
(
    <div className='menu'>
        {
            items.map(({id,...otherSectionProps}) =>(
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div> 
)

const mapStateToProps = createStructuredSelector({
    items: selectMenuItems
})

export default connect(mapStateToProps)(MenuComponent)
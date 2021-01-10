import React from 'react'
import './header-styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../resources/crown.svg'
const HeaderComponent = () =>
(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/contact' className='option'>
                CONTACT
            </Link>
            <Link to='/login' className='option'>
                SIGN IN
            </Link>
        </div>
    </div>
)

export default HeaderComponent
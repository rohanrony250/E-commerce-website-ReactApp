import React from 'react'
import './header-styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../resources/crown.svg'
import { connect } from 'react-redux';
import { auth } from '../../Firebase/firebase-utils';
import CartComponent from '../cart-component/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
const HeaderComponent = ({ currentUser, hidden}) =>
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
            
            {
                currentUser ?
                (
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                )

                :

                <Link to='/login' className='option'>SIGN IN</Link>
            }

            <CartComponent/>
            
        </div>
        
        {   hidden ? null : <CartDropdown/> }
        

    </div>
)

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => (
    {
        currentUser,
        hidden
    }
)

export default connect(mapStateToProps)(HeaderComponent)
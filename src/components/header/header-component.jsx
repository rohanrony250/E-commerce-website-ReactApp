import React from 'react'
import './header-styles.scss'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../resources/crown.svg'
import { connect } from 'react-redux';
import { auth } from '../../Firebase/firebase-utils';
import CartComponent from '../cart-component/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectCartToggle } from '../../redux/cart/cart-selector'
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

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartToggle
    }
)

// can also use 'state' instead of createstructuredselector like mapStateToProps = state => ({currentUser: selectCurrentUser(state)}) like in previous methods , but the above method reduces rewriting of codes.

export default connect(mapStateToProps)(HeaderComponent)
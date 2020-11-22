import React from 'react';

import {connect} from 'react-redux'

import { Link, BrowserRouter as Router } from 'react-router-dom'

import './header.scss';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon';

import CartDropdown from '../cart-dropdown/cart-dropdown';

import Homepage from '../../pages/homepage/homepage';

import {selectCartHidden} from '../../redux/cart/cart.selectors';

import {selectUser} from '../../redux/user/user.selectors'

const Header = ({currentUser , cart }) => {
    return (
        <div className='header'>
            <div className='header_logo'>
                    <Link to='/'>
                        <Logo></Logo>
                    </Link>
            </div>
            <div className='header_navigator'>
                    <Link to='/shop'>Shop</Link>
                    {
                        currentUser?
                        <div className='option' onClick={()=>auth.signOut()}>Sing Out</div>:
                        <Link to='/sing'>Sing In</Link>
                    }
                    <CartIcon></CartIcon>
            </div>
             {
                 cart ?
                 <CartDropdown></CartDropdown>:
                 null
             }

        </div>
    )
}

const mapStateToProps = state =>({
    currentUser:selectUser(state),
    cart : selectCartHidden(state)
})

export default connect(mapStateToProps)(Header) ;
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../lib/auth/index';
import { HeaderContainer, HeaderMenu, HeaderLogo, HeaderNav, LogOffButton } from './styles';

class Header extends Component {
    state = {
        activePage: ''
    }

    handleLogout = async () => {
        logout();
        this.props.history.push('/')
    }

    render() {
        return (
            <HeaderMenu>
                <HeaderLogo>
                    <Link to="/app">
                        <i className="fa fa-play-circle"></i>
                        PlayShare
                    </Link>
                </HeaderLogo>
            <HeaderNav>
                <Link to="/records"><div><i className="fa fa-headphones"></i></div></Link>
                <Link to="/cart"><div><i className="fa fa-shopping-cart"></i></div></Link>
                <Link to=""><div><i className="fa fa-user"></i></div></Link>
            </HeaderNav>
            <LogOffButton onClick={this.handleLogout}><i className="fa fa-sign-out"></i></LogOffButton>
        </HeaderMenu>
        )
    }
}

export default withRouter(Header);

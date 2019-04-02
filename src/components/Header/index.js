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
            <HeaderContainer>
                <HeaderMenu>
                    <HeaderLogo>
                        <Link to="/app">
                            <i className="fa fa-play-circle"></i>
                            MelodyShare
                        </Link>
                    </HeaderLogo>
                <HeaderNav>
                    <ul>
                        <li><Link to="/cart">Carrinho</Link></li>
                        <li><Link to="/records">Discos</Link></li>
                        <li><Link to="/records">Perfil</Link></li>
                    </ul>
                </HeaderNav>
                <LogOffButton onClick={this.handleLogout}>Sair</LogOffButton>
            </HeaderMenu>
        </HeaderContainer>
        )
    }
}

export default withRouter(Header);
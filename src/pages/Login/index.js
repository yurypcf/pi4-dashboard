import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../lib/api/index';
import { login } from '../../lib/auth/index';
import Logo from '../../assets/ms_logo.png';
import { Form, Container } from '../../components/Form/index';

class Login extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleLogin = async e => {
        e.preventDefault();

        const { email, password } = this.state

        if (!email || !password) {
            this.setState({ error: 'Preencha email e senha para se autenticar'})
        } else {
            try {
                const response = await api.post('/sessions', { email, password});
                login(response.data.token)
                this.props.history.push('/app')
            } catch (err) {
                console.log(err);
                this.setState({ error: 'Por favor, verifique suas credenciais'})
            }
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleLogin}>
                    <img src={Logo} alt="MelodyShare logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Login</button>
                    <hr />
                    <Link to="/register">Não possui um registro?</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Login);
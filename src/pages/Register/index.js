import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import api from '../../lib/api/index';
import Logo from '../../assets/ms_logo.png';
import { Form, Container } from '../../components/Form/index';

class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: ''
    };

    handleRegister = async e => {
        e.preventDefault();
        
        const { username, email, password } = this.state

        if (!username  || !email || !password) {
            this.setState({ error: 'Preencha todos os campos para se cadastrar'})
        } else {
            try {
                await api.post('/users', { username, email, password });
                this.props.history.push('/')
            } catch (err) {
                console.log(err);
                this.setState({ error: 'Ocorreu algum erro ao registrar a conta'})
            }
        }
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleRegister}>
                    <img src={Logo} alt="MelodyShare logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
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
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <Link to="/">Fazer login</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(Register);

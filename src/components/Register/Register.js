import React, { Component } from 'react';
import API from '../../server/API';
import Input from '../Form/Input';
import './register.css';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    onFormSubmit = e => {
        e.preventDefault()

        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        API.post('/register', newUser)
        this.props.history.push('/login')
    }

    onFormChange = e => {
        this.setState( {[e.target.name]: e.target.value } )
    }

    render() {
        return (
            <div>
            <h1>Registro</h1>
                <form noValidate onSubmit={this.onFormSubmit}>
                    <Input
                        label='Email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onFormChange}
                    />
                    <Input
                        label='Usuário'
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.onFormChange}
                    />
                    <Input
                        label='Senha'
                        type='password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onFormChange}
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
    }
}

export default Register
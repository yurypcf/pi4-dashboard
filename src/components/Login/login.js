import React, { Component } from 'react';
import API from '../../server/API';
import Input from '../Form/Input';
import './login.css';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        };
    }

    onFormSubmit = e => {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        API.login(user)

    }

    onFormChange = e => {
        this.setState( {[e.target.name]: e.target.value } )
    }

    render() {
        return (
            <div>
            <h1>Login</h1>
                <form noValidate onSubmit={this.onFormSubmit}>
                    <Input
                        label='Email'
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.onFormChange}
                    />
                    <Input
                        label='Senha'
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.onFormChange}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
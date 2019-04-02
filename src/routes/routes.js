import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../lib/auth/index';
import Register from '../pages/Register';
import Login from '../pages/Login';
import App from '../pages/App';
import Header from '../components/Header';
import Records from '../pages/App/Records';
import Cart from '../pages/App/Cart';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <div>
        <Header />
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location} }} />
                )
            }
        />
    </div>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute path='/app' component={App} />
            <PrivateRoute path='/records' component={Records} />
            <PrivateRoute path='/cart' component={Cart} />
            <Route exact path='/' component={Login} />
            <Route path='/register' component={Register}/>
            <Route path='*' component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
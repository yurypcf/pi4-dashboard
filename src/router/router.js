import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Grid } from 'react-bootstrap';
import { createBrowserHistory } from 'history';
import App from '../App';
import Register from '../components/Register/Register';
import Login from "../components/Login/login";

const ReactRouter = () => {
    return (
        <Grid fluid style={{ height: '100vh'}}>
            <Fragment>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossorigin="anonymous"
                />
                <Route exact path="/" component={App} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Fragment>
        </Grid>
    )
}

export default ReactRouter
import React, { Component } from 'react';
import api from '../../lib/api/index';
import { withRouter } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            records: []
        }
    }

    componentDidMount() {
        this.loadRecords();
    }

    loadRecords = async () => {
        try {
            const response = await api.get('/records');
            this.setState({ records: response.data });
        } catch(err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                FODASE
            </div>
        )
    }
}

export default withRouter(App);

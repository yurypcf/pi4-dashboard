import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import api from '../../lib/api/index';

import Records from '../../components/Records';

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
        const { records } = this.state;
        return (
            <Records records={records} />
        )
    }
}

export default App;
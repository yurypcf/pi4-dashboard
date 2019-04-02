import React, { Component } from "react";
import api from '../../../lib/api/index';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { RecordsContainer, RecordsHeader, RecordsBody } from "./styles";
import RecordItem from '../../../components/RecordItem';

class Records extends Component {
    constructor() {
        super()
        this.state = {
            records: []
        }
    }

    componentWillMount() {
        this.loadRecords()
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
        console.log(records);
        return (
            <RecordsContainer>
                <RecordsHeader><i className="fa fa-headphones"></i>Discos</RecordsHeader>
                <RecordsBody>
                {records.map(rec => (
                    <RecordItem
                     imgPath={rec.images[0] ? rec.images[0].url : 'Missing Photo'}
                     title={rec.title}
                     artist={rec.artist}
                     genre={rec.genre}
                     price={rec.price}    
                     />
                ))}
                </RecordsBody>
            </RecordsContainer>
        )
    }
}

Records.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      artist: PropTypes.string,
      genre: PropTypes.string,
      price: PropTypes.number,
      images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            record_id: PropTypes.number,
            path: PropTypes.string
        })
      )
    })
  ).isRequired
};

export default withRouter(Records);
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Pin } from "./styles";

const intlMonetary = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2
});

const Records = ({ records }) =>
  records.map(record => (
      <Pin>
        <Link to="">{intlMonetary.format(record.price)}</Link>
      </Pin>
  ));

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

export default Records;
import React from "react";
import PropTypes from "prop-types";

function Search({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Search.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Serach;

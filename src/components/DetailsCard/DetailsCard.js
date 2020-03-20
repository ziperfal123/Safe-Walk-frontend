import React from 'react';
import PropTypes from 'prop-types';
import './detailsCard.scss';

const DetailsCard = ({ children }) => {
  console.log('DetailsCard');
  return (
    <div className="card-container">
      { children }
    </div>
  );
};

export default DetailsCard;

DetailsCard.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

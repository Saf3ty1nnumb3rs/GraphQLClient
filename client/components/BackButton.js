import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div style={{ 
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px'
        }}
      >
        <Link
        to="/"
        className="btn-floating btn-med raised blue left"
        style={{
          marginRight: '10px'
        }}
        >
        <i className="material-icons">arrow_back</i>
        </Link>
        <h6>Back To List</h6> 
      </div>
  );
};

export default BackButton;



import React from 'react';
import stylishImage from '../assets/stylish-earrings.jpg'; // Import your stylish image

const StylishEarStatements = () => {
  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    height: '400px', // Adjust the height as needed
    overflow: 'hidden',
    margin: '40px 0',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '-1',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '80%', // Adjust the max width as needed
  };

  const textStyle = {
    margin: '0',
  };

  return (
    <div style={containerStyle}>
      <img src={stylishImage} alt="Stylish Earrings" style={imageStyle} />
      <div style={textContainerStyle}>
        <p style={textStyle}>
          Refer to contemporary designs that embody current trends and styles. These earrings often feature...
        </p>
      </div>
    </div>
  );
};

export default StylishEarStatements;














import React from 'react';
import earringImage1 from '../assets/earring1.jpg'; // Import your earring images
import earringImage2 from '../assets/earring2.jpg';
import earringImage3 from '../assets/earring3.jpg';
import earringImage4 from '../assets/earring4.jpg';

const EarringsSection = () => {
  const earrings = [
    { id: 1, image: earringImage1, price: '$25' },
    { id: 2, image: earringImage2, price: '$35' },
    { id: 3, image: earringImage3, price: '$30' },
    { id: 4, image: earringImage4, price: '$45' },
  ];

  const sectionStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for contrast
    borderRadius: '8px',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '200px',
    textAlign: 'center',
    padding: '10px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const priceStyle = {
    marginTop: '10px',
    fontSize: '18px',
    color: '#333',
  };

  return (
    <div style={sectionStyle}>
      <h2>Earrings Collection</h2>
      <div style={gridStyle}>
        {earrings.map((earring) => (
          <div style={cardStyle} key={earring.id}>
            <img src={earring.image} alt={`Earring ${earring.id}`} style={imageStyle} />
            <p style={priceStyle}>{earring.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarringsSection;


// src/components/CollectionSection.js
import React from 'react';
import necklaceImage from '../assets/necklace.jpg'; // Import your collection images
import earringsImage from '../assets/earring1.jpg';
import ringsImage from '../assets/rings.jpg';
import braceletsImage from '../assets/bracelets.jpg';

const CollectionSection = () => {
  const collections = [
    { id: 1, image: necklaceImage, name: 'Necklace' },
    { id: 2, image: earringsImage, name: 'Earrings' },
    { id: 3, image: ringsImage, name: 'Rings' },
    { id: 4, image: braceletsImage, name: 'Bracelets' },
  ];

  const collectionSectionStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const collectionGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  };

  const collectionCardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const collectionImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  const collectionNameStyle = {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={collectionSectionStyle}>
      <h2>Our Collection</h2>
      <div style={collectionGridStyle}>
        {collections.map((item) => (
          <div style={collectionCardStyle} key={item.id}>
            <img src={item.image} alt={item.name} style={collectionImageStyle} />
            <p style={collectionNameStyle}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;

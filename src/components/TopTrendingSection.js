// src/components/TopTrendingSection.js
import React from 'react';
import broochImage from '../assets/brooch.jpg'; // Import your images
import westernBrooch1Image from '../assets/western-brooch1.jpg';
import westernBrooch2Image from '../assets/western-brooch2.jpg';
import westernBrooch3Image from '../assets/western-brooch3.jpg';

const TopTrendingSection = () => {
  const trendingItems = [
    { id: 1, image: broochImage, name: 'Brooch' },
    { id: 2, image: westernBrooch1Image, name: 'Western Brooch 1' },
    { id: 3, image: westernBrooch2Image, name: 'Western Brooch 2' },
    { id: 4, image: westernBrooch3Image, name: 'Western Brooch 3' },
  ];

  const sectionStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
  };

  const cardStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  const nameStyle = {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={sectionStyle}>
      <h2>Top Trending</h2>
      <div style={gridStyle}>
        {trendingItems.map((item) => (
          <div style={cardStyle} key={item.id}>
            <img src={item.image} alt={item.name} style={imageStyle} />
            <p style={nameStyle}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingSection;

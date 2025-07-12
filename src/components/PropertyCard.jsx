import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div style={styles.card}>
      <img src={property.image} alt={property.title} style={styles.image} />
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p style={styles.price}>{property.price}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '16px',
    maxWidth: '300px',
    margin: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  price: {
    fontWeight: 'bold',
    color: '#27ae60',
  }
};

export default PropertyCard;

import React from 'react';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/properties';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Real Estate Listings</h1>
      <div style={styles.list}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
};

export default HomePage;

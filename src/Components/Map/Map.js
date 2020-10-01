import React from 'react';
import './Map.scss';
import Land from './Land';

/**
 * Map component- dynamically created svg.
 * passing back selected region on click
 */
const Map = ({ onClick, regionsList }) => {
  return (
    <section onClick={onClick} className="map-section">
      <svg className="map-svg" viewBox="-20 -20 650 620">
        {regionsList.map(regionData => {
          return <Land key={regionData.id} regionData={regionData} />;
        })}
      </svg>
    </section>
  );
};

export default Map;

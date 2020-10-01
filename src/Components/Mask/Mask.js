import React from 'react';
import './Mask.scss';
import { Link } from 'react-router-dom';

/**
 * Blocks rest of the site from beeing clickable after region was selected
 */
const Mask = ({ closeCarouselHandler }) => {
  return (
    <Link to="/">
      <span
        onClick={closeCarouselHandler}
        id="carousel-mask"
        className="carousel-mask"
      ></span>
    </Link>
  );
};

export default Mask;

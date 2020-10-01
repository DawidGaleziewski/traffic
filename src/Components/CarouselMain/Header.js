import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

// Renders header after  region was selected
const Header = ({ titleText, closeCarouselHandler }) => {
  return (
    <header className="carousel-main__header">
      <h2 className="carousel-main__title"> {titleText}</h2>
      {/* <button
        onClick={closeCarouselHandler}
        type="button"
        className="close btn-close-carousel"
      >
        <span aria-hidden="true">×</span>
      </button> */}

      <Link
        to="/"
        onClick={closeCarouselHandler}
        aria-hidden="true"
        type="button"
        className="close btn-close-carousel"
      >
        <span aria-hidden="true">×</span>
      </Link>
    </header>
  );
};

export default Header;

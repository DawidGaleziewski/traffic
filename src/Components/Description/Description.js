import React from 'react';
import './Description.scss';

/**
 * Description for the site
 */
const Description = () => {
  return (
    <article className="description">
      <h3 className="description__title">Wybierz województwo </h3>
      <p className="description__text">
        Wybierz województwo, dla którego chcesz zobaczyć promocje.
        <em className="description--strong">
          {' '}
          Czas promocji jest ograniczony czasowo.
        </em>
      </p>
    </article>
  );
};

export default Description;

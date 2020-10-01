import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header';
import ImageCarousel from './ImageCarousel';
import { Carousel } from 'react-bootstrap';
import { ReactComponent as ImageItemNotFound } from '../../assets/undraw_empty.svg';
import './CarouselMain.scss';

/**
 * Render Carousel with slider
 */
const CarouselMain = ({
  merchansideList,
  setCarouselIndexState,
  carouselIndexState,
  closeCarouselHandler,
  regionState,
  regionsList
}) => {
  /**
   * Adds css transitions only after the component was mounted
   */
  useEffect(() => {
    onMountUIHandler();
  }, []);

  /**
   * Returns full name of the region i.e from PL-DS => Dolno-Śląskie
   * @param {Array} regionsList
   * @param {String} regionState
   * @returns {String}
   */
  const findRegionFullName = (regionsList, regionState) => {
    const regionName = regionState
      ? regionsList.filter(region => {
          return region.id === regionState;
        })[0].regionFullName
      : 'regionie';

    return regionName;
  };

  /**
   * @typedef {String} regionNameState - stores full name of the region
   */
  const [regionNameState, setRegionNameState] = useState(
    findRegionFullName(regionsList, regionState)
  );

  /**
   * Handles transitions after this component is mounted
   * @returns {void}
   */
  const onMountUIHandler = () => {
    const UICarouselMain = document.getElementById('carousel-main');
    UICarouselMain.style.opacity = '1';
  };
  /**
   * Used by bootstrap to auto scroll the slider
   */
  const onSelectHandler = (selectedIndex, event) => {
    setCarouselIndexState(selectedIndex);
  };

  return (
    <Fragment>
      <section id="carousel-main" className="carousel-main">
        {merchansideList.length > 0 ? (
          <Fragment>
            <Header
              titleText={`Dostępne w ${regionNameState}`}
              closeCarouselHandler={closeCarouselHandler}
            />
            <Carousel
              slide={true}
              activeIndex={carouselIndexState}
              onSelect={onSelectHandler}
            >
              {/* Render one slide per item */}
              {merchansideList.map(merchanside => {
                const { id, itemName, imageUrl, description } = merchanside;
                return (
                  <Carousel.Item className="carousel-item" key={id.toString()}>
                    <ImageCarousel src={imageUrl} alt={itemName} />
                    <Carousel.Caption className="carousel-item__caption">
                      <h3>{itemName}</h3>
                      <p>{description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Fragment>
        ) : (
          // Inform no items are available for region
          <Fragment>
            <Header
              titleText={` ${
                regionState
                  ? `Brak promocji w ${regionNameState}`
                  : 'Ups coś poszło nie tak'
              }`}
              closeCarouselHandler={closeCarouselHandler}
            />
            <ImageItemNotFound className="img--not-found" />
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

export default CarouselMain;

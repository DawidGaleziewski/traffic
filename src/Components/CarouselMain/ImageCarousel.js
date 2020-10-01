import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * Single image element in the carousel
 */
const ImageLazyLoad = ({ ...props }) => {
  /**
   *  @typedef {Number} imageHeightState - stores image height. Used in order to take up space in the DOM by placeholder in lazy oading
   */
  const [imageHeightState, setImageHeightState] = useState(400);
  /**
   * url for the image
   * @type {String}
   */
  const { src } = props.src;

  /**
   * Attempts to fetch image in setInterval. As soon as the image height is set it cancels the attempt
   */
  useEffect(() => {
    const imageElement = document.createElement('img');
    imageElement.src = src;
    const getImageHeight = setInterval(function() {
      if (imageElement.naturalHeight) {
        clearInterval(getImageHeight);
        setImageHeightState(imageElement.naturalHeight);
      }
    }, 10);
    return () => {
      clearInterval(getImageHeight);
    };
  }, [src]);

  return (
    <LazyLoadImage
      className="d-block w-100"
      height={imageHeightState}
      {...props}
    />
  );
};

export default ImageLazyLoad;

import React, { useState, useEffect } from "react";

// Npm packages
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Style
import "./Container.scss";

// Components
import Mask from "./Mask/Mask";
import NavMain from "./NavMain/NavMain";
import CarouselMain from "./CarouselMain/CarouselMain";
import Map from "./Map/Map";
import Description from "./Description/Description";
import Footer from "./Footer/Footer";
import Chart from "./Chart/Chart";

// @ts-ignore
const { regions: regionsList } = require("../data/regions.json");

/**
 * filterMerchandise - filters out region selected on the map
 * @param {Array<object>} merchandiseList
 * @param {String} regionID - state changing via on click event on the map
 * @returns {Array<object>}
 */
const filterMerchandise = (merchandiseList, regionID) => {
  return merchandiseList.filter((merchandise) => {
    return merchandise.availableInRegions.includes(regionID);
  });
};

/**
 * Bootstraping all components
 */
const Container = () => {
  /**
   *  @typedef {(String|Null)} regionState - stores currently selected region on map
   */
  const [regionState, setRegionState] = useState(null);
  const onClickHandler = (event) => {
    selectLand(event);
  };
  /**
   * @typedef {Array.<Object>} merchandiseState - stores array of objects. Items for sale.
   */
  const [merchandiseState, setMerchandiseState] = useState([]);
  /**
   * @typedef {{Number}} carouselIndexState - stores current slide index on carousel
   */
  const [carouselIndexState, setCarouselIndexState] = useState(0);

  /**
   * Fetch data with all merchendise.
   */
  useEffect(() => {
    axios.get("/merchandise.json").then(({ data }) => {
      const { merchandise } = data;
      console.log(data);
      setMerchandiseState(filterMerchandise(merchandise, regionState));
    });
  }, [regionState]);

  /**
   * selectLand - Operations done after region is clicked on map
   * @param {Event} clickEvent
   * @returns {void}
   */
  const selectLand = (clickEvent) => {
    const {
      // @ts-ignore
      target: { id },
    } = clickEvent;
    if (id.match(/^(PL-)/)) {
      setRegionState(id);
    }
  };

  /**
   * Clears all actions regarding previously selected region
   */
  const closeCarouselHandler = () => {
    setRegionState(null);
  };

  return (
    <Router>
      {/* Route for mask */}
      {/* <Route
        path="/merchandise/"
        render={(props) => <Mask closeCarouselHandler={closeCarouselHandler} />}
      /> */}
      <header>
        <NavMain />
      </header>

      <main className="main">
        <h1 className="main-header">Empik lokalne promocje</h1>
        <Description />
        <Map onClick={onClickHandler} regionsList={regionsList} />

        <Route path="/:id" component={Chart} />
      </main>

      {/* <Footer regionsList={regionsList} /> */}
    </Router>
  );
};

export default Container;

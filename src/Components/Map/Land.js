import React from "react";
import { Link } from "react-router-dom";

/**
 * Returns a single svg path drawing one region on the map
 */
const Land = ({ regionData }) => {
  const { id, regionFullName, svgPathDraw } = regionData;
  return (
    <Link className="land" to={`/${id}`} title={regionFullName}>
      <path d={svgPathDraw} id={id} />
    </Link>
  );
};

export default Land;

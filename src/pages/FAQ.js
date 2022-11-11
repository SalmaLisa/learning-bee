import React from "react";
import { useTitle } from "../Hooks/useTitle";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const FAQ = () => {
  useTitle('FAQ')
  return (
    <div>
      <h1 className="text-5xl mt-16 mb-96 text-center font-bold">
        Frequently Asked Questions Coming Soon !
      </h1>
      
    </div>
  );
};

export default FAQ;

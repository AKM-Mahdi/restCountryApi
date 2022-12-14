import React from "react";
import { useLoaderData } from "react-router-dom";

import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const countries = useLoaderData();

  return (
    <div className="container">
      <div className="counteries_temp">
        {countries.map((country, index) => (
          <Country key={index} data={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

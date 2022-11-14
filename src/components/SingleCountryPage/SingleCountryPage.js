import React from "react";
import { useLoaderData } from "react-router-dom";
import "../SingleCountryPage/SingleCountry.css";

const SingleCountryPage = () => {
  const singleCountryData = useLoaderData();
  console.log(singleCountryData[0]);
  const {
    name: { common: countryName },
    capital: capitalOfCountry,
    flags: { svg: image },
    region,
  } = singleCountryData[0];

  console.log(image);

  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <h3>{countryName}</h3>
        <h6>{capitalOfCountry}</h6>
        <p>Region : {region}</p>
      </div>
    </div>
  );
};

export default SingleCountryPage;

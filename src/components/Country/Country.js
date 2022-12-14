import React from "react";
import { Link } from "react-router-dom";
import "./country.css";

const Country = (props) => {
  // console.log(props.data);
  const {
    name: { common: countryName },
    capital: capitalOfCountry,
    flags: { svg: image },
    region,
  } = props.data;

  return (
    <div className="country border border-sm m-3 rounded">
      <img src={image} alt="" />
      <div className="p-3">
        <h5>
          <span className="title"></span>
          {countryName}
        </h5>
        <h6>
          <span className="title">Capital: </span>
          {capitalOfCountry}
        </h6>
        <p>
          <span className="title">Regions: </span>
          {region}
        </p>
        <Link to={`/country/${countryName}`}>See More</Link>
      </div>
    </div>
  );
};

export default Country;

import React from "react";
import "./country.css";

const Country = (props) => {
  console.log(props);
  const {
    name: countryName,
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
      </div>
    </div>
  );
};

export default Country;

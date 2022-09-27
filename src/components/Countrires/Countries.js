import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countrires, setCountries] = useState([]);

  let data = "all";
  useEffect(() => {
    var url = `https://restcountries.com/v2/${data}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, [data]);

  return (
    <div className="container">
      <div className="counteries_temp">
        {countrires.map((country, index) => (
          <Country key={index} data={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

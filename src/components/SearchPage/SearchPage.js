import React from "react";
import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const SearchPage = () => {
  const searchResullt = useLoaderData();
  console.log(searchResullt);
  return (
    <div className="container">
      <div className="counteries_temp">
        {searchResullt.map((country) => (
          <Country data={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

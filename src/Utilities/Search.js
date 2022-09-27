import React, { useState } from "react";

const Search = () => {
  // const [query, setQuery] = useState("");

  // const searchCountries = () => {
  //   // return data.filter((item) => item.name.toLowerCase().includes(query));
  //   var countySe = query;
  //   return countySe;
  // };

  return (
    <div>
      <input
        type="text"
        id="search"
        class="form-control"
        placeholder="Search country"
        onChange={(e) => e.target.value}
      ></input>
    </div>
  );
};

export default Search;

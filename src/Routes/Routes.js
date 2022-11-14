import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countrires/Countries";
import Main from "../components/Main/Main";
import SearchPage from "../components/SearchPage/SearchPage";
import SingleCountryPage from "../components/SingleCountryPage/SingleCountryPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Countries></Countries>,
        loader: () => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path: "/:name",
        element: <SearchPage></SearchPage>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.name}`),
      },
      {
        path: "country/:name",
        element: <SingleCountryPage></SingleCountryPage>,
        loader: ({ params }) =>
          fetch(`https://restcountries.com/v3.1/name/${params.name}`),
      },
    ],
  },
]);

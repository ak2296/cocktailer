import React from "react";
import Axios from "axios";
import Tiles from "./Tiles";
import { useState } from "react";

export default function Form() {
  const [query, setquery] = useState("");
  const [drinks, setdrinks] = useState([]);
  const [searchType, setsearchType] = useState("search.php?s");

  var url = `https://www.thecocktaildb.com/api/json/v1/1/${searchType}=${query}`;
  // Fetches API based on type of search and the value of search bar
  async function getDrinks() {
    let result = await Axios.get(url);
    setdrinks(result.data.drinks);
  }

  const submit = (e) => {
    e.preventDefault();
    getDrinks();
  };

  return (
    // this is the search bar and buttons in search bar
    // att the bottom it sends needed data to Tiles
    <div className="row text-center ">
      <form className="row  justify-content-center " onSubmit={submit}>
        <div className="col-10 col-md-6 ">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search for a drink..."
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </div>
        <div className="col-10 col-md-2 text-center">
          <button
            type="submit"
            className="container-fluid btn btn-secondary mb-3 "
          >
            Search
          </button>
        </div>
        <div className="col-10 col-md-2">
          <div className="form-check ">
            <input
              className="form-check-input"
              checked={searchType === "search.php?s" ? true : false}
              onChange={(e) => {}}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onClick={() => setsearchType("search.php?s")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Name
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              onClick={() => setsearchType("filter.php?i")}
            />
            <label className="form-check-label " htmlFor="flexRadioDefault2">
              Ingredients
            </label>
          </div>
        </div>
      </form>

      <div className="container">
        <div className="row  justify-content-center">
          {drinks ? (
            drinks.map((drink) => {
              return <Tiles key={drink["idDrink"]} drink={drink} />;
            })
          ) : (
            <div className=" col-6 justify-content-center bg-danger py-2 text-center text-light mt-5  rounded-3">
              <h4>No Drinks Found</h4>
              <p>To search by ingredients enter the full name of it</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

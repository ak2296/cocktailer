import Axios from "axios";
import { useState } from "react";
import Tiles from "./Tiles";
import Drink from "./Drink";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Favorites from "./Favorites";

function App() {
  const [query, setquery] = useState("");
  const [drinks, setdrinks] = useState([]);
  const [showfavs, toggleFavs] = useState(false);
  const [searchType, setsearchType] = useState("search.php?s");

  var url = `https://www.thecocktaildb.com/api/json/v1/1/${searchType}=${query}`;
  async function getDrinks() {
    let result = await Axios.get(url);
    setdrinks(result.data.drinks);
  }

  const submit = (e) => {
    e.preventDefault();
    getDrinks();
  };

  const getFavorites = () => {
    // window.open("./", "_self");
    showfavs ? toggleFavs(false) : toggleFavs(true);
  };

  return (
    <div className="App container">
      <div className="row justify-content-md-center py-3">
        <h1 className="col text-center">Cocktailer</h1>
        <button
          className="btn btn-secondary"
          onClick={getFavorites}
          value="favorites"
          style={{ width: "100px", height: "40px" }}
        >
          favorites
        </button>
      </div>

      <div className="row  justify-content-center">
        <div className="col-lg-8">
          <form className="input-group" onSubmit={submit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search for a drink..."
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary mb-3">
              search
            </button>
            <div className="col-2 ml-5">
              <select
                className="form-select text-truncate"
                type="button"
                data-toggle="dropdown"
              >
                <option
                  className="dropdown-item"
                  onSelect={() => setsearchType("search.php?s")}
                >
                  {" "}
                  Name
                </option>
                <option
                  className="dropdown-item"
                  onSelect={() => setsearchType("filter.php?i")}
                >
                  {" "}
                  Ingredients
                </option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="container ">
        <div className="row  justify-content-center">
          {drinks.map((drink) => {
            return <Tiles key={drink["idDrink"]} drink={drink} />;
          })}
          {showfavs ? <Favorites /> : ""}
        </div>
        <Router>
          <div className="row  justify-content-center">
            <Route path="/Drink" component={Drink} />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

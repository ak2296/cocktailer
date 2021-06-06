import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";

function Favorites() {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favoriteDrinks"))
  );

  // setFavs(JSON.parse(localStorage.getItem("favoriteDrinks")));
  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favoriteDrinks")));
  }, []);

  return (
    <div className="container text-center">
      <h2>Favorites</h2>
      <div className="row justify-content-center">
        {favs.length === 0 ? <h4>No favorites</h4> : ""}
        {favs.map((drink) => {
          return <Tiles key={drink["idDrink"]} drink={drink} />;
        })}
      </div>
    </div>
  );
}
export default Favorites;

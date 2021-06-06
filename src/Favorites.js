import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";

export default function Favorites({ Ingred }) {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favoriteDrinks"))
  );

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favoriteDrinks")));
  }, []);

  //here we have to have a picture and the name of drink just like tiles that links to its drink page
  return (
    <div className="col  mb-3 text-center ">
      <div>
          <a href="/" target="_self">
            <button type="button" className="btn btn-warning float-start ">
              {" "}
              Home
            </button>
          </a>
        </div>
      <h3 className="col-3 border-bottom border-warning pb-3 m-auto ">
        My favorites
      </h3>
      <div className="row justify-content-center">
        <div className="col">
        {favs.length === 0 ? <h4>No favorites</h4> : ""}
        {favs.map((drink) => {
          return <Tiles key={drink["idDrink"]} drink={drink} />;
        })}
        </div>
      </div>
    </div>
  );
}

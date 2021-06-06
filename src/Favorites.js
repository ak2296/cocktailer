import React, { useState, useEffect } from "react";
import Tiles from "./Tiles";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Favorites({ Ingred }) {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favoriteDrinks"))
  );

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favoriteDrinks")));
  }, []);

  const style = {
    color: "red",
    cursor: "pointer",
    marginRight: "20px",
  };

  //remove function comes here
  const deleteFav = (id) => {
    let currentFavs = JSON.parse(localStorage.getItem("favoriteDrinks"));
    for (const key in currentFavs) {
      if (currentFavs[key].idDrink === id) {
        currentFavs.splice(key, 1);
        localStorage.setItem("favoriteDrinks", JSON.stringify(currentFavs));
      }
      setFavs(currentFavs);
    }
  };
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
      <div className="container">
        <div className="row justify-content-center mt-3">
          {favs.length > 0 ? (
            favs.map((drink) => {
              return [
                <Tiles key={drink["idDrink"]} drink={drink} />,
                <div className="col-sm-auto">
                  <FontAwesomeIcon
                    key={drink["idDrink"] + 1}
                    icon={faTimes}
                    onClick={() => {
                      deleteFav(drink["idDrink"]);
                    }}
                    style={style}
                    size="lg"
                  />
                </div>,
              ];
            })
          ) : (
            <h4>No favorites</h4>
          )}
        </div>
      </div>
    </div>
  );
}

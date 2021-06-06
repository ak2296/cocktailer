import React, { useState, useEffect } from "react";
import Axios from "axios";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Drink() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

  const [ingred, getIngred] = useState([]);
  const [over, setOver] = useState(false);

  async function getDescrip() {
    let result = await Axios.get(url);
    if (result.data) {
      getIngred(result.data.drinks[0]);
    }
  }

  useEffect(() => {
    getDescrip();
    getFav(id) ? setOver(true) : setOver(false);
  }, []); //This will run only once

  const getFav = (id) => {
    let exists = false;
    let currentFavs = JSON.parse(localStorage.getItem("favoriteDrinks")) || [];
    currentFavs.forEach((element) => {
      if (element.idDrink === id) {
        exists = true;
      }
    });
    return exists;
  };

  const textCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const toggleFav = () => {
    const drinkInfo = {
      idDrink: id,
      strDrink: ingred["strDrink"],
      strDrinkThumb: ingred["strDrinkThumb"],
    };
    let currentFavs = JSON.parse(localStorage.getItem("favoriteDrinks"));

    if (currentFavs !== null) {
      if (!getFav(id)) {
        //if item is not already in favs then add
        currentFavs.push(drinkInfo);
        localStorage.setItem("favoriteDrinks", JSON.stringify(currentFavs));
      } else {
        //else remove item from favs
        for (const key in currentFavs) {
          if (currentFavs[key].idDrink === id) {
            currentFavs.splice(key, 1);
            localStorage.setItem("favoriteDrinks", JSON.stringify(currentFavs));
          }
        }
      }
    } else {
      localStorage.setItem("favoriteDrinks", JSON.stringify([drinkInfo]));
    }

    over ? setOver(false) : setOver(true);
  };

  return (
    <div className="col-sm-6 col-md-auto mb-3">
      <div style={textCenter}>
        <h1 style={{ display: "inline" }}>{ingred["strDrink"]}</h1>
        <FontAwesomeIcon
          icon={faHeart}
          style={over ? { color: "red" } : {}}
          onClick={() => toggleFav()}
        />
      </div>

      <img
        src={ingred["strDrinkThumb"]}
        className="img-thumbnail mt-3"
        alt="cocktails"
      />
    </div>
  );
}

export default Drink;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import yellowheart from "./yellowheart.png";
import heart from "./heart.png";

function Drink() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  const [ingred, setIngred] = useState([]);
  const [src, setsrc] = useState(heart);
  let url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
  //fetches data from API for Drink page
  async function getDescrip() {
    let result = await Axios.get(url);
    //adds data to the hook list
    if (ingred.length < 1) {
      setIngred(result.data.drinks[0]);
    }
  }

  useEffect(() => {
    getDescrip();
    getFav(id) ? setsrc(yellowheart) : setsrc(heart);
  }, []);

  //sends data to favorite
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

    src === heart ? setsrc(yellowheart) : setsrc(heart);
  };

  return (
    //at save to favorite we need a function to change the icon and send data to favorite page
    <div className="row text-center mt-3 h-100">
      <div className="col  mb-3 justify-content-center ">
        <div>
          <a href="/" target="_self">
            <button type="button" className="btn btn-warning float-start mt-3">
              {" "}
              Go Back
            </button>
          </a>
        </div>
        <div>
          <img
            id="add_to_favorites"
            className=" col-1 img-thumbnail float-end mt-3 bg-light border-0 "
            src={src}
            alt="Favorite"
            onClick={() => {
              setsrc(yellowheart);
              // the function above changes the icon but won't toggle it has to fix!!!
              toggleFav();
            }}
          />
        </div>
        <h1 className="border-top border-warning p-2 ">{ingred["strDrink"]}</h1>
      </div>
      <div className="row text-center ">
        <div className="col col-md-5 col-lg-3  mb-3 text-center ">
          <img
            src={ingred["strDrinkThumb"]}
            className="img-thumbnail mt-3 align-items-start"
            alt="cocktails"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-8 col-m-4 mb-3 text-center ">
          <h6 className="text-start ">Type:</h6>
          <p className="text-start fst-italic"> {ingred["strAlcoholic"]}</p>
          <ul className="list-unstyled">
            <h6 className="text-start "> Ingredients:</h6>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 1]} {ingred["strMeasure1"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 2]} {ingred["strMeasure2"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 3]} {ingred["strMeasure3"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 4]} {ingred["strMeasure4"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 5]} {ingred["strMeasure5"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 6]} {ingred["strMeasure6"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 7]} {ingred["strMeasure7"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 8]} {ingred["strMeasure8"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 9]} {ingred["strMeasure9"]}
            </li>
            <li className="text-start ms-3">
              {ingred["strIngredient" + 10]} {ingred["strMeasure10"]}
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h6 className="text-start"> Type of Glass:</h6>
          <div className="text-start">{ingred["strGlass"]}</div>
        </div>
      </div>

      <div className="container-fluid text-start border-top mb-5">
        <h4 className="mt-3">How to make the Drink:</h4>
        <p className="fs-5">{ingred["strInstructions"]}</p>
      </div>
    </div>
  );
}

export default Drink;

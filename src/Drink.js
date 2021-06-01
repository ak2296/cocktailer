import React from 'react'
import Axios from 'axios';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

var ingred=[];

function Drink() {

  let url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id
  async function getDescrip(){
    let result= await Axios.get(url);
    if(ingred.length<1){
    ingred.push(result.data.drinks['0']);
    }
  }
    getDescrip();
    console.log(ingred)

    return (
       <div className="col-sm-6 col-md-auto mb-3 text-center ">
            <h1>this is has to show on page!</h1>
             <h1 >{ingred["strDrink"]}</h1>
             <img src={ingred["strDrinkThumb"]} className="img-thumbnail mt-3" alt="cocktails"/>
      </div>
     )
     
}

export default Drink;

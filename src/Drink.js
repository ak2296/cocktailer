import React from 'react'
import Axios from 'axios';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
if(id!==null){ 
  Drink()
}

function Drink() {

  var details=[]
  let descurl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id

        async function getDescrip(){
            let descrip= await Axios.get(descurl);
            details.push(descrip.data.drinks['0']) ;
            
        }
        if(id){ 
          getDescrip();
        }
    console.log(details[0])
        return (

           <div className="col-sm-6 col-md-auto mb-3 text-center ">
                <h1>this is has to show on page!</h1>
                <h1 >{details["strDrink"]}</h1>
                <img src={details["strDrinkThumb"]} className="img-thumbnail mt-3" alt="cocktails"/>
          </div>
        )

}

export default Drink;

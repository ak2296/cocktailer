import React from 'react'
import Axios from 'axios';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')



export default function Drink() {


        let details=[]

        let descurl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id
        async function getDescrip(){
            let descrip= await Axios.get(descurl);
            details= descrip.data.drinks['0'];
            console.log(details);
        }
        if(id!=null){ 
        getDescrip();}

        return (
           <div className="col-sm-6 col-md-auto mb-3 text-center ">
                <h1>this is has to show on page!</h1>

                <h1 className="fw-bold">{details["strDrink"]}</h1>
                <img src={details["strDrinkThumb"]} className="fluid img-thumbnail mt-3" alt="cocktails"/>
    
    
          </div>
        )

}
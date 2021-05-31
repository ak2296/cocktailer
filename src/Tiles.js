import React from 'react';
import Drink from './Drink';
import{useState} from 'react';


export default function Tiles(props) {
    const [drinkId, setdrinkId]= useState(props.drink["idDrink"])
    return (
        
            <div className="col-sm-6 col-md-auto mb-3 text-center " onClick={()=>{
                setdrinkId ( props.drink["idDrink"]);
                Drink({drinkId});
                window.open('./Drink.js')
               
            }}>
            <img src={props.drink["strDrinkThumb"]+"/preview"} className="fluid img-thumbnail mt-3" alt="cocktails"/>
            <p className="fw-bold">{props.drink["strDrink"]}</p>
            </div>
        
    )
   
}


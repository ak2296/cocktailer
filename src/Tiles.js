import React from 'react';
import Drink from './Drink';
import{useState} from 'react';


export default function Tiles({drink}) {
    const [drinkId, setdrinkId]= useState(drink["idDrink"])
    return (
        
            <div className="col-sm-6 col-md-auto mb-3 text-center " onClick={(e)=>{
                e.preventDefault();
                setdrinkId ( drink["idDrink"]);

                window.open('./Drink')
                //Drink({drinkId});
                
               
            }}>
            <img src={drink["strDrinkThumb"]+"/preview"} className="fluid img-thumbnail mt-3" alt="cocktails"/>
            <p className="fw-bold">{drink["strDrink"]}</p>
            </div>
        
    )
   
}


import React from 'react'
import Drink from './Drink'

export default function Tiles({drink}) {
    return (
        
            <div className="col-sm-6 col-md-auto mb-3 text-center " onClick={()=>{
                let drinkId = drink["idDrink"]
                Drink(drinkId)
            }}>
            <img src={drink["strDrinkThumb"]+"/preview"} className="fluid img-thumbnail mt-3" alt="cocktails"/>
            <p className="fw-bold">{drink["strDrink"]}</p>
            </div>
        
    )
}

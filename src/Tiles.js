import React from 'react';



export default function Tiles({drink}) {
    let drinkId= drink["idDrink"]
    return (
            
            <div className="col-sm-6 col-md-auto mb-3 text-center " onClick={()=>{
            
                window.open("./Drink?id="+drinkId, '_self')
            }}>
            <img src={drink["strDrinkThumb"]+"/preview"} className="fluid img-thumbnail mt-3" alt="cocktails"/>
            <p className="fw-bold">{drink["strDrink"]}</p>
            </div>
        
    )
   
}


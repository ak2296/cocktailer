import React from 'react'

export default function Tiles({drink}) {
    return (
        <div className=" container">
            <img src={drink["strDrinkThumb"]+"/preview"}/>
            <p>{drink["strDrink"]}</p>
        </div>
    )
}

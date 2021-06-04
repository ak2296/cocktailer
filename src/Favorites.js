import React from 'react'

export default function Favorites({Ingred}) {
    console.log(Ingred)
    console.log('hi')
    //here we have to have a picture and the name of drink just like tiles that links to its drink page
    return (
        <div className="col  mb-3 text-center " >
        <h3 className="col-3 border-bottom border-warning pb-3 m-auto ">My favorites</h3>
        <div className="">
            here comes the tiles
        </div>
        </div>
    )
}

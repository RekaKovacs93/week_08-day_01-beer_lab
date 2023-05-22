import React from "react";
import ItemOfTheList from "./ItemOfTheList"

const ListOfBeers = ({beers})=>{
    
    const beerItems = beers.map((beer)=>{
        return (
            <ItemOfTheList
                beer = {beer}
                key = {beer.id}
            />



        )
    }) 
    
    return(
        <table>
            <thead>
             <tr>
                <th><h3>Name</h3></th>
                <th><h3>Description</h3></th>
             </tr>   
            </thead>
            <tbody>{beerItems}</tbody>
        </table>
    )



}

export default ListOfBeers
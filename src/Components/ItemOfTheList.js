import React from "react";

const ItemOfTheList = ({beer})=>{
    return(
        <tr>
            <td className="names">{beer.name}</td>
            <td>{beer.description}</td>
        </tr>

    )
}

export default ItemOfTheList
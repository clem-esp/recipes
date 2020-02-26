import React, {Component} from "react";
import recipes from "../recipes/recipes.json";

const recipes_list = recipes.map((data) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.txt}</p>
    </div>
  )
})

export default class Recipes extends Component {
  render(){
    return(
      <div>
        <h2>Recettes</h2>
        {recipes_list}
      </div>

    )
  }

}

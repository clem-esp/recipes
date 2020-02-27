import React, {Component} from "react";
import recipes from "../recipes/recipes.json";
import Card from "../components/card";

const recipes_list = recipes.map((data) => {
  return (
    <Card data={data}/>
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

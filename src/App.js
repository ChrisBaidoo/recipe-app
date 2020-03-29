import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () => {
  const APP_ID = "c5c01612";
  const APP_KEY = "db4087bce856435450e509ba9568d82a";	
const [recipes, setRecipes] = useState([]);
  useEffect(() => {getRecipes()}, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }
  return (
    <div className="App">
      <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>))}
    </div>
  );

}



export default App;

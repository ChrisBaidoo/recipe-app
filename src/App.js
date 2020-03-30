import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () => {
  const APP_ID = "c5c01612";
  const APP_KEY = "db4087bce856435450e509ba9568d82a";	
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken')

  useEffect(() => {getRecipes()}, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value ={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.calories} title={recipe.recipe.label}
        
        ingredients={recipe.recipe.ingredients}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>))}
    </div>
  );

}



export default App;

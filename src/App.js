import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';
import Footer from './Footer'

  
 const App = () => {
    const APP_ID = "fb99b9f8";
    const APP_KEY = "9e84fea944801b6cd457fc33f99ccdf2	";
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("chicken");


          useEffect(() => {
            getRecipes();
            
          }, [query]);
          

          const getRecipes = async () => {
            const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            const data = await response.json();
            setRecipes(data.hits)
            };

            const updateSearch = e => {
              setSearch(e.target.value);
            };

            const getSearch = e => {
              e.preventDefault();
              setQuery(search);
              setSearch('')
            };


            return (
              <div className="App">
             
                <header className="header"> Food Recipes</header>
                
               
                <form onSubmit={getSearch} className="search-form">
                  <input className="search-bar" type="text" value={search} 
                  onChange={updateSearch}/>
                  <button className="search-button" type="submit">Search</button>
                </form>
                <div className="recipe-container">
                <div className="recipes">
              {recipes.map(recipe =>(
                  <Recipe 
                  key={recipe.recipe.label}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients = {recipe.recipe.ingredients}
                  />
                ))}
              </div>
                </div>
            
              
              <Footer/>
              </div>
            );
}

export default App;

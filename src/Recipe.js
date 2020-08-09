import React from 'react';
import style from './recipe.module.css'

function Recipe({id, title, calories, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
             
            <ol>
            {ingredients.map((ingredient) => (
                <li >
                    {ingredient.text}
                </li>
            ))
            } 
            </ol>
            <p>Number of Calories: {calories.toFixed(0)} </p>
            <img className={style.image} src={image} alt="" />
           
           
        </div>
    )
}

export default Recipe;

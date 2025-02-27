import React from 'react';
import TheIngredients from './Ingredients'
import TheRecipe from './recievedRecipe.jsx'
import { getRecipeFromMistral } from './AI.jsx';

export default function Main(){

    const [Ingredients, setIngredient] = React.useState([]);
    const [ShowRecipe, setShowRecipe] = React.useState(false);
    const [Recipe, setRecipe] = React.useState(null);


    let IngredientsItem = Ingredients.map(function(ing){
        return <li>{ing}</li>
    })

    function Over(){
        console.log("HES GONNA CLICK")
    }

    function handleSubmit(e){
        e.preventDefault()
        setIngredient(prevList => [...prevList, e.target.elements.Ingredients.value])
    }

    async function getRecipe(){
        console.log("Getting Recipe")
        const ReceivedRecipe = await getRecipeFromMistral(Ingredients)
        console.log(ReceivedRecipe)
        setRecipe(ReceivedRecipe)
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="AddIngredient">
                <input type="text" placeholder="e.g. Egg" name="Ingredients"/>
                <button onMouseOver={Over} >Add Ingredient</button>
            </form>
            <TheIngredients 
                IngredientsItemLength = {IngredientsItem.length}
                IngredientsItem = {IngredientsItem}
                getRecipe = {getRecipe}
            />
            {Recipe &&
                < TheRecipe
                    Recipe = {Recipe}
                />
            }
        </main>
    )
}
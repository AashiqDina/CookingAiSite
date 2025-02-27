export default function Ingredients(props){
    return (
        <>
            <section className='IngSection'>
                {props.IngredientsItemLength > 0 && <h1 className='IngYouHaveTitle'>Ingredients you have:</h1>}
                <ul>
                    {props.IngredientsItem}
                </ul>
            </section>
            <section className='FinSection'>
                {props.IngredientsItemLength > 2 ? (<div className='FinishedDiv'>
                    <div className='FinishedInnerDiv'>
                        <h2>Is that all?</h2>
                        <p>Generate a recipe</p>
                    </div>
                    <button onClick={props.getRecipe}>Get Recipe</button>
                </div>) : null}
            </section>
        </>
    )
}
import './index.css'
export default function ClaudeRecipe({ recipe, isLoading }){
    return(
        <section>
    <div className='list-items'>
        <h2>Chefexa Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        {isLoading ? (
            <p>Loading recipe...</p>
        ) : (
            <div className="recipe-content">
                {recipe}
            </div>
        )}
    </article>
    </div>
</section>
    )
}


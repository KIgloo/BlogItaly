import React from 'react'
import Recipe from './recipe.js'

const Recipes = ({posts}) => {
    console.log(posts)
    return (
        <div>
            {posts.map((article)=> <Recipe article = {article}/>)}
        </div>
    )
}



export default Recipes

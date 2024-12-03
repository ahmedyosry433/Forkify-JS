// let showRecipes = async () => {
//     try {
//         const url = "https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza";
//     let res = await fetch(
//         url,
//         {
//             method: "GET",
//         }
//     );
//         let data = await res.json();
//         console.log(data.data.recipe);


//         if (!res.ok) throw new Error(`${data.message} (${res.status})`);

//         let { recipe } = data.data.recipe;
//         recipe = {
//             id: recipe.id,
//             title: recipe.title,
//             image: recipe.image_url,
//             ingredients: recipe.ingredients,
//             servings: recipe.servings,
//             cooking_time: recipe.readyInMinutes,
//             instructions: recipe.instructions
//         }

//     }catch(err){
//         alert(err.message);
//    }
    
// }

// showRecipes();
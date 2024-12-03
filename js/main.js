let showRecipes = async () => {
    try {
        const url = "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886";
    let res = await fetch(
        url,
        {
            method: "GET",
        }
    );
        let data = await res.json();
        console.log(data.data.recipe);


        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    }catch(err){
        alert(err.message);
   }
    
}

showRecipes();
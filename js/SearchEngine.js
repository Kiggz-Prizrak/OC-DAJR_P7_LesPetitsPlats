class SearchEngine {
  constructor(filterList, recipesList, callback) {
    this._filterList = filterList;
    this._defaultRecipesList = recipesList;
    this._callback = callback;
    // this._recipesList = this._defaultRecipesList;
  }

  ingredientsFilter(filters, recipes) {
    this._filterList = filters;
    this._defaultRecipesList = recipes;
    console.log(this._filterList);

    const filtersIngredientsList = [];
    for (let i = 0; i < this._filterList.length; i++) {
      console.log(this._filterList[i]);
      if (this._filterList[i].type === "Ingrédients") {
        filtersIngredientsList.push(this._filterList[i]);
      }
    }
    // const filtersIngredientsList = this._filterList.filter(
    //   (element) => element.type === "Ingrédients"
    // );



    //////////////////////////////////////

    for (let i = 0; i < filtersIngredientsList.length; i++) {
      const ingredient = filtersIngredientsList[i];

      const array = []
      for (let j = 0; j < this._defaultRecipesList.length; j++) {
        const recipe = this._defaultRecipesList[j];

        const ingredientsList = [] 
        for (let k = 0; k < recipe.ingredients.length; k++) {
          ingredientsList.push(recipe.ingredients[k].ingredient); 
        }

        if(ingredientsList.includes(ingredient.filter)) {
          array.push(recipe)
        }
      }

      this._defaultRecipesList = array
    }

    //////////////////////////////////////

    // filtersIngredientsList.map((ingredient) => {
    //   this._defaultRecipesList = this._defaultRecipesList.filter((recipe) => {
    //     const ingredientsList = recipe.ingredients.map((i) => {
    //       return i.ingredient;
    //     });
    //     return ingredientsList.includes(ingredient.filter);
    //   });
    // });

    console.log(this._defaultRecipesList);
    return this._defaultRecipesList;
  }

  ustensilsFilter(filters, recipes) {
    this._filterList = filters;
    this._defaultRecipesList = recipes;
    // const filterUstensilsList = this._filterList.filter(
    //   (element) => element.type === "Ustensiles"
    // );
    // filterUstensilsList.map((ustensil) => {
    //   this._defaultRecipesList = this._defaultRecipesList.filter((recipe) => {
    //     const ustensilsList = recipe.ustensils.map((i) => {
    //       i = i[0].toUpperCase() + i.slice(1);
    //       return i;
    //     });
    //     return ustensilsList.includes(ustensil.filter);
    //   });
    // });
    return this._defaultRecipesList;
  }

  applianceFilter(filters, recipes) {
    this._filterList = filters;
    this._defaultRecipesList = recipes;
    // const filterAppliancesList = this._filterList.filter(
    //   (element) => element.type === "Appareils"
    // );
    // filterAppliancesList.map((appliance) => {
    //   this._defaultRecipesList = this._defaultRecipesList.filter(
    //     (recipe) => recipe.appliance === appliance.filter
    //   );
    // });
    return this._defaultRecipesList;
  }

  searchBarFilter(searchValue, recipes) {
    if (searchValue.length < 3) return recipes;

    const recipesMatch = [];
    // const recipesMatch = recipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    // );
    return recipesMatch;
  }
}

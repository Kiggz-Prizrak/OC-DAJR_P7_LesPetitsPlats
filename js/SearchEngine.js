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

    const filtersIngredientsList = [];
    for (let i = 0; i < this._filterList.length; i++) {
      console.log(this._filterList[i]);
      if (this._filterList[i].type === "Ingrédients") {
        filtersIngredientsList.push(this._filterList[i]);
      }
    }

    for (let i = 0; i < filtersIngredientsList.length; i++) {
      const ingredient = filtersIngredientsList[i];

      const array = [];
      for (let j = 0; j < this._defaultRecipesList.length; j++) {
        const recipe = this._defaultRecipesList[j];

        const ingredientsList = [];
        for (let k = 0; k < recipe.ingredients.length; k++) {
          ingredientsList.push(recipe.ingredients[k].ingredient);
        }

        if (ingredientsList.includes(ingredient.filter)) {
          array.push(recipe);
        }
      }

      this._defaultRecipesList = array;
    }

    return this._defaultRecipesList;
  }

  ustensilsFilter(filters, recipes) {
    this._filterList = filters;
    this._defaultRecipesList = recipes;

    const filtersUstensilsList = [];
    for (let i = 0; i < this._filterList.length; i++) {
      console.log(this._filterList[i]);
      if (this._filterList[i].type === "Ustensiles") {
        filtersUstensilsList.push(this._filterList[i]);
      }
    }

    for (let i = 0; i < filtersUstensilsList.length; i++) {
      const ustensil = filtersUstensilsList[i];

      const array = [];
      for (let j = 0; j < this._defaultRecipesList.length; j++) {
        const recipe = this._defaultRecipesList[j];
        const ustensilsList = [];
        for (let k = 0; k < recipe.ustensils.length; k++) {
          ustensilsList.push(
            recipe.ustensils[k][0].toUpperCase() + recipe.ustensils[k].slice(1)
          );
        }
        if (ustensilsList.includes(ustensil.filter)) {
          array.push(recipe);
        }
      }
      this._defaultRecipesList = array;
    }

    return this._defaultRecipesList;
  }

  applianceFilter(filters, recipes) {
    this._filterList = filters;
    this._defaultRecipesList = recipes;

    const filtersAppliancesList = [];
    for (let i = 0; i < this._filterList.length; i++) {
      console.log(this._filterList[i]);
      if (this._filterList[i].type === "Appareils") {
        filtersAppliancesList.push(this._filterList[i]);
      }
    }


    for (let i = 0; i < filtersAppliancesList.length; i++) {
      const appliance = filtersAppliancesList[i];
      const array = [];

      for (let j = 0; j < this._defaultRecipesList.length; j++) {
        const recipe = this._defaultRecipesList[j];

        if (recipe.appliance === appliance.filter) {
          array.push(recipe);
        }
      }
      this._defaultRecipesList = array;
    }

    return this._defaultRecipesList;
  }

  searchBarFilter(searchValue, recipes) {
    if (searchValue.length < 3) return recipes;

    const recipesMatch = [];

    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      if (recipe.name.toLowerCase().includes(searchValue.toLowerCase())) {
        recipesMatch.push(recipe);
      }
    }
    return recipesMatch;
  }
}

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
    // const filtersIngredientsList = this._filterList.filter(
    //   (element) => element.type === "Ingrédients"
    // );
    // filtersIngredientsList.map((ingredient) => {
    //   this._defaultRecipesList = this._defaultRecipesList.filter((recipe) => {
    //     const ingredientsList = recipe.ingredients.map((i) => {
    //       return i.ingredient;
    //     });
    //     return ingredientsList.includes(ingredient.filter);
    //   });
    // });
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

    // const recipesMatch = recipes.filter((recipe) =>
    //   recipe.name.toLowerCase().includes(searchValue.toLowerCase())
    // );
    return recipesMatch;
  }
}

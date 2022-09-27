class App {
  constructor() {
    this._recipesApi = recipes;
    this._recipesContainer = document.getElementById("recipesCardsContainer");
    this._filtersSelected = [];
    this._searchValue = "";
    this._recipesList = this._recipesApi;
  }

  refresh() {
   
  }

  async main() {
    /////////// searchbar

    const searchBar = new SearchBar(
      this._filtersSelected,
      this._recipesList,
      this._searchValue
    );
    document
      .getElementById("searchBarContainer")
      .appendChild(searchBar.createSearchBar());

    searchBar.searchRecipes();

    /////////// Recipes card

    this._recipesList.forEach((recipe) => {
      const recipeInstance = new Recipes(recipe);
      this._recipesContainer.appendChild(recipeInstance.createCard());
    });
  }
}

const app = new App();
window.app = app;
app.main();

class App {
  constructor() {
    this._recipesApi = recipes;
    this._recipesContainer = document.getElementById("recipesCardsContainer");
    this._filtersSelected = [];
    this._searchValue = "";
    this._recipesList = this._recipesApi;
  }

  refresh() {}

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

    /////////// Filter

    // ingredient list

    this._ingredientsFilter = new FilterOptions(
      this._recipesList,
      "#3282F7",
      "Ingrédients",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul"),
      this.refresh
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(this._ingredientsFilter.createFilterOptions());

    // appliance list
    this._applianceFilter = new FilterOptions(
      this._recipesList,
      "#68D9A4",
      "Appareils",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul"),
      this.refresh
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(this._applianceFilter.createFilterOptions());

    // ustensils list
    this._ustensilsFilter = new FilterOptions(
      this._recipesList,
      "#ED6454",
      "Ustensiles",
      this._filtersSelected,
      document.querySelector("#filterListContainer > ul"),
      this.refresh
    );
    document
      .getElementById("filterCategoryContainer")
      .appendChild(this._ustensilsFilter.createFilterOptions());
  }
}

const app = new App();
window.app = app;
app.main();

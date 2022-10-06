class App {
  constructor() {
    
    this._recipesApi = recipes;
    this._recipesContainer = document.getElementById("recipesCardsContainer");
    this._filtersSelected = [];
    this._searchValue = "";
    this._recipesList = this._recipesApi;
  }

  refresh() {
    this._recipesContainer.innerHTML = "";

    this._recipesList = this._recipesApi;
    console.log('recipes');

    this._recipesList = this._searchEngine.searchBarFilter(
      this._searchBar.getSearchInput(),
      this._recipesList
    );

    this._recipesList = this._searchEngine.ingredientsFilter(
      this._filtersSelected,
      this._recipesList
    );
    this._recipesList = this._searchEngine.ustensilsFilter(
      this._filtersSelected,
      this._recipesList
    );
    this._recipesList = this._searchEngine.applianceFilter(
      this._filtersSelected,
      this._recipesList
    );

    this._ingredientsFilter.refresh(this._recipesList);
    this._ustensilsFilter.refresh(this._recipesList);
    this._applianceFilter.refresh(this._recipesList);

    this._recipesList.forEach((recipe) => {
      const recipeInstance = new Recipes(recipe);
      this._recipesContainer.appendChild(recipeInstance.createCard());
    });
  }

  async main() {
    /////////// Recipes card

    this._recipesList.forEach((recipe) => {
      const recipeInstance = new Recipes(recipe);
      this._recipesContainer.appendChild(recipeInstance.createCard());
    });

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

    ///////////// Delete Filter Options

    document
      .querySelector("#filterListContainer")
      .addEventListener("click", (e) => {
        if ([...e.target.classList][0] === "deleteFilterBtn") {
          this._filtersSelected.map((element) => {
            if (
              element.filter === e.target.parentNode.dataset.filter &&
              element.type === e.target.parentNode.dataset.type
            ) {
              this._filtersSelected.splice(
                this._filtersSelected.indexOf(element),
                1
              );
              e.target.parentNode.remove();
              this.refresh();
            }
          });
          this.refresh;
        } else if (
          [...e.target.parentNode.classList][0] === "deleteFilterBtn"
        ) {
          this._filtersSelected.map((i) => {
            if (
              i.filter === e.target.parentNode.parentNode.dataset.filter &&
              i.type === e.target.parentNode.parentNode.dataset.type
            ) {
              this._filtersSelected.splice(this._filtersSelected.indexOf(i), 1);
              e.target.parentNode.parentNode.remove();
              this.refresh();
            }
          });
          this.refresh;
        }
      });

    /////////// searchbar

    this._searchBar = new SearchBar(this.refresh);
    document
      .getElementById("searchBarContainer")
      .appendChild(this._searchBar.createSearchBar());

    /////////// test searching ///////////
    console.log(this._recipesList);
    this._searchEngine = new SearchEngine(
      this._filtersSelected,
      this._recipesList
    );

    this._searchEngine.searchBarFilter('', this._recipesList);
  }
}

const app = new App();
window.app = app;
app.main();

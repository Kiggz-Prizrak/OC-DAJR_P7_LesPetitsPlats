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
  }
}

const app = new App();
window.app = app;
app.main();

class SearchBar {
  constructor(callback) {
    this._callback = callback;
  }

  createSearchBar() {
    this._parent = document.createElement("label");
    this._parent.setAttribute("for", "search");
    this._parent.setAttribute("id", "searchBar");

    const input = document.createElement("input");
    input.setAttribute("placeholder", "echercher une recette");
    input.setAttribute("id", "searchBtn");
    input.setAttribute("type", "search");

    const btn = document.createElement("button");
    btn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;

    this._parent.appendChild(input);
    this._parent.appendChild(btn);

    input.addEventListener("input", (e) => {

       this._callback.call(window.app)
    });
    return this._parent;
  }

  getSearchInput() {
    return this._parent.querySelector("input").value
  }
}

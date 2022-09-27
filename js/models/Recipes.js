class Recipes {
  constructor(Recipes) {
    this._id = Recipes.id;
    this._name = Recipes.name;
    this._servings = Recipes.servings;
    this._ingredients = Recipes.ingredients;
    this._time = Recipes.time;
    this._description = Recipes.description;
    this._appliance = Recipes.appliance;
    this._ustensils = Recipes.ustensils;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get servings() {
    return this._servings;
  }
  get ingredients() {
    return this._ingredients;
  }
  get time() {
    return this._time;
  }
  get description() {
    return this._description;
  }
  get appliance() {
    return this._appliance;
  }
  get ustensils() {
    return this._ustensils;
  }

  createCard() {
    const element = document.createElement("article");
    element.className = "recipesCards";

    const imgContainer = document.createElement("div");
    imgContainer.className = "imgContainer";
    const img = document.createElement("img");
    imgContainer.appendChild(img);

    const blockInfo = document.createElement("div");

    const header = document.createElement("div");
    header.className = "headerCard";
    const name = document.createElement("h3");
    name.innerText = this.name;

    const time = document.createElement("span");
    time.innerHTML = `<span><i class="fa-regular fa-clock"></i>  ${this.time} min</span>`;

    header.appendChild(name);
    header.appendChild(time);

    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "descriptionContainer";
    const list = document.createElement("ul");
    this.ingredients.map((ingredient) => {
      const li = document.createElement("li");

      if (ingredient.unit === "grammes") {
        ingredient.unit = "g";
      }

      li.innerHTML = `
      <span class="typeIngredient">${ingredient.ingredient} :</span>
      <span class="ingredientQuantity">
        ${ingredient.quantity || ""}${ingredient.unit || ""}
      </span>
     
      `;
      list.appendChild(li);
    });

    const description = document.createElement("p");
    description.innerText = this.description;

    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(list);

    blockInfo.appendChild(header);
    blockInfo.appendChild(descriptionContainer);

    element.appendChild(imgContainer);
    element.appendChild(blockInfo);

    return element;
  }
}
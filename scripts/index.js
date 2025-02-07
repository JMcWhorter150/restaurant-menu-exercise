function getCategories(obj) {
    const arrayOfCategoryNames = Object.keys(obj);
    return arrayOfCategoryNames;
}

function nameToListItem(categoryName) {
    let liEl = document.createElement('li');
    liEl.textContent = categoryName;
    liEl.addEventListener('click', getMenuObjsOnClick);
    return liEl;
}

function categoriesToListItem(arrayOfCategoryNames) {
    const listItems = arrayOfCategoryNames.map(nameToListItem);
    return listItems;
}

const categories = getCategories(menu);
const listItems = categoriesToListItem(categories);
const jsMenu = document.querySelector('.js-menu');

function appendLiTojsMenu(li) {
    jsMenu.appendChild(li);
}

listItems.map(appendLiTojsMenu);

function getMenuObjsOnClick(event) {
    jsMainContent.textContent = "";
    let name = event.target.textContent;
    let itemObjs = categoryToItemObjs(name);
    if (onlyVegan === true) {
        itemObjs = itemObjs.filter(filterVegan);
    } else if (onlyVegetarian === true) {
        itemObjs = itemObjs.filter(filterVegetarian);
    }
    // debugger;
    let itemCards = itemObjs.map(itemToCard);
    itemCards.map(appendCardToMainContent);
}

function getName(obj) {
    return obj.name;
}
function categoryToItemObjs(menuName) {
    const items = menu[menuName];
    // const itemNames = items.map(getName);
    return items;
}

const liItems = document.querySelectorAll('li');

// console.log(categoryToItems('breakfast'));

function itemToCard(itemObj) {
    // debugger;
    let div = document.createElement('div');
    div.className = "card";
    // jsMenu.appendChild(div);
    let name = document.createElement('h2');
    name.textContent = itemObj.name;
    div.appendChild(name);
    let img = document.createElement('img');
    img.src = itemObj.photo;
    div.appendChild(img);
    let price = document.createElement('h3');
    price.textContent = `Costs: $${itemObj.price}`;
    div.appendChild(price);
    return div;
}

// itemToCard(menu.breakfast[0]);
const jsMainContent = document.querySelector('.js-main-content');
function appendCardToMainContent(cardEl) {
    jsMainContent.appendChild(cardEl);
}
// appendCardToMainContent(itemToCard(menu.breakfast[0]));

const vegetarianButton = document.querySelector('.js-vegetarian');
vegetarianButton.addEventListener("click", isVegetarian);
let onlyVegetarian = false;

function isVegetarian() {
    if (onlyVegetarian === false) {
        onlyVegetarian = true;
        vegetarianButton.textContent = "Vegetarian!";
        jsMainContent.textContent = "";
    } else {
        onlyVegetarian = false;
        vegetarianButton.textContent = "Not Vegetarian!";
        jsMainContent.textContent = "";
    }
}

function filterVegetarian(itemObj) {
    return itemObj.isVegetarian;
}

const veganButton = document.querySelector(".js-vegan");
veganButton.addEventListener("click", isVegan);
let onlyVegan = false;

function isVegan() {
    if (onlyVegan === false) {
        onlyVegan = true;
        veganButton.textContent = "Vegan!";
        jsMainContent.textContent = "";
    } else {
        onlyVegan = false;
        veganButton.textContent = "Not Vegan!";
        jsMainContent.textContent = "";
    }
}

function filterVegan(itemObj) {
    return itemObj.isVegan;
}
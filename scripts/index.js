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
    // debugger;
    let itemCards = itemObjs.map(itemToCard);
    itemCards.map(appendCardToMainContent);
}

function itemObjFromName(name) {

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
    price.textContent = itemObj.price;
    div.appendChild(price);
    return div;
}

// itemToCard(menu.breakfast[0]);
const jsMainContent = document.querySelector('.js-main-content');
function appendCardToMainContent(cardEl) {
    jsMainContent.appendChild(cardEl);
}
// appendCardToMainContent(itemToCard(menu.breakfast[0]));


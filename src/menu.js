const menu = (() => {
    class item {
        constructor (name, type, price, description) {
            this.name = name
            this.type = type
            this.price = price
            this.description = description 
        }
    }

    let pizza = new item('Cheese Pizza', 'Main', '£19.99', 'Italian style pizza base topped with totamto sauce and cheese');
    let lasagne = new item ('Lasagne', 'Main', '£14.95', 'The best Lasagne, served with garlic bread.');
    let pancakes = new item ('Pancakes', 'Dessert', '£12.95', 'Luxurious pancakes served with maple syrup and topping of your choice.');

    let body = document.querySelector('body');

    let menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';

    body.appendChild(menuDiv);
    
    function addItem(dish) {
        let divItem = document.createElement('div')
        divItem.className = dish.name.replace(/\s/g, '').toLowerCase();

        menuDiv.appendChild(divItem)

        let header = document.createElement('h2');
        header.textContent = dish.name;

        let header2 = document.createElement('h3');
        header2.textContent = dish.price;

        let desc = document.createElement('p');
        desc.textContent = dish.description;

        divItem.appendChild(header);
        divItem.appendChild(header2);
        divItem.appendChild(desc);
    }

    addItem(pizza)
    addItem(lasagne)
    addItem(pancakes)
    //change into grid or table - card style?
});

export { menu }
const menu = (() => {
    class item {
        constructor (name, type, price, description, img) {
            this.name = name
            this.type = type
            this.price = price
            this.description = description 
            this.img = img
        }
    }
    let garlicBread = new item ('Garlic Bread', 'Starter', '£4.89',
    'Fresh bread with a garlic sauce spread over it',
    'https://cdn.pixabay.com/photo/2017/09/23/00/00/bread-2777583_1280.jpg');

    let pizza = new item('Cheese Pizza', 'Main', '£19.99',
    'Italian style pizza base topped with totamto sauce and cheese',
    'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg');

    let lasagne = new item ('Lasagne', 'Main', '£14.95',
    'The best Lasagne, served with garlic bread.',
    'https://cdn.pixabay.com/photo/2021/02/04/12/48/food-5981242_1280.jpg');
    
    let pancakes = new item ('Pancakes', 'Dessert', '£12.95',
    'Luxurious pancakes served with maple syrup and topping of your choice.',
    'https://cdn.pixabay.com/photo/2021/02/06/19/29/pancakes-5989136_1280.jpg');

    let content = document.querySelector('#content');

    let menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';

    content.appendChild(menuDiv);

    let title = document.createElement('h2');
    title.textContent = 'Menu';
    menuDiv.appendChild(title);
    
    function addItem(dish) {
        let divItem = document.createElement('div')
        divItem.className = dish.name.replace(/\s/g, '').toLowerCase();

        menuDiv.appendChild(divItem)

        let header = document.createElement('h3');
        header.textContent = dish.name;

        let header2 = document.createElement('h4');
        header2.textContent = dish.price;

        let desc = document.createElement('p');
        desc.textContent = dish.description;

        let img = document.createElement('img');
        img.src = dish.img
        img.style.height = '100px'
        img.style.width = '150px'

        divItem.appendChild(header);
        divItem.appendChild(header2);
        divItem.appendChild(desc);
        divItem.appendChild(img);
    }

    addItem(garlicBread)
    addItem(pizza)
    addItem(lasagne)
    addItem(pancakes)
    //change into grid or table - card style?
});

export { menu }
coffee_menu.forEach(function (item) {
  const listItem = document.createElement("li");
  const itemName = document.createElement("h3");
  itemName.textContent = item.name;

  const itemDescription = document.createElement("p");
  itemDescription.textContent = item.description;

  const itemPrice = document.createElement("span");
  itemPrice.textContent = `$${item.price.toFixed(2)}`;

  const itemimage = document.createElement("img");
  itemimage.src = item.image;

  listItem.appendChild(itemName);
  listItem.appendChild(itemDescription);
  listItem.appendChild(itemPrice);
  listItem.appendChild(itemimage);

  document.querySelector(".menu-list").appendChild(listItem);
});

const coffeeMenu = [
  {
    name: "Espresso",
    shortDescription:
      "Intense and pure, our Espresso delivers a bold kick of rich, concentrated coffee flavor.",
    longDescription:
      "Savor the intensity of our Espresso – a masterful blend of finely ground coffee beans, extracted to perfection. This small but mighty shot is sure to awaken your senses and keep you energized throughout the day.",
    ingredients: ["espresso"],
    price: 2.0,
    image: "https://example.com/espresso.jpg",
  },
  {
    name: "Americano",
    shortDescription:
      "An American classic, our Americano combines hot water with a double shot of espresso for a smooth and satisfying taste.",
    longDescription:
      "Experience the classic Americano, where hot water meets a double shot of espresso in perfect harmony. The result is a smooth, satisfying blend that pays homage to the roots of great coffee. Start your day the American way!",
    ingredients: ["hot water", "espresso"],
    price: 5.0,
    image: "https://example.com/americano.jpg",
  },
  {
    name: "Freddo",
    shortDescription:
      "Chill out with our Freddo – a delightful mix of espresso, liquor, and ice, creating a refreshing and invigorating beverage.",
    longDescription:
      "Cool down with the Freddo, a refreshing fusion of espresso, liquor, and ice. This invigorating blend is a perfect companion for warm days, offering a delightful burst of flavor with every sip.",
    ingredients: ["espresso", "liquor", "ice"],
    price: 7.0,
    image: "https://example.com/freddo.jpg",
  },
  {
    name: "Doppio",
    shortDescription:
      "Double trouble! Our Doppio is a robust and intense experience, featuring two shots of espresso for the ultimate coffee lover's delight.",
    longDescription:
      "For the true coffee aficionado, the Doppio delivers double the satisfaction with two shots of rich, intense espresso. Embrace the bold flavors and immerse yourself in the world of premium coffee indulgence.",
    ingredients: ["espresso", "espresso"],
    price: 4.0,
    image: "https://example.com/doppio.jpg",
  },
  {
    name: "Cappuccino",
    shortDescription:
      "A creamy masterpiece, our Cappuccino combines whipped milk with a perfect ratio of milk and espresso, creating a velvety and luxurious experience.",
    longDescription:
      "Indulge in the velvety perfection of our Cappuccino, a creamy masterpiece that balances whipped milk, steamed milk, and espresso in perfect harmony. Each sip is a luxurious journey into the heart of coffee excellence.",
    ingredients: ["whipped milk", "milk", "espresso"],
    price: 6.0,
    image: "https://example.com/cappuccino.jpg",
  },
  {
    name: "Frappe",
    shortDescription:
      "Satisfy your sweet tooth with our Frappe – a delightful blend of chocolate syrup, ice cream, ice, and espresso, creating a heavenly and refreshing treat.",
    longDescription:
      "For the sweet tooth enthusiasts, our Frappe is a delightful symphony of chocolate syrup, ice cream, ice, and espresso. Indulge in this heavenly blend that's both refreshing and decadently satisfying.",
    ingredients: ["chocolate syrup", "ice cream", "ice", "espresso"],
    price: 7.0,
    image: "https://example.com/frappe.jpg",
  },
  {
    name: "Espresso Macchiato",
    shortDescription:
      "Simple yet satisfying, our Espresso Macchiato features whipped milk topping a shot of intense espresso for a delightful contrast of flavors.",
    longDescription:
      "Embrace the simplicity and satisfaction of our Espresso Macchiato. A shot of intense espresso crowned with a dollop of whipped milk creates a delightful contrast, making each sip a moment of pure bliss.",
    ingredients: ["whipped milk", "espresso"],
    price: 4.0,
    image: "https://example.com/espresso-macchiato.jpg",
  },
  {
    name: "Latte",
    shortDescription:
      "Smooth and comforting, our Latte blends whipped milk, steamed milk, and espresso for a harmonious and velvety coffee experience.",
    longDescription:
      "Experience the epitome of comfort with our Latte – a harmonious blend of whipped milk, steamed milk, and espresso. Each sip is a journey into velvety smoothness, providing a moment of pure relaxation and delight.",
    ingredients: ["whipped milk", "milk", "espresso"],
    price: 6.0,
    image: "https://example.com/latte.jpg",
  },
  {
    name: "Mocha",
    shortDescription:
      "Indulge in decadence with our Mocha – a luscious combination of whipped cream, milk, chocolate syrup, and espresso, creating a rich and satisfying treat.",
    longDescription:
      "For the ultimate indulgence, our Mocha beckons with a luscious blend of whipped cream, milk, chocolate syrup, and espresso. Revel in the rich and satisfying flavors that make this treat a true delight for the senses.",
    ingredients: ["whipped cream", "milk", "chocolate syrup", "espresso"],
    price: 7.0,
    image: "https://example.com/mocha.jpg",
  },
  {
    name: "Espresso Conpana",
    shortDescription:
      "A delightful companion, our Espresso Conpana features whipped cream topping a shot of intense espresso for a sweet and satisfying experience.",
    longDescription:
      "Find joy in the delightful companionship of our Espresso Conpana. A shot of intense espresso is crowned with a generous layer of whipped cream, creating a sweet and satisfying experience with every sip.",
    ingredients: ["whipped cream", "espresso"],
    price: 4.0,
    image: "https://example.com/espresso-conpana.jpg",
  },
  {
    name: "Irish",
    shortDescription:
      "Embrace the spirit of Ireland with our Irish coffee – a delightful blend of whipped cream, whiskey, and espresso for a warm and invigorating experience.",
    longDescription:
      "Experience the warmth and spirit of Ireland with our Irish coffee. A delightful blend of whipped cream, whiskey, and espresso creates a harmonious and invigorating taste that transports you to the cozy ambiance of an Irish pub.",
    ingredients: ["whipped cream", "whiskey", "espresso"],
    price: 7.0,
    image: "https://example.com/irish.jpg",
  },
  {
    name: "Caramel Macchiato",
    shortDescription:
      "Sweet and sophisticated, our Caramel Macchiato features caramel syrup, hot milk, cold milk, and espresso for a delectable and luxurious treat.",
    longDescription:
      "Indulge in sophistication with our Caramel Macchiato. Caramel syrup, hot milk, cold milk, and espresso come together in perfect harmony, creating a delectable and luxurious treat for those with discerning taste buds.",
    ingredients: ["caramel syrup", "hot milk", "cold milk", "espresso"],
    price: 7.0,
    image: "https://example.com/caramel-macchiato.jpg",
  },
  {
    name: "Flat White",
    shortDescription:
      "Savor the velvety smoothness of our Flat White, a perfect balance of espresso and steamed milk.",
    longDescription:
      "Experience the perfect balance of espresso and steamed milk with our Flat White. The velvety smoothness and rich flavor make it a classic choice for coffee enthusiasts seeking a harmonious and delightful blend.",
    ingredients: ["espresso", "steamed milk"],
    price: 7.0,
    image: "https://example.com/flat-white.jpg",
  },
  {
    name: "Macchiato",
    shortDescription:
      "Simple yet bold, our Macchiato features a shot of espresso with just a touch of frothy milk for a pure coffee experience.",
    longDescription:
      "Embrace simplicity with our Macchiato, a bold shot of espresso lightly topped with frothy milk. This classic choice offers a pure and unadulterated coffee experience, highlighting the essence of premium espresso.",
    ingredients: ["espresso", "frothy milk"],
    price: 5.5,
    image: "https://example.com/macchiato.jpg",
  },
  {
    name: "Affogato",
    shortDescription:
      "Indulge in decadence with our Affogato, a delightful combination of a shot of hot espresso poured over a scoop of vanilla ice cream.",
    longDescription:
      "Treat yourself to decadence with our Affogato, where a hot shot of espresso meets the cold creaminess of vanilla ice cream. The contrast of temperatures and textures creates a heavenly experience for your taste buds.",
    ingredients: ["espresso", "vanilla ice cream"],
    price: 8.0,
    image: "https://example.com/affogato.jpg",
  },
];

const pastries = [
  {
    name: "Baklava",
    shortDescription:
      "Layers of flaky phyllo dough, chopped nuts, and sweet honey syrup make our Baklava a Mediterranean delight.",
    longDescription:
      "Indulge in the rich flavors of the Mediterranean with our Baklava. Layers of flaky phyllo dough embrace a tantalizing blend of chopped nuts, bathed in a sweet honey syrup. This classic pastry is a testament to the artistry of traditional desserts.",
    price: 9,
    image: "https://example.com/baklava.jpg",
  },
  {
    name: "Banbori Cake",
    shortDescription:
      "A fusion of banana and coconut, our Banbori Cake is a moist and flavorful tropical treat.",
    longDescription:
      "Embark on a journey to the tropics with our Banbori Cake. A fusion of banana and coconut creates a moist and flavorful cake that captures the essence of tropical bliss. Each bite is a delightful escape to sun-kissed shores.",
    price: 8,
    image: "https://example.com/banbori-cake.jpg",
  },
  {
    name: "Red Velvet Cake",
    shortDescription:
      "Luxuriously velvety, our Red Velvet Cake is a classic indulgence with its signature crimson hue and rich cream cheese frosting.",
    longDescription:
      "Experience pure indulgence with our Red Velvet Cake. Luxuriously velvety, its signature crimson hue is complemented by a rich cream cheese frosting. This classic treat is a timeless symbol of decadence and celebration.",
    price: 15,
    image: "https://example.com/red-velvet-cake.jpg",
  },
  {
    name: "Cheese Cake",
    shortDescription:
      "Creamy perfection, our Cheese Cake is a delectable balance of smooth cream cheese and a buttery graham cracker crust.",
    longDescription:
      "Savor the perfection of our Cheese Cake, a delectable creation that marries smooth cream cheese with a buttery graham cracker crust. Each forkful is a journey into creamy bliss, making it a timeless dessert for all occasions.",
    price: 6,
    image: "https://example.com/cheese-cake.jpg",
  },
  {
    name: "Cannoli",
    shortDescription:
      "Crispy shell, sweet ricotta filling, and a dusting of powdered sugar define our Cannoli as a Sicilian masterpiece.",
    longDescription:
      "Transport yourself to Sicily with our Cannoli, a masterpiece defined by its crispy shell, sweet ricotta filling, and a dusting of powdered sugar. Each bite is a taste of authentic Sicilian sweetness and culinary artistry.",
    price: 10,
    image: "https://example.com/cannoli.jpg",
  },
  {
    name: "Cinnamon Roll",
    shortDescription:
      "Warm and gooey, our Cinnamon Roll is a comforting delight swirled with cinnamon sugar and topped with cream cheese frosting.",
    longDescription:
      "Embrace the warmth of our Cinnamon Roll, a comforting delight swirled with cinnamon sugar and crowned with luscious cream cheese frosting. This timeless classic is a perfect treat for indulgent mornings or sweet cravings.",
    price: 5,
    image: "https://example.com/cinnamon-roll.jpg",
  },
  {
    name: "Curry Puff",
    shortDescription:
      "A savory delight, our Curry Puff features a flaky pastry filled with spiced potatoes, peas, and aromatic curry flavors.",
    longDescription:
      "Satisfy your savory cravings with our Curry Puff, a delectable pastry filled with spiced potatoes, peas, and aromatic curry flavors. Each bite is a journey into the heart of Indian-inspired culinary perfection.",
    price: 6,
    image: "https://example.com/curry-puff.jpg",
  },
  {
    name: "Macaron",
    shortDescription:
      "Elegance in every bite, our Macaron is a delicate French confection with a crispy shell and luscious ganache or buttercream filling.",
    longDescription:
      "Experience the epitome of elegance with our Macaron, a delicate French confection. The crispy shell gives way to a luscious filling of ganache or buttercream, creating a symphony of flavors that delights the senses.",
    price: 8,
    image: "https://example.com/macaron.jpg",
  },
  {
    name: "Panzerotti",
    shortDescription:
      "Savory or sweet, our Panzerotti is a versatile folded pastry that can be filled with a variety of delightful ingredients.",
    longDescription:
      "Versatility meets indulgence with our Panzerotti, a folded pastry that can be filled with savory or sweet delights. Whether you crave a savory explosion or a sweet surprise, each Panzerotti is a culinary journey in every fold.",
    price: 8,
    image: "https://example.com/panzerotti.jpg",
  },
  {
    name: "Apple Pie",
    shortDescription:
      "Classic and comforting, our Apple Pie features a golden, flaky crust enveloping tender slices of cinnamon-spiced apples.",
    longDescription:
      "Experience the warmth of tradition with our Apple Pie, a classic and comforting delight. A golden, flaky crust cradles tender slices of cinnamon-spiced apples, creating a timeless dessert that captures the essence of homemade goodness.",
    price: 10,
    image: "https://example.com/apple-pie.jpg",
  },
  {
    name: "Croissant",
    shortDescription:
      "Flaky and buttery, our Croissant is a classic French pastry perfect for breakfast or any time of the day.",
    longDescription:
      "Indulge in the timeless allure of our Croissant. Each bite unveils layers of flaky goodness, delivering a perfect balance of buttery richness. Whether paired with your morning coffee or enjoyed as a snack, this classic French pastry is sure to delight.",
    price: 4.5,
    image: "https://example.com/croissant.jpg",
  },
  {
    name: "Danish Pastry",
    shortDescription:
      "A delightful combination of sweet and fruity, our Danish Pastry features layers of delicate dough filled with a variety of fruit compotes.",
    longDescription:
      "Treat yourself to the sweet symphony of flavors in our Danish Pastry. Layers of delicate dough embrace a variety of fruit compotes, creating a delightful combination that tantalizes your taste buds. A perfect choice for those who appreciate the artistry of pastry.",
    price: 6.0,
    image: "https://example.com/danish-pastry.jpg",
  },
  {
    name: "Chocolate Éclair",
    shortDescription:
      "Satisfy your chocolate cravings with our Chocolate Éclair, a delectable pastry filled with smooth chocolate cream and topped with a glossy chocolate glaze.",
    longDescription:
      "For chocolate lovers, our Chocolate Éclair is a heavenly delight. A crisp pastry shell encases smooth chocolate cream, while a glossy chocolate glaze crowns this indulgent creation. Succumb to the temptation of this classic pastry that oozes decadence with each bite.",
    price: 7.5,
    image: "https://example.com/chocolate-eclair.jpg",
  },
  {
    name: "Fruit Tart",
    shortDescription:
      "Experience a burst of freshness with our Fruit Tart, featuring a buttery crust, velvety pastry cream, and an array of fresh seasonal fruits.",
    longDescription:
      "Elevate your palate with our Fruit Tart, a celebration of freshness and flavor. A buttery crust cradles velvety pastry cream, adorned with an artful arrangement of fresh seasonal fruits. This delightful pastry promises a symphony of taste and texture in every mouthful.",
    price: 8.0,
    image: "https://example.com/fruit-tart.jpg",
  },
  {
    name: "Blueberry Muffin",
    shortDescription:
      "Start your day on a sweet note with our Blueberry Muffin, a moist and fluffy delight packed with plump, juicy blueberries.",
    longDescription:
      "Fuel your mornings with the delightful sweetness of our Blueberry Muffin. Moist and fluffy, each bite is a burst of flavor from plump, juicy blueberries. Whether enjoyed with coffee or on its own, this muffin is a perfect companion to your day.",
    price: 3.5,
    image: "https://example.com/blueberry-muffin.jpg",
  },
];

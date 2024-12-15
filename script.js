//это бургер меню
let burger_menu = document.querySelector(".line"),
    menu = document.querySelector(".menu");

burger_menu.addEventListener("click", function () {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none"; 
    }
});

//добавление товара:

let input_name_product = document.getElementById("product-name"),
product_description = document.getElementById("product-description"),
product_price = document.getElementById("product-price"),
product_image = document.getElementById("product-image");


const parent = document.querySelector(".product_");
class Rectangle {
  constructor(src, alt, price, name) {
  
    this.src = src;
    this.alt = alt;
    this.price = price;
    this.name = name; 
  }

  render() {
    const div = document.createElement("div");


    
  
// 315364
div.innerHTML = `
<img class="product_img"  width="200px" height="250px" src=${this.src} alt=${this.alt}>
<p class="name">${this.name}</p>
<p class="description_">${this.alt}</p>
<p class="price">${this.price}</p>
<button class="buy">купить</button>

`
}
}
const data = 
input_name_product.value == this.name
product_image.value == this.src
product_description.value == this.alt
product_price.value == this.price





data.forEach((arr) => {
    new Rectangle(...arr).render();
  });
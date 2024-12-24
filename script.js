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

let input_name_product = document.querySelector(".product-name"),
  product_price = document.querySelector(".product-price"),
  product_image = document.querySelector(".product-image");

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

    div.style.background = "red";
    div.style.width = "200px";
    div.style.height = "350px";

    // 315364
    div.innerHTML = `
<img class="product_img"  width="200px" height="250px" src=${this.src} alt=${this.alt}>
<p class="name">${this.name}</p>
<p class="price">${this.price}</p>
<button class="buy">купить</button>

`;
  }
}

// поисковая строка

let screach_input = document.querySelector(".screach_input"),
  screach_button = document.querySelector(".screach_button");

  screach_button.addEventListener("click", (e)=>{
   if (screach_input == item.name) {
  
   } 
   
  })



fetch("https://6727354b302d03037e6fd11b.mockapi.io/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.map((item) => {
      const cards = document.querySelector(".product_");
      console.log(cards);
      cards.innerHTML += `
        <div class="card">
          <img src="${item.src}" alt="" />
          <p>${item.name}</p>
          <p>${item.price}</p>
        </div>
       `;
    });
  })
  .then(() => {
    // const buttons = document.querySelectorAll(".add-to-cart");
    // buttons.forEach((item) => {
    //   item.addEventListener("click", (event) => {
    //     if (event.target.classList.contains("add-to-cart")) {
    //       const description = event.target.getAttribute("data-description");
    //       const src = event.target.getAttribute("data-src");
    //       const title = event.target.getAttribute("data-title");
    //       addToCart(description, src, title);
    //     }
    //   });
    // });
    // console.log(buttons);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });



  
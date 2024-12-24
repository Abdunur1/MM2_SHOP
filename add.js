const addToCart = async (price, src, title) => {
  const url = "https://6727354b302d03037e6fd11b.mockapi.io/users";
  const data = { price, src, title };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const result = await response.json();
    console.log("Товар добавлен:", result);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

// const dataCards = [
//   {
//     name: "Pearl Bundle",
//     price: "550 сом",
//     src: "roblox-pearl-bundle.webp",
//   },
//   {
//     name: "Rainbow Bundle",
//     price: "1500 сом",
//     src: "murder-mystery-2-rainbow-bundle-rare.webp",
//   },
//   {
//     name: "Gold Bundle",
//     price: "2700 сом",
//     src: "murder-mystery-2-golden-bundle.webp",
//   },
// ];

const form = document.querySelector(".add-product"),
  addButton = document.querySelector(".add-button"),
  inputText = document.querySelector(".product-name"),
  inputPrice = document.querySelector(".product-price"),
  inputSrc = document.querySelector(".product-image");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addToCart(inputPrice.value, inputSrc.value, inputText.value);
});

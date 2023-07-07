// Dummy Data
const productsData = [
  {
    name: "Hand Base Lamp 1",
    price: "$35",
    category: "light",
    image:
      "https://images.unsplash.com/photo-1512718081172-33a71b172e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxpZ2h0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Hand Base Lamp 2",
    price: "$35",
    category: "light",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Hand Base Lamp 3",
    price: "$35",
    category: "sofa",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Hand Base Lamp 4",
    price: "$35",
    category: "sofa",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Hand Base Lamp 5",
    price: "$35",
    category: "bed",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    name: "Hand Base Lamp 6",
    price: "$35",
    category: "chor",
    image:
      "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpZ2h0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];

// display products based on the selected category
function displayProducts(category) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  // Filters
  const filteredProducts =
    category === "all"
      ? productsData
      : productsData.filter((product) => product.category === category);

  // Generate Html for productList
  filteredProducts.forEach((product) => {
    const productHTML = `
        <div class="product">
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
          <img style="width: 270px; height: 220px" src="${product.image}" alt="">
        </div>
      `;
    productList.insertAdjacentHTML("beforeend", productHTML);
  });
}

//  display all products
displayProducts("all");

//  event listener to each category
const categories = document.querySelectorAll(".category");
categories.forEach((category) => {
  category.addEventListener("click", function () {
    const selectedCategory = this.getAttribute("data-category");
    displayProducts(selectedCategory);
  });
});

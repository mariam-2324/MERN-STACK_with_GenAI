const productContainer = document.querySelector(".products")
const load = document.querySelector(".loading");
const button = document.querySelectorAll("button");


// fetch("https://fakestoreapi.com/products")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));



fetch("https://fakestoreapi.com/products").then((response) => {
  return response.json()
}).then((products) => {
  products.forEach(product => {
    console.log(product);

    productContainer.innerHTML +=
    `   <div class="main">
        <img src="${product.image}" alt="">
        <h4>${product.title}</h4>
        <h2>${product.price}$</h2>
        <p>${product.category}</p>
        <h6>${product.description}</h6>
        <button>Add to Cart</button>
        </div>`
    
    
  });
})

// fetch("https://fakestoreapi.com/products").then((response) => {
//     return response.json()
//   }).then((products) => {
//     // load.style.display = "none";
//     products.map((product, index) => {
//     console.log(product);

  //   productContainer.innerHTML +=
  //   `
  //       <div class="main">
  //       <img src="${product.image}" alt="">
  //       <h4>${product.title}</h4>
  //       <h2>${product.price}$</h2>
  //       <p>${product.category}</p>
  //       <h6>${product.description}</h6>
  //       <button>Add to Cart</button>
  //   </div>
  //   `
    
  // })
  
  // })
  









    // => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
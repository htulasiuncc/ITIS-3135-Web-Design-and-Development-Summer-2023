function fetchProducts(category) {
  const productList = document.getElementById(`${category.toLowerCase()}List`);

  // Clear the existing products
  productList.innerHTML = '';

  // Fetch products from items.json
  const itemsJsonPromise = fetch('items.json').then(res => res.json());

  // Fetch products from the external API
  const externalApiPromise = fetch('https://fakestoreapi.com/products').then(res => res.json());

  Promise.all([itemsJsonPromise, externalApiPromise])
    .then(([itemsJsonData, externalApiData]) => {
      console.log('Items JSON:', itemsJsonData);
      console.log('External API Data:', externalApiData);

      const itemsJsonProducts = itemsJsonData.items.filter(item => item.category === category);

      // Merge the items from items.json with external API data
      const products = itemsJsonProducts.map(item => {
        const matchingExternalProduct = externalApiData.find(externalProduct => externalProduct.id === item.id);
        return { ...item, ...matchingExternalProduct };
      });

      products.forEach(product => {
        const { id, title, price, category, description } = product;
        createProductElement(productList, id, title, price, category, description);
      });
    })
    .catch(error => {
      console.log("Error fetching product data:", error);
    });
}

function createProductElement(productList, id, title, price, category, description) {
  // Create elements for product info
  const productContainer = document.createElement("div");
  const productId = document.createElement("p");
  const productTitle = document.createElement("h3");
  const productPrice = document.createElement("p");
  const productCategory = document.createElement("p");
  const productDescription = document.createElement("p");

  // Set values for product info elements
  productId.textContent = `ID: ${id}`;
  productTitle.textContent = title;
  productPrice.textContent = `Price: ${price}`;
  productCategory.textContent = `Category: ${category}`;
  productDescription.textContent = `Description: ${description}`;

  // Append product info elements to product container
  productContainer.appendChild(productId);
  productContainer.appendChild(productTitle);
  productContainer.appendChild(productPrice);
  productContainer.appendChild(productCategory);
  productContainer.appendChild(productDescription);

  // Append product container to the product list
  productList.appendChild(productContainer);
}

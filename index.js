
const imageFolder = 'images/';
const productCards = document.getElementById('product-cards');
const products = [
  { src: 'Quarter kg.jpeg', name: 'Quarter Kg Cake', price: 'Rs. 150',description:'Description of the product goes here. You can add more details as needed.'},
  { src: 'brownie capchy.jpg', name: '2 Piece Brownie Box', price: 'Rs. 150', description:'Description of the product goes here. You can add more details as needed.'},
  { src: 'brownies.jpg', name: 'Brownies', price: 'Rs. 150', description:'Description of the product goes here. You can add more details as needed.'},
  { src: 'brownies.jpg', name: 'Brownies', price: 'Rs. 150', description:'Description of the product goes here. You can add more details as needed.'},
];
products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 col-sm-12';

  const card = `
    <div class="card">
      <img src="${imageFolder + product.src}" alt="${product.name}">
      <div class="card-details">
        <h4>${product.name}</h4>
        <strong>${product.description}</strong>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  `;

  col.innerHTML = card;
  productCards.appendChild(col);
});

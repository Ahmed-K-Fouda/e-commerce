// cart.js

'use strict';

const card = document.querySelector('.card');
const closeCard = document.querySelector('.close_card');
const shopCard = document.querySelector('.fa-cart-shopping');
const countItem = document.querySelector('.count_item');
const priceHeader = document.querySelector('.price_card_header');
const itemsInCard = document.querySelector('.items_card');
const countItemInHead = document.querySelector('.countItemInHead');
const priceCardTotal = document.querySelector('.price_card_total');

const cartItemsSection = document.getElementById('cartItemsSection');
const totalPriceElement = document.getElementById('totalPrice');
const placeOrderBtn = document.getElementById('placeOrderBtn');
let productCard = [];

const showCard = function () {
  card.style.cssText = 'right:0px;';
};

const hideCard = function () {
  card.style.cssText = 'right:-800px;';
};
shopCard.addEventListener('click', showCard);
closeCard.addEventListener('click', hideCard);

const addToCard = function (id, btn) {
  let existingProductIndex = productCard.findIndex(item => item.id === id);
  if (existingProductIndex !== -1) {
    productCard[existingProductIndex].quantity++;
  } else {
    productsJson[id].quantity = 1;
    productCard.push(productsJson[id]);
    btn.classList.add('active');
  }

  getCardItems();
};

const getCardItems = function () {
  let itemCard = '';
  let totalPrice = 0;
  let totalCountInHead = 0;
  let priceInCard = 0;
  let countInsideCard = 0;

  for (let i = 0; i < productCard.length; i++) {
    itemCard += `
        <div class="item_card">
          <img src="${productCard[i].img}" class='img_card'/>
          <div class="content">
            <h4>${productCard[i].name}.</h4>
            <p class="price_card">${productCard[i].price}</p>
            <p class="quantity_card">Quantity: ${productCard[i].quantity}</p> 
          </div>
          <button class="delete_item" onclick='removeFromCard(${i})'>
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
    `;

    totalPrice += productCard[i].price * productCard[i].quantity;
    totalCountInHead += productCard[i].quantity;

    priceInCard += productCard[i].price * productCard[i].quantity;
    countInsideCard += productCard[i].quantity;
  }

  itemsInCard.innerHTML = itemCard;
  priceHeader.innerHTML = '$' + totalPrice.toFixed(2);
  countItem.innerHTML = totalCountInHead;

  priceCardTotal.innerHTML = '$' + priceInCard;
  countItemInHead.innerHTML = `(${countInsideCard} Item in card)`;
};

const removeFromCard = function (index) {
  productCard.splice(index, 1);
  getCardItems();
};

const saveToLocalStorage = function () {
  localStorage.setItem('productCard', JSON.stringify(productCard));
};

const loadFromLocalStorage = function () {
  const savedData = localStorage.getItem('productCard');
  if (savedData) {
    productCard = JSON.parse(savedData);
    getCardItems();
  }
};

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);
window.addEventListener('beforeunload', saveToLocalStorage);

function displayCartItemsOnCheckout() {
  let itemCardsHTML = '';
  let totalPrice = 0;

  for (let i = 0; i < productCard.length; i++) {
    itemCardsHTML += `
      <div class="item_card check__item">
        <img src="${productCard[i].img}" class='img_card img__check'/>
        <div class="content content__check">
          <h4>${productCard[i].name}</h4>
          <p class="price_card">Price: <span>$${productCard[i].price}</span></p>
          <p class="quantity_card">Quantity: ${productCard[i].quantity}</p>
        </div>
      </div>
    `;
    totalPrice += productCard[i].price * productCard[i].quantity;
  }

  cartItemsSection.innerHTML = itemCardsHTML;
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Call the function to display cart items on page load
window.addEventListener('DOMContentLoaded', displayCartItemsOnCheckout);

placeOrderBtn.addEventListener('click', function () {
  alert('Order placed!');
});

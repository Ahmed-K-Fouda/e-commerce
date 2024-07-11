// Save data to localStorage
const saveToLocalStorage = function () {
  localStorage.setItem('productCard', JSON.stringify(productCard));
};

// Load data from localStorage
const loadFromLocalStorage = function () {
  const savedData = localStorage.getItem('productCard');
  if (savedData) {
    productCard = JSON.parse(savedData);
    getCardItems();
  }
};

window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

window.addEventListener('beforeunload', saveToLocalStorage);

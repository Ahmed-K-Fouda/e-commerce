// products.js

'use strict';

const items = document.getElementById('swiper_items');
const secProducts = document.getElementById('otherProducts');
const thirdProduct = document.getElementById('third_product');
const prodDiv = document.getElementById('product_div');
const form = document.querySelector('.search');
const search = document.querySelector("input[type='search']");
const btnFilter = document.querySelector('.btn_filter');
const filter = document.querySelector('.filter');

let productsJson;

function createProductElement(product) {
  const percentGenerate = Math.floor(
    ((product.old_price - product.price) / product.old_price) * 100
  );

  return `
    <div class="product swiper-slide">
      <div class="icons">
        <span><i onclick="addToCard(${
          product.id
        }, this)" class="fa-solid fa-cart-plus"></i></span>
        <span><i class="fa-solid fa-heart"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
      </div>
      ${
        product.old_price
          ? `<span class="sale_precent">%${percentGenerate}</span>`
          : ''
      }
      <div class="img_product">
        <img src="${product.img}" alt="products" />
        <img src="${product.img_hover}" alt="products" class="img_hover" />
      </div>
      <h3 class="product_name">
        <a href="./itempage.html">${product.name}</a>
      </h3>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <div class="price">
        <p><span>$${product.price}</span></p>
        ${
          product.old_price
            ? `<p class="old_price">${product.old_price}</p>`
            : ''
        }
      </div>
    </div>
  `;
}

function addProductsToElement(products, element) {
  let htmlContent = '';
  products.forEach(product => {
    htmlContent += createProductElement(product);
  });
  element.innerHTML = htmlContent;
}

items ? addProductsToElement(data, items) : '';
secProducts ? addProductsToElement(data, secProducts) : '';
thirdProduct ? addProductsToElement(data, thirdProduct) : '';
prodDiv ? addProductsToElement(data, prodDiv) : '';
productsJson = data;

function searchProducts(searchText, categoryFilter, brandFilter, colorFilter) {
  searchText = searchText.toLowerCase().trim();

  const filteredProducts = data.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchText);
    const matchesCategory =
      !categoryFilter || product.category === categoryFilter;
    const matchesBrand = !brandFilter || product.brand === brandFilter;
    const matchesColor = !colorFilter || product.color === colorFilter;

    return matchesSearch && matchesCategory && matchesBrand && matchesColor;
  });

  const htmlContent = filteredProducts
    .map(product => createProductElement(product))
    .join('');
  prodDiv.innerHTML = htmlContent ? htmlContent : 'No products found';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
});
search.addEventListener('input', function () {
  searchProducts(this.value, filterCategory(), filterBrand(), filterColor());
});

function filterCategory() {
  const categories = document.querySelectorAll(
    '.filter_item.category input:checked'
  );
  return categories.length > 0
    ? categories[0].parentNode.querySelector('span').innerText
    : null;
}

function filterBrand() {
  const brands = document.querySelectorAll('.filter_item.brand input:checked');
  return brands.length > 0
    ? brands[0].parentNode.querySelector('span').innerText
    : null;
}

function filterColor() {
  const colors = document.querySelectorAll('.filter_item.color input:checked');
  return colors.length > 0
    ? colors[0].parentNode.querySelector('span').innerText.toLowerCase()
    : null;
}

const filterInputs = document.querySelectorAll(
  '.filter input[type="checkbox"]'
);
filterInputs.forEach(input => {
  input.addEventListener('change', function () {
    searchProducts(
      search.value,
      filterCategory(),
      filterBrand(),
      filterColor()
    );
  });
});

// show and hide filter
btnFilter.addEventListener('click', function () {
  if (filter.style.visibility === 'visible') {
    filter.style.opacity = '0';
    filter.style.visibility = 'hidden';
  } else {
    filter.style.opacity = '1';
    filter.style.visibility = 'visible';
  }
});

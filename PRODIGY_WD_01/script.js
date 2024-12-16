let navbar = document.querySelector(".navbar");
let searchForm = document.querySelector(".search-form");
let cartItem = document.querySelector(".cart-items-container");

document.querySelector("#menu-btn").onclick = () => {
  if (!navbar.classList.contains("active")) {
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

document.querySelector("#search-btn").onclick = () => {
  if (!searchForm.classList.contains("active")) {
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    searchForm.classList.add("active");
  } else {
    searchForm.classList.remove("active");
  }
};

document.querySelector("#cart-btn").onclick = () => {
  if (!cartItem.classList.contains("active")) {
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.add("active");
  } else {
    cartItem.classList.remove("active");
  }
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

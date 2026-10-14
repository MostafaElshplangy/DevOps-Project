// Start Responsive

// Start index

let headerIcon = document.querySelector(".mobile");

let allHeaderLinks = document.querySelector(".header-links .links");

let headerCloseIcon = document.querySelector(".close");

let anchorCloseIcon = document.querySelector(".a-close");

if (headerIcon) {
  headerIcon.addEventListener("click", (e) => {
    allHeaderLinks.style.right = "0px";
    e.target.classList.toggle("active");
  });
}

if (headerCloseIcon) {
  headerCloseIcon.addEventListener("click", () => {
    allHeaderLinks.style.right = "-250px";
  });
}

if (anchorCloseIcon) {
  anchorCloseIcon.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// End index

// End Responsive

// Start Header Links Active Class

let headerLinks = document.querySelectorAll(".header-links .links a");

function removeActiveFromCollection(collection) {
  collection.forEach((member) => {
    member.classList.remove("active");
  });
}

function toggleHeaderLinksActive(headerLinks) {
  headerLinks.forEach((headerLink) => {
    headerLink.addEventListener("click", (e) => {
      removeActiveFromCollection(headerLinks);
      e.target.classList.toggle("active");
    });
  });
}

toggleHeaderLinksActive(headerLinks);

// End Header Links Active Class

// Start To Shop Buttons

let landingBtn = document.querySelector(".landing-content a");

let repairServicesBtn = document.querySelector(".repair-services a");

function goToShop(btn) {
  if (btn !== null) {
    btn.addEventListener("click", () => {
      removeActiveFromCollection(headerLinks);
      document.querySelector('a[href="shop.html"]').classList.add("active");
    });
  }
}

goToShop(landingBtn);

goToShop(repairServicesBtn);

// End To Shop Buttons

// Start Sign Up

let signUp = document.querySelector(".sign-up");

let headerSignUpLink = document.querySelector(".li-signup");

let cartSpan = document.createElement("span");

function registerForm() {
  let popupOverlay = document.createElement("div");
  popupOverlay.className = "popup-overlay";
  signUp.prepend(popupOverlay);
  let popUp = document.createElement("div");
  popUp.className = "signup-popup";
  popUp.innerHTML = `
    <div class="container">
      <form>
        <h2>Sign Up</h2>
        <input type="text" id="username" name="username" placeholder="Username" required />
        <input type="email" id="email" name="email" placeholder="Email" required />
        <input type="password" id="password" name="password" placeholder="Password" required />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
    <span class="popup-closebtn">X</span>
  `;
  signUp.appendChild(popUp);

  let popupSignUpBtn = document.querySelector(
    '.signup-popup form input[value="Sign Up"]'
  );

  popupSignUpBtn.addEventListener("click", (e) => {
    let userName = document.querySelector(
      '.signup-popup form input[id="username"]'
    );
    let email = document.querySelector('.signup-popup form input[id="email"]');
    let password = document.querySelector(
      '.signup-popup form input[id="password"]'
    );
    if (userName.value === "" || email.value === "" || password.value === "") {
      return false;
    } else {
      e.preventDefault();
      window.localStorage.setItem("userName", userName.value);
      window.localStorage.setItem("email", email.value);
      window.localStorage.setItem("password", password.value);
      popUp.remove();
      popupOverlay.remove();
      headerSignUpLink.innerHTML = window.localStorage.getItem("userName")[0];
      Swal.fire({
        title: "You signed up successfully",
        icon: "success",
      });
      cartSpan.style.right = "40px";
    }
  });

  let popupCloseBtn = document.querySelector(".signup-popup .popup-closebtn");

  popupCloseBtn.addEventListener("click", () => {
    popUp.remove();
    popupOverlay.remove();
  });
}

let signUpBtn = document.querySelector('.sign-up .form input[type="submit"]');

if (signUpBtn) {
  signUpBtn.addEventListener("click", registerForm);
}

if (window.localStorage.getItem("userName")) {
  headerSignUpLink.innerHTML = window.localStorage.getItem("userName")[0];
  headerSignUpLink.addEventListener("click", function (event) {
    event.preventDefault();
    return false;
  });
} else {
  cartSpan.style.right = "100px";
  cartSpan.style.top = "-22px";
  headerSignUpLink.addEventListener("click", function (event) {
    registerForm();
    event.preventDefault();
    return false;
  });
}

// End Sign Up

// Start Footer Links

function footerLinks(btn, file) {
  btn.addEventListener("click", () => {
    removeActiveFromCollection(headerLinks);
    document.querySelector(`a[href="${file}.html"]`).classList.add("active");
  });
}

let footerAbout = document.querySelector('footer a[href="about.html"]');

let footerContact = document.querySelector('footer a[href="contact.html"]');

let footerCart = document.querySelector('footer a[href="cart.html"]');

footerLinks(footerAbout, "about");

footerLinks(footerContact, "contact");

footerLinks(footerCart, "cart");

// End Footer Links

// Start Shop Pagination

var productsPerPage = 4;

var productBoxes = document.querySelectorAll(".shop-product-box");
var totalProducts = productBoxes.length;

var currentPage = 1;

for (var i = 0; i < totalProducts; i++) {
  if (i >= productsPerPage) {
    productBoxes[i].style.display = "none";
  }
}

if (document.getElementById("page1")) {
  document.getElementById("page1").addEventListener("click", function () {
    currentPage = 1;
    window.localStorage.setItem("shopCurrentPage", currentPage);
    showProducts();
  });
}
if (document.getElementById("page2")) {
  document.getElementById("page2").addEventListener("click", function () {
    currentPage = 2;
    window.localStorage.setItem("shopCurrentPage", currentPage);
    showProducts();
  });
}
if (document.getElementById("page3")) {
  document.getElementById("page3").addEventListener("click", function () {
    currentPage = 3;
    window.localStorage.setItem("shopCurrentPage", currentPage);
    showProducts();
  });
}
if (document.getElementById("page4")) {
  document.getElementById("page4").addEventListener("click", function () {
    currentPage = 4;
    window.localStorage.setItem("shopCurrentPage", currentPage);
    showProducts();
  });
}
if (document.getElementById("page5")) {
  document.getElementById("page5").addEventListener("click", function () {
    currentPage = 5;
    window.localStorage.setItem("shopCurrentPage", currentPage);
    showProducts();
  });
}
let paginationBtns = document.querySelectorAll(
  ".shop-pagination-buttons button"
);
toggleHeaderLinksActive(paginationBtns);

function showProducts() {
  if (window.localStorage.getItem("shopCurrentPage")) {
    currentPage = window.localStorage.getItem("shopCurrentPage");
    removeActiveFromCollection(paginationBtns);
    paginationBtns.forEach((paginationBtn) => {
      if (paginationBtn.innerHTML == currentPage) {
        paginationBtn.classList.add("active");
      }
    });
  }

  var startIndex = (currentPage - 1) * productsPerPage;
  var endIndex = startIndex + productsPerPage;

  for (var i = 0; i < totalProducts; i++) {
    productBoxes[i].style.display = "none";
  }

  for (var i = startIndex; i < endIndex && i < totalProducts; i++) {
    productBoxes[i].style.display = "block";
  }
}

showProducts();

// End Shop Pagination

// Start sProduct Images

let sProductLargeImg = document.querySelector(
  ".product-details .large-image img"
);

let sProductSmallImgs = document.querySelectorAll(
  ".product-details .small-images img"
);

if (sProductLargeImg && sProductSmallImgs) {
  let handler = setInterval(() => {
    let random = Math.trunc(Math.random() * sProductSmallImgs.length);
    sProductLargeImg.src = sProductSmallImgs[random].src;
  }, 2000);

  sProductSmallImgs.forEach((sProductSmallImg) => {
    sProductSmallImg.addEventListener("click", (e) => {
      clearInterval(handler);
      sProductLargeImg.src = e.target.src;
    });
  });
}

// End sProduct Images

// Start Blog

let blogBtns = document.querySelectorAll(".blog-box .text .blog-button button");

if (blogBtns) {
  blogBtns.forEach((blogBtn) => {
    blogBtn.addEventListener("click", (e) => {
      let blogDots =
        blogBtn.parentElement.previousElementSibling.previousElementSibling;
      let blogMoreText = blogBtn.parentElement.previousElementSibling;
      let blogBtnSpan = blogBtn.nextElementSibling;
      if (blogDots.style.display === "none") {
        blogDots.style.display = "inline";
        blogBtn.innerHTML = "Read more";
        blogBtnSpan.style.display = "inline";
        blogMoreText.style.display = "none";
      } else {
        blogDots.style.display = "none";
        blogBtn.innerHTML = "Read less";
        blogBtnSpan.style.display = "none";
        blogMoreText.style.display = "inline";
      }
    });
  });
}

let blogBoxes = document.querySelectorAll(".blogs .blog-box");

let totalBlogs = blogBoxes.length;

let blogCurrentPage = 1;

let blogsPerPage = 5;

for (let i = 0; i < totalBlogs; i++) {
  if (i >= blogsPerPage) {
    blogBoxes[i].style.display = "none";
  }
}

if (document.getElementById("blog-page1")) {
  document.getElementById("blog-page1").addEventListener("click", function () {
    blogCurrentPage = 1;
    window.localStorage.setItem("blogCurrentPage", blogCurrentPage);
    showProducts2();
  });
}

if (document.getElementById("blog-page2")) {
  document.getElementById("blog-page2").addEventListener("click", function () {
    blogCurrentPage = 2;
    window.localStorage.setItem("blogCurrentPage", blogCurrentPage);
    showProducts2();
  });
}

let blogPaginationBtns = document.querySelectorAll(
  ".blog-pagination-buttons button"
);
toggleHeaderLinksActive(blogPaginationBtns);

function showProducts2() {
  if (window.localStorage.getItem("blogCurrentPage")) {
    blogCurrentPage = window.localStorage.getItem("blogCurrentPage");
    removeActiveFromCollection(blogPaginationBtns);
    blogPaginationBtns.forEach((blogPaginationBtn) => {
      if (blogPaginationBtn.innerHTML == blogCurrentPage) {
        blogPaginationBtn.classList.add("active");
      }
    });
  }

  var startIndex = (blogCurrentPage - 1) * blogsPerPage;
  var endIndex = startIndex + blogsPerPage;

  for (var i = 0; i < totalBlogs; i++) {
    blogBoxes[i].style.display = "none";
  }

  for (var i = startIndex; i < endIndex && i < totalBlogs; i++) {
    blogBoxes[i].style.display = "flex";
  }
}

showProducts2();

// End Blog

// Start Contact

let contactBtn = document.querySelector(
  ".members-list .list-container .form button"
);

let contactInputName = document.querySelector(
  '.members-list .list-container .form input[placeholder="Your Name"]'
);

let contactInputTitle = document.querySelector(
  '.members-list .list-container .form input[placeholder="Your Title"]'
);

let contactInputEmail = document.querySelector(
  '.members-list .list-container .form input[type="email"]'
);

let contactTextarea = document.querySelector(
  ".members-list .list-container .form textarea"
);

let reviewsBox = document.querySelector(".reviews");

let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

if (reviewsBox && reviews) {
  reviews.forEach((review) => {
    let reviewNode = new DOMParser().parseFromString(review, "text/html").body
      .firstChild;
    reviewsBox.appendChild(reviewNode);
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", (e) => {
    if (
      contactInputName.value === "" ||
      contactInputTitle.value === "" ||
      contactInputEmail.value === "" ||
      contactTextarea.value === ""
    ) {
      return false;
    } else {
      e.preventDefault();
      window.location.reload();
      let review = document.createElement("div");
      review.className = "review-box";
      review.innerHTML = `
        <div class="image">
          <img src="./Images/Avatar.png" alt="User Image">
        </div>
        <div class="info">
          <h3>${contactInputName.value}</h3>
          <p>${contactInputTitle.value}</p>
          <p>Email: ${contactInputEmail.value}</p>
          <p>Message: ${contactTextarea.value}</p>
        </div>`;
      reviewsBox.appendChild(review);
      reviews.push(review.outerHTML);
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  });
}

// End Contact

// Start Cart and Cart Span

let table = document.querySelector(".cart-details table");

let tableTbody = document.querySelector(".cart-details table tbody");

let productsArray = JSON.parse(window.localStorage.getItem("products")) || [];

let productsCartBtns = document.querySelectorAll(
  ".featured-products .product-box .cart"
);

let headerUl = document.querySelector(
  ".landing-page header .header-links .links"
);

let count = window.localStorage.getItem("spanContent") || 0;

if (window.localStorage.getItem("spanContent")) {
  headerUl.appendChild(cartSpan);
  cartSpan.innerHTML = window.localStorage.getItem("spanContent");
}

productsCartBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    let productBox = e.target.parentElement.parentElement.parentElement;
    let price = productBox.querySelector(".price").innerHTML;
    let title = productBox.querySelector("h3").innerHTML;
    let image = productBox.querySelector("img").getAttribute("src");
    let obj = {
      id: productsArray.length,
      imageSrc: image,
      name: title,
      price: price,
    };

    let isDuplicate = false;
    for (let i = 0; i < productsArray.length; i++) {
      if (productsArray[i].imageSrc === obj.imageSrc) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      headerUl.appendChild(cartSpan);
      count++;
      cartSpan.innerHTML = count;
      window.localStorage.setItem("spanContent", count);
      productsArray.push(obj);
      window.localStorage.setItem("products", JSON.stringify(productsArray));
      Swal.fire({
        title: "Product is added successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "This product already exists in your cart!!",
        icon: "warning",
      });
    }
  });
});

function tableDisplayNone() {
  table.style.display = "none";
  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode(
    "You Don't have any products in your cart!!"
  );
  h2.appendChild(h2Text);
  let cartContainer = document.querySelector(".cart-details .container");
  cartContainer.appendChild(h2);
}

if (table) {
  if (productsArray.length > 0) {
    for (let i = 0; i < productsArray.length; i++) {
      let tbody = document.createElement("tbody");
      tbody.setAttribute("tbodyId", productsArray[i].id);
      tbody.innerHTML = `
        <td><img src="${productsArray[i].imageSrc}" alt="Product 1"></td>
        <td>${productsArray[i].name}</td>
        <td class="price">${productsArray[i].price}</td>
        <td><input type="number" value="1" min="1"></td>
        <td class="subtotal">$0</td>
        <td><button>Remove</button></td>
      `;
      table.appendChild(tbody);
    }
  } else {
    tableDisplayNone();
  }
}

let cartPrices = document.querySelectorAll(".cart-details table tbody .price");
let cartInputs = document.querySelectorAll(".cart-details table input");
let cartSubtotals = document.querySelectorAll(".cart-details table .subtotal");
let cartFootTotal = document.querySelector(".cart-details table tfoot .foot-total");

function updateCartFootTotal() {
  let sum = 0;
  document.querySelectorAll(".cart-details table .subtotal").forEach(subtotal => {
    sum += +subtotal.innerHTML.replace(/[^0-9.-]+/g, "");
  });
  cartFootTotal.innerHTML = `$${sum.toFixed(2)}`;
  window.localStorage.setItem("cartFootTotal", cartFootTotal.innerHTML);
}

function setSubtotal() {
  cartInputs.forEach((input, index) => {
    const productId = input.closest('tbody').getAttribute('tbodyid');
    input.value = window.localStorage.getItem(`cartInputValue_${productId}`) || 1;
    cartSubtotals[index].innerHTML = window.localStorage.getItem(`cartSubtotal_${productId}`) || "$78";
    
    input.onchange = function() {
      const price = +cartPrices[index].innerHTML.match(/\d+/)[0];
      const quantity = +input.value;
      cartSubtotals[index].innerHTML = `$${price * quantity}`;
      updateCartFootTotal();
      window.localStorage.setItem(`cartSubtotal_${productId}`, cartSubtotals[index].innerHTML);
      window.localStorage.setItem(`cartInputValue_${productId}`, input.value);
    };
  });
}

setSubtotal();

if (cartFootTotal) {
  updateCartFootTotal();
  cartFootTotal.innerHTML = window.localStorage.getItem("cartFootTotal") || "$0";
}

let cartRemoveBtns = document.querySelectorAll(".cart-details table tbody button");

cartRemoveBtns.forEach((cartRemoveBtn) => {
  cartRemoveBtn.addEventListener("click", (e) => {
    let targetedTbody = e.target.closest('tbody');
    let productId = targetedTbody.getAttribute("tbodyid");
    
    // Remove from localStorage
    window.localStorage.removeItem(`cartSubtotal_${productId}`);
    window.localStorage.removeItem(`cartInputValue_${productId}`);
    
    // Remove from DOM
    targetedTbody.remove();
    
    // Update total immediately after removal
    updateCartFootTotal();
    
    // Update product count
    count--;
    cartSpan.innerHTML = count;
    window.localStorage.setItem("spanContent", count);
    
    if (count === 0) {
      // Clear all cart-related localStorage items
      window.localStorage.removeItem("spanContent");
      window.localStorage.removeItem("cartFootTotal");
      window.localStorage.removeItem("products");
      cartSpan.style.display = "none";
      tableDisplayNone();
    }
    
    // Update products array
    productsArray = productsArray.filter(product => product.id != productId);
    window.localStorage.setItem("products", JSON.stringify(productsArray));
  });
});

// End Cart

/* ==========================================================================
   LFC — Lucky Fried Chicken | script.js
   Menu data below is a SAMPLE placeholder (few items per category) so the
   cart + checkout flow can be tested end to end. Full real menu with all
   items/prices will replace this array in the next step.
   ========================================================================== */

const WHATSAPP_NUMBER = "923111444532"; // country code + number, no spaces or +

const menuData = [
  { id: "zinger-burger", name: "Zinger Burger", price: 380, category: "burgers", img: "assets/zinger-burger.jpg", desc: "Crispy zinger patty, fresh lettuce" },
  { id: "tower-burger", name: "Tower Burger", price: 580, category: "burgers", img: "assets/tower-burger.jpg", desc: "Loaded double-layer tower" },
  { id: "premium-classic-medium", name: "Premium Classic Pizza (Medium)", price: 1100, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choice of Chicken Tikka, Fajita or Supreme" },
  { id: "crispy-chicken-3pc", name: "Crispy Chicken (3 pcs)", price: 660, category: "crispy", img: "assets/crispy-chicken.jpg", desc: "Golden fried, extra crispy" },
  { id: "hot-wings-5pc", name: "Hot Wings (5 pcs)", price: 350, category: "crispy", img: "assets/hot-wings.jpg", desc: "Spicy tossed wings" },
  { id: "french-fries-large", name: "French Fries (Large)", price: 350, category: "fries", img: "assets/french-fries.jpg", desc: "Golden, salted" },
  { id: "family-deal", name: "Family Deal", price: 2100, category: "deals", img: "assets/family-deal.jpg", desc: "5 Zinger Burger, 1 Large Fries, 1.5 Ltr Drink" },
  { id: "student-deal", name: "Student Deal", price: 1450, category: "deals", img: "assets/student-deal.jpg", desc: "1 Zinger, 1 Patty Burger, 1 Dbl Kabab Shw, 1 Reg Fries, 5 Nuggets, 1.5 Ltr Drink" },
  { id: "zinger-paratha", name: "Zinger Paratha Roll", price: 420, category: "rolls", img: "assets/zinger-paratha.jpg", desc: "Ask about today's discounted roll" },
];

let cart = JSON.parse(localStorage.getItem("lfc-cart") || "[]");

/* ---------- Menu rendering ---------- */

function renderMenu(category = "deals") {
  const grid = document.getElementById("menu-grid");
  const items = menuData.filter((item) => item.category === category);

  grid.innerHTML = items
    .map(
      (item) => `
      <article class="menu-item" data-category="${item.category}">
        <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.style.background='#ffe28a'">
        <div class="menu-item-info">
          <h3>${item.name}</h3>
          <p class="item-desc">${item.desc}</p>
          <div class="item-footer">
            <span class="item-price">Rs. ${item.price}</span>
            <button class="add-btn" data-id="${item.id}">Add +</button>
          </div>
        </div>
      </article>`
    )
    .join("");
}

document.getElementById("menu-categories").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;

  document.querySelectorAll(".cat-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderMenu(btn.dataset.category);
});

document.getElementById("menu-grid").addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addToCart(btn.dataset.id);
});

/* ---------- Cart logic ---------- */

function addToCart(id) {
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    const product = menuData.find((m) => m.id === id);
    cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, qty: 1 });
  }
  saveCart();
  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((c) => c.id !== id);
  }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("lfc-cart", JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const emptyMsg = document.getElementById("cart-empty");
  const countBadge = document.getElementById("cart-count");
  const totalAmount = document.getElementById("cart-total-amount");

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  countBadge.textContent = totalQty;

  if (cart.length === 0) {
    container.innerHTML = "";
    emptyMsg.style.display = "block";
  } else {
    emptyMsg.style.display = "none";
    container.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" onerror="this.style.background='#ffe28a'">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <span class="cart-item-price">Rs. ${item.price * item.qty}</span>
          </div>
          <div class="qty-control">
            <button data-id="${item.id}" data-delta="-1">&minus;</button>
            <span>${item.qty}</span>
            <button data-id="${item.id}" data-delta="1">+</button>
          </div>
        </div>`
      )
      .join("");
  }

  totalAmount.textContent = `Rs. ${cartTotal()}`;
}

document.getElementById("cart-items").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-id]");
  if (!btn) return;
  changeQty(btn.dataset.id, Number(btn.dataset.delta));
});

/* ---------- Cart drawer open/close ---------- */

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function openCart() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("cart-btn").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ---------- Mobile nav toggle ---------- */

const navLinks = document.getElementById("nav-links");
document.getElementById("menu-toggle").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

/* ---------- WhatsApp checkout ---------- */

document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty. Add something tasty first!");
    return;
  }

  let message = "Hi LFC! I'd like to order:\n\n";
  cart.forEach((item) => {
    message += `• ${item.name} x${item.qty} — Rs. ${item.price * item.qty}\n`;
  });
  message += `\nTotal: Rs. ${cartTotal()}`;
  message += "\nPayment: Cash on Delivery";
  message += "\n\nMy delivery address: ";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

/* ---------- Init ---------- */

renderMenu("deals");
renderCart();

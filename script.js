const WHATSAPP_NUMBER = "923111444532";

const menuData = [
  // Deals
  { id: "family-deal", name: "Family Deal", price: 2100, category: "deals", img: "assets/family-deal.jpg", desc: "5 Zinger Burger, 1 Large Fries, 1.5 Ltr Drink" },
  { id: "crispy-fun", name: "Crispy Fun", price: 800, category: "deals", img: "assets/crispy-fun.jpg", desc: "3 CH Pcs, 1 Burger Bun, 1 Dip Sauce, 0.5 Ltr Drink" },
  { id: "couple-deal", name: "Couple Deal", price: 1000, category: "deals", img: "assets/couple-deal.jpg", desc: "1 Zinger Burger, 1 Zinger Shwarma, 1 Reg Fries, 0.5 Ltr Drink" },
  { id: "masti-deal", name: "Masti Deal", price: 1250, category: "deals", img: "assets/masti-deal.jpg", desc: "2 Fillet Burger, 5 Nuggets, 1 Reg Fries, 1.5 Ltr Drink" },
  { id: "friends-deal", name: "Friends Deal", price: 1100, category: "deals", img: "assets/friends-deal.jpg", desc: "2 Zinger, 3 Nuggets, 1 Reg Fries, 0.5 Ltr Drink" },
  { id: "student-deal", name: "Student Deal", price: 1450, category: "deals", img: "assets/student-deal.jpg", desc: "1 Zinger, 1 Patty Burger, 1 Dbl Kabab Shw, 1 Reg Fries, 5 Nuggets, 1.5 Ltr Drink" },
  { id: "kids-deal", name: "Kids Deal", price: 1050, category: "deals", img: "assets/kids-deal.jpg", desc: "2 Patty Burger, 5 Nuggets, 1 Reg Fries, 0.5 Ltr Drink" },
  { id: "deal-1", name: "Deal 1", price: 1150, category: "deals", img: "assets/deal-1.jpg", desc: "1 Small Pizza, 1 Zinger Burger, 1 Reg Fries, 0.5 Ltr Drink" },
  { id: "deal-2", name: "Deal 2", price: 1250, category: "deals", img: "assets/deal-2.jpg", desc: "1 Pizza Paratha, 1 Sticko Sandwich, 0.5 Ltr Drink" },
  { id: "deal-3", name: "Deal 3", price: 2800, category: "deals", img: "assets/deal-3.jpg", desc: "1 Large Pizza, 3 Zinger Burger, 1 Large Fries, 1.5 Ltr Drink" },
  { id: "deal-4", name: "Deal 4", price: 2370, category: "deals", img: "assets/deal-4.jpg", desc: "1 Medium Pizza, 10 Hot Wings, 2 CH Pcs, 1 Large Fries, 1.5 Ltr Drink" },
  { id: "deal-5", name: "Deal 5", price: 2100, category: "deals", img: "assets/deal-5.jpg", desc: "1 Large Crown Pizza, 1 Behari Roll, 1.5 Ltr Drink" },

  // Burgers
  
  { id: "zinger-burger", name: "Zinger Burger", price: 380, category: "burgers", img: "assets/zinger-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "tower-burger", name: "Tower Burger", price: 580, category: "burgers", img: "assets/tower-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "max-burger", name: "Max Burger", price: 430, category: "burgers", img: "assets/max-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "fillet-burger", name: "Fillet Burger", price: 420, category: "burgers", img: "assets/fillet-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "double-patty-cheese-burger", name: "Double Patty Cheese Burger", price: 500, category: "burgers", img: "assets/double-patty-cheese-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "patty-burger", name: "Patty Burger", price: 300, category: "burgers", img: "assets/patty-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "mc-burger", name: "MC Burger", price: 400, category: "burgers", img: "assets/mc-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "chapli-burger", name: "Chapli Burger", price: 280, category: "burgers", img: "assets/chapli-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "tikka-tower-burger", name: "Tikka Tower Burger", price: 550, category: "burgers", img: "assets/tikka-tower-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "patty-chapli-cheese-burger", name: "Patty + Chapli Cheese Burger", price: 450, category: "burgers", img: "assets/patty-chapli-cheese-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "fish-burger-small", name: "Seasonal Fish Burger (Small)", price: 470, category: "burgers", img: "assets/fish-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },
  { id: "fish-burger-large", name: "Seasonal Fish Burger (Large)", price: 800, category: "burgers", img: "assets/fish-burger.jpg", desc: "Make it a meal +Rs. 150", mealUpgrade: 150 },

  //Pizza
  { id: "signature-pizza-medium", name: "Signature Pizza (Medium)", price: 1300, category: "pizza", img: "assets/signature-pizza.jpg", desc: "Choose your flavour", flavours: ["Crown Kabab", "Lazania", "Behari Kabab"] },
  { id: "signature-pizza-large", name: "Signature Pizza (Large)", price: 1700, category: "pizza", img: "assets/signature-pizza.jpg", desc: "Choose your flavour", flavours: ["Crown Kabab", "Lazania", "Behari Kabab"] },
  { id: "premium-classic-small", name: "Premium Classic Pizza (Small)", price: 650, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose your flavour", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"] },
  { id: "premium-classic-medium", name: "Premium Classic Pizza (Medium)", price: 1100, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose your flavour", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"] },
  { id: "premium-classic-large", name: "Premium Classic Pizza (Large)", price: 1500, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose your flavour", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"] },
  { id: "premium-classic-2x-small", name: "2x Small Premium Classic", price: 1200, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose 2 flavours", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"], flavourSlots: 2 },
  { id: "premium-classic-2x-medium", name: "2x Medium Premium Classic", price: 2050, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose 2 flavours", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"], flavourSlots: 2 },
  { id: "premium-classic-2x-large", name: "2x Large Premium Classic", price: 2800, category: "pizza", img: "assets/premium-classic.jpg", desc: "Choose 2 flavours", flavours: ["Lucky Signature", "Malai Boti", "Creamy Super Duper", "Chicken Tikka", "Chicken Fajita", "Fajita Sensation", "Spicy Italian", "Supreme Pizza", "Vegi Lover", "Cheese Lover"], flavourSlots: 2 },

  // Crispy Chicken Corner
  { id: "crispy-chicken-1pc", name: "Crispy Chicken (1 pc)", price: 230, category: "crispy", img: "assets/crispy-chicken.jpg", desc: "Golden fried, extra crispy" },
  { id: "crispy-chicken-3pc", name: "Crispy Chicken (3 pcs)", price: 660, category: "crispy", img: "assets/crispy-chicken.jpg", desc: "Golden fried, extra crispy" },
  { id: "crispy-chicken-5pc", name: "Crispy Chicken (5 pcs)", price: 1050, category: "crispy", img: "assets/crispy-chicken.jpg", desc: "Golden fried, extra crispy" },
  { id: "hot-wings-5pc", name: "Hot Wings (5 pcs)", price: 350, category: "crispy", img: "assets/hot-wings.jpg", desc: "Spicy tossed wings" },
  { id: "hot-wings-10pc", name: "Hot Wings (10 pcs)", price: 650, category: "crispy", img: "assets/hot-wings.jpg", desc: "Spicy tossed wings" },
  { id: "nuggets-5pc", name: "Nuggets (5 pcs)", price: 280, category: "crispy", img: "assets/nuggets.jpg", desc: "Classic chicken nuggets" },
  { id: "nuggets-10pc", name: "Nuggets (10 pcs)", price: 550, category: "crispy", img: "assets/nuggets.jpg", desc: "Classic chicken nuggets" },

  // Fries Corner
  { id: "french-fries-small", name: "French Fries (Small)", price: 200, category: "fries", img: "assets/french-fries.jpg", desc: "Golden, salted" },
  { id: "french-fries-large", name: "French Fries (Large)", price: 350, category: "fries", img: "assets/french-fries.jpg", desc: "Golden, salted" },
  { id: "spicy-garlic-fries-small", name: "Spicy Garlic Fries (Small)", price: 300, category: "fries", img: "assets/spicy-garlic-fries.jpg", desc: "Tossed in spicy garlic sauce" },
  { id: "spicy-garlic-fries-large", name: "Spicy Garlic Fries (Large)", price: 400, category: "fries", img: "assets/spicy-garlic-fries.jpg", desc: "Tossed in spicy garlic sauce" },
  { id: "pizza-fries-small", name: "Pizza Fries (Small)", price: 400, category: "fries", img: "assets/pizza-fries.jpg", desc: "Loaded with cheese, olives & sauce" },
  { id: "pizza-fries-large", name: "Pizza Fries (Large)", price: 600, category: "fries", img: "assets/pizza-fries.jpg", desc: "Loaded with cheese, olives & sauce" },

  // Rolls, Parathas & More
  { id: "creamy-crunchy-pasta", name: "Creamy Crunchy Pasta", price: 700, category: "rolls", img: "assets/creamy-crunchy-pasta.jpg", desc: "Creamy pasta with crunchy topping" },
  { id: "behari-roll", name: "Behari Roll", price: 500, category: "rolls", img: "assets/behari-roll.jpg", desc: "Classic behari kabab roll" },
  { id: "sticko-sandwich", name: "Sticko Sandwich", price: 700, category: "rolls", img: "assets/sticko-sandwich.jpg", desc: "Served with fries & sauce" },
  { id: "pizza-paratha", name: "Pizza Paratha", price: 600, category: "rolls", img: "assets/pizza-paratha.jpg", desc: "Paratha loaded with pizza toppings" },
  { id: "zinger-paratha", name: "Zinger Paratha Roll", price: 420, category: "rolls", img: "assets/zinger-paratha.jpg", desc: "Mon: Rs. 380 — daily discounted roll" },
  { id: "kabab-paratha", name: "Kabab Paratha Roll", price: 290, category: "rolls", img: "assets/kabab-paratha.jpg", desc: "Tue: Rs. 260 — daily discounted roll" },
  { id: "zinger-kabab-paratha", name: "Zinger Kabab Paratha Roll", price: 520, category: "rolls", img: "assets/zinger-kabab-paratha.jpg", desc: "Wed: Rs. 470 — daily discounted roll" },
  { id: "zinger-shwarma", name: "Zinger Shwarma", price: 400, category: "rolls", img: "assets/zinger-shwarma.jpg", desc: "Fri: Rs. 360 — daily discounted roll" },
  { id: "kabab-shwarma", name: "Kabab Shwarma", price: 270, category: "rolls", img: "assets/kabab-shwarma.jpg", desc: "Sat: Rs. 240 — daily discounted roll" },
  { id: "zinger-kabab-shwarma", name: "Zinger Kabab Shwarma", price: 480, category: "rolls", img: "assets/zinger-kabab-shwarma.jpg", desc: "Sun: Rs. 430 — daily discounted roll" },
];

let cart = JSON.parse(localStorage.getItem("lfc-cart") || "[]");

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

const navLinks = document.getElementById("nav-links");
document.getElementById("menu-toggle").addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

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

renderMenu("deals");
renderCart();

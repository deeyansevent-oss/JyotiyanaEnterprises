const WHATSAPP_NUMBER = "918696420000";

const categories = [
  "Custom Mugs",
  "LED Name Lamps",
  "Photo Gifts",
  "Name Plates",
  "Laser Engraving",
  "Corporate Gifts",
  "3D Printing",
  "Customized T-Shirts"
];

const occasions = [
  "Birthday",
  "Anniversary",
  "Wedding",
  "Corporate",
  "Baby Gift",
  "Couple Gift",
  "Housewarming",
  "Festival"
];

const products = [
  { id: "JYE-CM-001", name: "Personalized Photo Mug", category: "Custom Mugs", price: 299, featured: true },
  { id: "JYE-CM-002", name: "Magic Color Changing Mug", category: "Custom Mugs", price: 399, featured: false },
  { id: "JYE-CM-003", name: "Couple Photo Mug", category: "Custom Mugs", price: 349, featured: false },
  { id: "JYE-CM-004", name: "Birthday Theme Mug", category: "Custom Mugs", price: 329, featured: false },
  { id: "JYE-CM-005", name: "Corporate Logo Mug", category: "Custom Mugs", price: 249, featured: false },
  { id: "JYE-CM-006", name: "Name Initial Mug", category: "Custom Mugs", price: 279, featured: false },
  { id: "JYE-LED-001", name: "LED Name Lamp", category: "LED Name Lamps", price: 699, featured: true },
  { id: "JYE-LED-002", name: "Heart LED Photo Lamp", category: "LED Name Lamps", price: 799, featured: false },
  { id: "JYE-LED-003", name: "Acrylic Couple LED Lamp", category: "LED Name Lamps", price: 899, featured: false },
  { id: "JYE-LED-004", name: "Baby Name LED Lamp", category: "LED Name Lamps", price: 749, featured: false },
  { id: "JYE-LED-005", name: "Anniversary LED Lamp", category: "LED Name Lamps", price: 849, featured: false },
  { id: "JYE-LED-006", name: "Wooden Base LED Lamp", category: "LED Name Lamps", price: 999, featured: false },
  { id: "JYE-PG-001", name: "Photo Fridge Magnet", category: "Photo Gifts", price: 199, featured: true },
  { id: "JYE-PG-002", name: "Photo Keychain", category: "Photo Gifts", price: 149, featured: false },
  { id: "JYE-PG-003", name: "Photo Frame Collage", category: "Photo Gifts", price: 599, featured: false },
  { id: "JYE-PG-004", name: "Heart Photo Stand", category: "Photo Gifts", price: 449, featured: false },
  { id: "JYE-PG-005", name: "Mini Photo Album", category: "Photo Gifts", price: 699, featured: false },
  { id: "JYE-PG-006", name: "Personalized Cushion", category: "Photo Gifts", price: 499, featured: false },
  { id: "JYE-NP-001", name: "Wooden Name Plate", category: "Name Plates", price: 799, featured: true },
  { id: "JYE-NP-002", name: "Acrylic Door Name Plate", category: "Name Plates", price: 899, featured: false },
  { id: "JYE-NP-003", name: "Premium House Name Plate", category: "Name Plates", price: 1199, featured: false },
  { id: "JYE-NP-004", name: "Office Desk Name Plate", category: "Name Plates", price: 649, featured: false },
  { id: "JYE-NP-005", name: "Family Name Board", category: "Name Plates", price: 999, featured: false },
  { id: "JYE-NP-006", name: "Golden Finish Name Plate", category: "Name Plates", price: 1299, featured: false },
  { id: "JYE-LE-001", name: "Laser Engraved Pen", category: "Laser Engraving", price: 349, featured: true },
  { id: "JYE-LE-002", name: "Engraved Wooden Plaque", category: "Laser Engraving", price: 899, featured: false },
  { id: "JYE-LE-003", name: "Laser Engraved Wallet", category: "Laser Engraving", price: 699, featured: false },
  { id: "JYE-LE-004", name: "Engraved Metal Keychain", category: "Laser Engraving", price: 199, featured: false },
  { id: "JYE-LE-005", name: "Wooden Photo Engraving", category: "Laser Engraving", price: 799, featured: false },
  { id: "JYE-LE-006", name: "Engraved Couple Frame", category: "Laser Engraving", price: 999, featured: false },
  { id: "JYE-CG-001", name: "Corporate Gift Hamper", category: "Corporate Gifts", price: 1499, featured: true },
  { id: "JYE-CG-002", name: "Logo Pen Set", category: "Corporate Gifts", price: 599, featured: false },
  { id: "JYE-CG-003", name: "Employee Welcome Kit", category: "Corporate Gifts", price: 1999, featured: false },
  { id: "JYE-CG-004", name: "Branded Diary Combo", category: "Corporate Gifts", price: 899, featured: false },
  { id: "JYE-CG-005", name: "Promotional Bottle Set", category: "Corporate Gifts", price: 799, featured: false },
  { id: "JYE-CG-006", name: "Client Appreciation Box", category: "Corporate Gifts", price: 2499, featured: false },
  { id: "JYE-3D-001", name: "3D Printed Miniature", category: "3D Printing", price: 799, featured: true },
  { id: "JYE-3D-002", name: "Custom 3D Name Stand", category: "3D Printing", price: 499, featured: false },
  { id: "JYE-3D-003", name: "3D Printed Figurine", category: "3D Printing", price: 1299, featured: false },
  { id: "JYE-3D-004", name: "3D Logo Display", category: "3D Printing", price: 999, featured: false },
  { id: "JYE-3D-005", name: "3D Keychain Set", category: "3D Printing", price: 299, featured: false },
  { id: "JYE-3D-006", name: "Mini 3D Trophy", category: "3D Printing", price: 699, featured: false },
  { id: "JYE-TS-001", name: "Customized Black T-Shirt", category: "Customized T-Shirts", price: 499, featured: true },
  { id: "JYE-TS-002", name: "Couple T-Shirt Combo", category: "Customized T-Shirts", price: 899, featured: false },
  { id: "JYE-TS-003", name: "Birthday T-Shirt", category: "Customized T-Shirts", price: 549, featured: false },
  { id: "JYE-TS-004", name: "Company Logo T-Shirt", category: "Customized T-Shirts", price: 399, featured: false },
  { id: "JYE-TS-005", name: "Family Trip T-Shirt", category: "Customized T-Shirts", price: 599, featured: false },
  { id: "JYE-TS-006", name: "Photo Print T-Shirt", category: "Customized T-Shirts", price: 649, featured: false },
  { id: "JYE-CG-007", name: "Customized Water Bottle", category: "Corporate Gifts", price: 499, featured: true },
  { id: "JYE-PG-007", name: "Personalized Gift Box", category: "Photo Gifts", price: 999, featured: false }
];

const categoryImages = {
  "Custom Mugs": "assets/category-custom-mugs.png",
  "LED Name Lamps": "assets/category-led-name-lamps.png",
  "Photo Gifts": "assets/category-photo-gifts.png",
  "Name Plates": "assets/category-name-plates.png",
  "Laser Engraving": "assets/category-laser-engraving.png",
  "Corporate Gifts": "assets/category-corporate-gifts.png",
  "3D Printing": "assets/category-3d-printing.png",
  "Customized T-Shirts": "assets/category-customized-tshirts.png"
};

const productImages = {
  "Custom Mugs": "assets/product-photo-mug.png",
  "LED Name Lamps": "assets/product-led-lamp.png",
  "Photo Gifts": "assets/product-fridge-magnet.png",
  "Name Plates": "assets/product-wooden-name-plate.png",
  "Laser Engraving": "assets/product-engraved-pen.png",
  "Corporate Gifts": "assets/product-water-bottle.png",
  "3D Printing": "assets/category-3d-printing.png",
  "Customized T-Shirts": "assets/category-customized-tshirts.png"
};

const exactProductImages = {
  "Personalized Photo Mug": "assets/product-photo-mug.png",
  "LED Name Lamp": "assets/product-led-lamp.png",
  "Photo Fridge Magnet": "assets/product-fridge-magnet.png",
  "Customized Water Bottle": "assets/product-water-bottle.png",
  "Wooden Name Plate": "assets/product-wooden-name-plate.png",
  "Laser Engraved Pen": "assets/product-engraved-pen.png"
};

const categoryColors = {
  "Custom Mugs": ["#ffffff", "#d8d0ca", "#2f2d2d"],
  "LED Name Lamps": ["#19110d", "#f8d47c", "#a52a2a"],
  "Photo Gifts": ["#fff8f6", "#a52a2a", "#f3b233"],
  "Name Plates": ["#9b603b", "#f6d99a", "#4f2b18"],
  "Laser Engraving": ["#e6c7aa", "#5b3425", "#a52a2a"],
  "Corporate Gifts": ["#242424", "#d7b06b", "#ffffff"],
  "3D Printing": ["#ffd3df", "#eb5b83", "#ffffff"],
  "Customized T-Shirts": ["#111111", "#ffffff", "#a52a2a"]
};

const categoryOccasions = {
  "Custom Mugs": ["Birthday", "Anniversary", "Couple Gift", "Corporate"],
  "LED Name Lamps": ["Anniversary", "Wedding", "Couple Gift", "Birthday"],
  "Photo Gifts": ["Birthday", "Anniversary", "Couple Gift", "Festival"],
  "Name Plates": ["Housewarming", "Wedding", "Corporate"],
  "Laser Engraving": ["Corporate", "Anniversary", "Wedding"],
  "Corporate Gifts": ["Corporate", "Festival"],
  "3D Printing": ["Birthday", "Corporate", "Baby Gift"],
  "Customized T-Shirts": ["Birthday", "Couple Gift", "Corporate", "Festival"]
};

const reviewGalleryItems = [
  { image: "assets/product-photo-mug.png", title: "Photo Mug Order", text: "Birthday gift with photo print" },
  { image: "assets/product-led-lamp.png", title: "LED Name Lamp", text: "Couple anniversary design" },
  { image: "assets/product-fridge-magnet.png", title: "Photo Magnets", text: "Family memories set" },
  { image: "assets/product-wooden-name-plate.png", title: "Wooden Name Plate", text: "Housewarming order" },
  { image: "assets/product-engraved-pen.png", title: "Engraved Pen", text: "Corporate gifting" },
  { image: "assets/category-customized-tshirts.png", title: "Printed T-Shirt", text: "Custom design print" }
];

function svgImage(product, index) {
  const [bg, accent, ink] = categoryColors[product.category] || ["#fff8f6", "#A52A2A", "#222"];
  const title = product.name.replace(/&/g, "and").split(" ").slice(0, 3).join(" ");
  const shape = index % 5;
  const art = [
    `<rect x="70" y="80" width="180" height="190" rx="22" fill="${accent}" opacity=".18"/><rect x="104" y="98" width="120" height="130" rx="14" fill="#fff" stroke="${accent}" stroke-width="8"/><path d="M224 132h34c22 0 22 62 0 62h-34" fill="none" stroke="${accent}" stroke-width="13"/>`,
    `<circle cx="160" cy="140" r="82" fill="#171313"/><circle cx="160" cy="140" r="58" fill="none" stroke="${accent}" stroke-width="5"/><rect x="104" y="220" width="112" height="28" rx="14" fill="#171313"/>`,
    `<rect x="64" y="92" width="192" height="132" rx="16" fill="${accent}" opacity=".85"/><path d="M86 124h148M86 164h148M86 204h148" stroke="${ink}" opacity=".25" stroke-width="6"/><circle cx="94" cy="110" r="8" fill="${ink}"/><circle cx="226" cy="110" r="8" fill="${ink}"/>`,
    `<rect x="112" y="64" width="96" height="210" rx="34" fill="#171313"/><rect x="132" y="42" width="56" height="36" rx="8" fill="#c9c0ba"/><path d="M160 118v96" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>`,
    `<rect x="72" y="82" width="176" height="176" rx="24" fill="#fff" stroke="${accent}" stroke-width="8"/><circle cx="128" cy="142" r="34" fill="${accent}" opacity=".55"/><circle cx="194" cy="142" r="34" fill="${ink}" opacity=".18"/><rect x="104" y="194" width="112" height="20" rx="10" fill="${accent}" opacity=".65"/>`
  ][shape];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="560" viewBox="0 0 320 280">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="${bg}"/>
          <stop offset="1" stop-color="#fff8f6"/>
        </linearGradient>
      </defs>
      <rect width="320" height="280" rx="24" fill="url(#g)"/>
      <circle cx="262" cy="42" r="62" fill="${accent}" opacity=".12"/>
      <circle cx="40" cy="244" r="70" fill="${accent}" opacity=".1"/>
      ${art}
      <text x="160" y="252" text-anchor="middle" font-family="Segoe UI, Arial" font-size="18" font-weight="800" fill="${ink}">${title}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getProductIndex(product) {
  return products.findIndex((item) => item.id === product.id);
}

function getProductImage(product, index = getProductIndex(product)) {
  return exactProductImages[product.name] || productImages[product.category] || svgImage(product, index);
}

function getProductPricing(product, index = getProductIndex(product)) {
  const discountPercent = 18 + (index % 5) * 3;
  const realPrice = Math.ceil(product.price / (1 - discountPercent / 100) / 10) * 10 - 1;

  return {
    discountPrice: product.price,
    realPrice,
    discountPercent
  };
}

function getProductOccasions(product) {
  const productOccasions = new Set(categoryOccasions[product.category] || []);
  const name = product.name.toLowerCase();

  if (name.includes("birthday")) productOccasions.add("Birthday");
  if (name.includes("anniversary") || name.includes("couple")) productOccasions.add("Anniversary");
  if (name.includes("baby")) productOccasions.add("Baby Gift");
  if (name.includes("corporate") || name.includes("logo") || name.includes("employee") || name.includes("client")) productOccasions.add("Corporate");
  if (name.includes("name plate") || name.includes("house")) productOccasions.add("Housewarming");

  return [...productOccasions];
}

function getProductBadges(product, index = getProductIndex(product)) {
  const badges = [];

  if (product.featured) badges.push("NEW");
  if (index % 4 === 0) badges.push("BEST SELLER");
  if (index % 5 === 2) badges.push("TRENDING");

  return [...new Set(badges)].slice(0, 2);
}

function orderUrl(productOrName, quantity = 1) {
  const product = typeof productOrName === "string" ? products.find((item) => item.name === productOrName) : productOrName;
  if (!product) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const pricing = getProductPricing(product);
  const message = [
    "Hello Jyotiyana Enterprises, I want to order this product.",
    `Product: ${product.name}`,
    `Product ID: ${product.id}`,
    `Category: ${product.category}`,
    `Quantity: ${quantity}`,
    `Discounted Price: Rs. ${pricing.discountPrice}`,
    `MRP: Rs. ${pricing.realPrice}`
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function productCard(product, index) {
  const image = getProductImage(product, index);
  const pricing = getProductPricing(product, index);
  const badges = getProductBadges(product, index).map((badge) => `<span>${badge}</span>`).join("");

  return `
    <div class="col-6 col-md-4 col-lg-2">
      <article class="product-card position-relative" data-product-id="${product.id}">
        <div class="product-badges">${badges}</div>
        <button class="product-image-button" type="button" data-view-product="${product.id}" aria-label="View ${product.name}">
          <img class="product-image" src="${image}" alt="${product.name}">
        </button>
        <div class="product-body">
          <span class="product-category">${product.category}</span>
          <button class="product-title-button" type="button" data-view-product="${product.id}">${product.name}</button>
          <div class="price-row">
            <span class="price-stack">
              <span class="price">&#8377;${pricing.discountPrice}</span>
              <span class="real-price">&#8377;${pricing.realPrice}</span>
            </span>
            <span class="discount-badge">${pricing.discountPercent}% OFF</span>
          </div>
          <div class="rating-row">
            <span class="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
          <div class="quantity-control" data-product-id="${product.id}">
            <button type="button" class="quantity-btn" data-qty-action="decrease" aria-label="Decrease quantity">-</button>
            <input type="number" value="1" min="1" readonly>
            <button type="button" class="quantity-btn" data-qty-action="increase" aria-label="Increase quantity">+</button>
          </div>
          <div class="product-actions">
            <button class="btn btn-light share-btn" type="button" data-share-id="${product.id}" aria-label="Share ${product.name}">
              <i class="bi bi-share"></i>
            </button>
            <button class="btn btn-outline-primary order-btn" type="button" data-order-id="${product.id}">
              <i class="bi bi-whatsapp"></i> Order
            </button>
          </div>
        </div>
      </article>
    </div>`;
}

function getFilteredProducts() {
  const search = document.getElementById("productSearch").value.trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const occasion = document.getElementById("occasionFilter").value;

  return products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search) || product.category.toLowerCase().includes(search);
    const matchesCategory = category === "All" || product.category === category;
    const matchesOccasion = occasion === "All" || getProductOccasions(product).includes(occasion);
    return matchesSearch && matchesCategory && matchesOccasion;
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();

  document.getElementById("productCount").textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
  document.getElementById("productGrid").innerHTML = filtered.map((product) => productCard(product, getProductIndex(product))).join("") || `
    <div class="col-12">
      <div class="text-center py-5">
        <h3>No products found</h3>
        <p class="text-muted">Try another search, category or occasion.</p>
      </div>
    </div>`;
}

function renderFeatured() {
  const featured = products.filter((product) => product.featured).slice(0, 6);
  document.getElementById("featuredProducts").innerHTML = featured.map((product) => productCard(product, getProductIndex(product))).join("");
}

function renderCategories() {
  document.getElementById("categoryCards").innerHTML = categories.map((category, index) => {
    const sample = products.find((product) => product.category === category) || { name: category, category, price: 0 };
    const image = categoryImages[category] || svgImage(sample, index);
    return `
      <button class="category-card border-0" type="button" data-category="${category}">
        <img src="${image}" alt="${category}">
        <h3>${category}</h3>
      </button>`;
  }).join("");
}

function renderReviewGallery() {
  document.getElementById("reviewGallery").innerHTML = reviewGalleryItems.map((item) => `
    <article class="review-photo">
      <img src="${item.image}" alt="${item.title}">
      <div>
        <strong>${item.title}</strong>
        <span>${item.text}</span>
      </div>
    </article>
  `).join("");
}

function getRecentlyViewedIds() {
  try {
    return JSON.parse(localStorage.getItem("jyotiyana_recently_viewed")) || [];
  } catch {
    return [];
  }
}

function saveRecentlyViewed(productId) {
  const ids = getRecentlyViewedIds().filter((id) => id !== productId);
  ids.unshift(productId);
  localStorage.setItem("jyotiyana_recently_viewed", JSON.stringify(ids.slice(0, 6)));
}

function renderRecentlyViewed() {
  const recentProducts = getRecentlyViewedIds().map(getProductById).filter(Boolean);
  const section = document.getElementById("recentlyViewedSection");

  if (!recentProducts.length) {
    section.classList.add("d-none");
    return;
  }

  section.classList.remove("d-none");
  document.getElementById("recentlyViewedProducts").innerHTML = recentProducts
    .map((product) => productCard(product, getProductIndex(product)))
    .join("");
}

function fillSelects() {
  const filter = document.getElementById("categoryFilter");
  const orderType = document.getElementById("productType");
  const occasionFilter = document.getElementById("occasionFilter");

  categories.forEach((category) => {
    filter.insertAdjacentHTML("beforeend", `<option value="${category}">${category}</option>`);
    orderType.insertAdjacentHTML("beforeend", `<option value="${category}">${category}</option>`);
  });

  occasions.forEach((occasion) => {
    occasionFilter.insertAdjacentHTML("beforeend", `<option value="${occasion}">${occasion}</option>`);
  });
}

function getQuantityFromElement(element) {
  const scope = element.closest(".product-card, .product-modal") || document;
  const input = scope.querySelector(".quantity-control input");
  const value = Number(input?.value || 1);
  return Math.max(1, value);
}

function updateQuantity(button) {
  const control = button.closest(".quantity-control");
  const input = control.querySelector("input");
  const direction = button.dataset.qtyAction;
  const current = Number(input.value || 1);
  input.value = direction === "increase" ? current + 1 : Math.max(1, current - 1);
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const image = getProductImage(product);
  const pricing = getProductPricing(product);

  document.getElementById("modalProductImage").src = image;
  document.getElementById("modalProductImage").alt = product.name;
  document.getElementById("modalProductCategory").textContent = product.category;
  document.getElementById("productModalTitle").textContent = product.name;
  document.getElementById("modalProductOccasions").textContent = `Perfect for: ${getProductOccasions(product).join(", ")}`;
  document.getElementById("modalDiscountPrice").innerHTML = `&#8377;${pricing.discountPrice}`;
  document.getElementById("modalRealPrice").innerHTML = `&#8377;${pricing.realPrice}`;
  document.getElementById("modalDiscountBadge").textContent = `${pricing.discountPercent}% OFF`;
  document.getElementById("modalQuantity").dataset.productId = product.id;
  document.querySelector("#modalQuantity input").value = 1;
  document.getElementById("modalOrderBtn").dataset.orderId = product.id;
  document.getElementById("modalShareBtn").dataset.shareId = product.id;

  saveRecentlyViewed(product.id);
  renderRecentlyViewed();

  if (window.bootstrap) {
    bootstrap.Modal.getOrCreateInstance(document.getElementById("productModal")).show();
  }
}

function orderProduct(button) {
  const product = getProductById(button.dataset.orderId);
  if (!product) return;

  window.open(orderUrl(product, getQuantityFromElement(button)), "_blank");
}

async function shareProduct(button) {
  const product = getProductById(button.dataset.shareId);
  if (!product) return;

  const pricing = getProductPricing(product);
  const text = `Check this product from Jyotiyana Enterprises: ${product.name} at Rs. ${pricing.discountPrice}`;
  const shareData = {
    title: product.name,
    text,
    url: `${window.location.href.split("#")[0]}#shop`
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
    alert("Product link copied.");
  } catch {
    alert("Product sharing was cancelled.");
  }
}

function checkPincode(pincode) {
  if (!/^[1-9][0-9]{5}$/.test(pincode)) {
    return { type: "error", message: "Please enter a valid 6-digit pincode." };
  }

  if (pincode.startsWith("305")) {
    return { type: "success", message: "Delivery available in Ajmer. Same-day or next-day delivery may be possible." };
  }

  return { type: "success", message: "Courier delivery is available. Final delivery time will be confirmed on WhatsApp." };
}

function bindEvents() {
  document.getElementById("productSearch").addEventListener("input", renderProducts);
  document.getElementById("categoryFilter").addEventListener("change", renderProducts);
  document.getElementById("occasionFilter").addEventListener("change", renderProducts);

  document.getElementById("categoryCards").addEventListener("click", (event) => {
    const card = event.target.closest("[data-category]");
    if (!card) return;

    document.getElementById("categoryFilter").value = card.dataset.category;
    document.getElementById("occasionFilter").value = "All";
    document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    renderProducts();
  });

  document.addEventListener("click", async (event) => {
    const quantityButton = event.target.closest("[data-qty-action]");
    if (quantityButton) {
      updateQuantity(quantityButton);
      return;
    }

    const viewButton = event.target.closest("[data-view-product]");
    if (viewButton) {
      openProductModal(viewButton.dataset.viewProduct);
      return;
    }

    const orderButton = event.target.closest("[data-order-id]");
    if (orderButton) {
      orderProduct(orderButton);
      return;
    }

    const shareButton = event.target.closest("[data-share-id]");
    if (shareButton) {
      await shareProduct(shareButton);
    }
  });

  document.getElementById("customOrderForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const mobile = document.getElementById("customerMobile").value.trim();
    const productType = document.getElementById("productType").value;
    const printName = document.getElementById("printName").value.trim();
    const preferredColor = document.getElementById("preferredColor").value.trim();
    const preferredSize = document.getElementById("preferredSize").value.trim();
    const customQuantity = document.getElementById("customQuantity").value || "1";
    const deliveryDate = document.getElementById("deliveryDate").value;
    const message = document.getElementById("customerMessage").value.trim();

    const text = [
      "Hello Jyotiyana Enterprises, I want to place a custom order.",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Product Type: ${productType}`,
      `Name / Text to Print: ${printName || "Not specified"}`,
      `Color: ${preferredColor || "Not specified"}`,
      `Size: ${preferredSize || "Not specified"}`,
      `Quantity: ${customQuantity}`,
      `Delivery Date: ${deliveryDate || "Not specified"}`,
      "Image / Design: I will attach the image before sending this WhatsApp message.",
      `Message: ${message || "Please contact me with design options."}`
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  });

  document.getElementById("pincodeForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const result = checkPincode(document.getElementById("pincodeInput").value.trim());
    const resultEl = document.getElementById("pincodeResult");
    resultEl.className = `pincode-result ${result.type}`;
    resultEl.textContent = result.message;
  });

  document.getElementById("trackingForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const trackingValue = document.getElementById("trackingInput").value.trim();
    const text = [
      "Hello Jyotiyana Enterprises, I want to track my order.",
      `Mobile / Order ID: ${trackingValue || "Not provided"}`
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const nav = document.getElementById("mainNav");
      if (!window.bootstrap) return;
      const collapse = bootstrap.Collapse.getInstance(nav);
      if (collapse) collapse.hide();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fillSelects();
  renderCategories();
  renderFeatured();
  renderProducts();
  renderRecentlyViewed();
  renderReviewGallery();
  bindEvents();
});

// Product data (for demo purposes)
const products = [
    {
        id: 1,
        name: "Product A",
        price: 19.99,
        image: "https://via.placeholder.com/280",
    },
    {
        id: 2,
        name: "Product B",
        price: 24.99,
        image: "https://via.placeholder.com/280",
    },
    {
        id: 3,
        name: "Product C",
        price: 34.99,
        image: "https://via.placeholder.com/280",
    },
];

// Cart array to store added products
let cart = [];

// On window load, populate the product grid
window.onload = function () {
    const productGrid = document.getElementById("product-list");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
};

// Add product to cart
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to your cart!`);
}

// Update the cart count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

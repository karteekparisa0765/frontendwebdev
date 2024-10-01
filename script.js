
// Product Data (can be fetched from an API in a real-world scenario)
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        image: "https://via.placeholder.com/300",
    },
    {
        id: 2,
        name: "Product 2",
        price: 29.99,
        image: "https://via.placeholder.com/300",
    },
    {
        id: 3,
        name: "Product 3",
        price: 39.99,
        image: "https://via.placeholder.com/300",
    },
];

// Initialize cart
let cart = [];

// Load products to the page
window.onload = function () {
    loadProducts();
    updateCartCount();
};

// Function to load products
function loadProducts() {
    const productList = document.getElementById("product-list");
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="\${product.image}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>$\${product.price.toFixed(2)}</p>
            <button onclick="addToCart(\${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find((product) => product.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`\${product.name} has been added to your cart.`);
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

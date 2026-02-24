// Sample Data for Product Cards
const products = [
    {
        name: "Berry Blast",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo20pQqJF6vQWjuUoF64D_ZpfaQF9MfKDHYg&s",
        price: "$8.00"
    },
    {
        name: "Tropical Mango",
        img: "https://www.abeautifulplate.com/wp-content/uploads/2017/04/tropical-mango-guacamole-1-12.jpg",
        price: "$7.50"
    },
    {
        name: "Ocean Blue",
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/4/2/0/FNK_OCEAN-PUDDING-CUPS-H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1522680123434.webp",
        price: "$9.00"
    },
    {
        name: "Green Detox",
        img: "https://www.lifeisbutadish.com/wp-content/uploads/2016/01/Spinach-Apple-Detox-Smoothie-9-scaled.jpg",
        price: "$8.50"
    }
];

const container = document.getElementById('product-container');

// Render Cards
products.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button class="btn-primary" style="margin-top: 10px; padding: 8px 20px;">Add to Cart</button>
    `;
    container.appendChild(card);
});

// Simple Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(59, 93, 125, 0.9)";
        nav.style.padding = "1rem 10%";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "2rem 10%";
    }
});
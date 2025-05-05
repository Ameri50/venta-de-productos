document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("category-form");
    const list = document.getElementById("category-list");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-category");

    // Manejar agregar nueva categoría
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("category-name").value.trim();
            if (name) {
                const category = {
                    name,
                    image: `img/${name.toLowerCase()}.jpg`,
                    link: `productos.html?categoria=${encodeURIComponent(name.toLowerCase())}`
                };
                addCategoryToDOM(category);
                form.reset();
            }
        });
    }

    // Agrega categoría al DOM
    function addCategoryToDOM(category) {
        const li = document.createElement("li");
        li.innerHTML = `
            <a href="${category.link}">
                <img src="${category.image}" alt="${category.name}">
                <span>${category.name}</span>
            </a>
        `;
        list.appendChild(li);
    }

    // Manejar búsqueda
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        const items = list.querySelectorAll("li");
        items.forEach(item => {
            const text = item.querySelector("span").textContent.toLowerCase();
            item.style.display = text.includes(query) ? "block" : "none";
        });
    });
});

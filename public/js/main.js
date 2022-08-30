window.addEventListener('DOMContentLoaded', (event) => {
    initBurger();
    initNavbar();
});

function initBurger() {
    let burgerBtn = document.querySelector('#nav-item-burger');
    let navDropdown = document.querySelector('.nav-dropdown');

    burgerBtn.addEventListener('click', function() {
        navDropdown.classList.toggle('display-none');
        toggleFilterGreen(navDropdown, burgerBtn);
    });
}

function initNavbar() {
    let navSearch = document.getElementById("nav-search");
    let navSearchBtn = document.getElementById("nav-item-search");

    navSearchBtn.addEventListener("click", function () {
        navSearch.classList.toggle("display-none");
        toggleFilterGreen(navSearch, navSearchBtn);
    });
}

function toggleFilterGreen(target, button) {
    if (target.classList.contains("display-none")) {
        button.classList.remove("filter-green");
    } else {
        button.classList.add("filter-green");
    }
}
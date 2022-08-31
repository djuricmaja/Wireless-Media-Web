window.addEventListener('DOMContentLoaded', (event) => {
    initBurger();
    initNavbar();
    initMoreOrLess();
    initCarousel('main-carousel');
});

function initCarousel(id) {
    let carousel = document.querySelector('#' + id);
    let previousBtn = carousel.querySelector('.carousel-previous');
    let nextBtn = carousel.querySelector('.carousel-next');
    let dots = carousel.querySelectorAll('.carousel-dots a');
    let items = carousel.querySelectorAll('.carousel-item');

    nextBtn.addEventListener('click', function() {
        let activeIndex = findActive(carousel);

        if (activeIndex == items.length - 1) {
            itemToChangeIndex = 0;
        } else {
            itemToChangeIndex = activeIndex + 1;
        }

        items[activeIndex].classList.remove('active');
        items[itemToChangeIndex].classList.add('active');
        dots[activeIndex].classList.remove('active');
        dots[itemToChangeIndex].classList.add('active');
    });

    previousBtn.addEventListener('click', function() {
        let activeIndex = findActive(carousel);
        
        if (activeIndex == 0) {
            itemToChangeIndex = items.length - 1;
        } else {
            itemToChangeIndex = activeIndex - 1;
        }

        items[activeIndex].classList.remove('active');
        items[itemToChangeIndex].classList.add('active');
        dots[activeIndex].classList.remove('active');
        dots[itemToChangeIndex].classList.add('active');
    });

    for (dot of dots) {
        let item = dot.getAttribute('data-item');

        dot.addEventListener('click', function() {
            let activeIndex = findActive();

            items[activeIndex].classList.remove('active');
            items[item].classList.add('active');
            dots[activeIndex].classList.remove('active');
            dots[item].classList.add('active');
        });
    }

    function findActive() {
        for (i = 0; i < items.length; i++) {
            if (items[i].classList.contains('active')) {
                return i;
            }
        }

        return null;
    }
}

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

function initMoreOrLess() {
    let articleButtons = document.querySelectorAll(".show-more");

    for (const articleButton of articleButtons) {
        articleButton.addEventListener("click", showMoreOrLess);
    }
}

function showMoreOrLess() {
    var article = this.closest("article");
    var text = article.querySelector(".article-text");

    if (text.classList.contains('display-none')) {
        text.classList.remove('display-none')
        this.innerHTML = "Show less";
    } else {
        text.classList.add('display-none')
        this.innerHTML = "Show more";
    }
}

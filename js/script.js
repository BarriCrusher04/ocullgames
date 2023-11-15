var menuButton = document.getElementById("openMenu");
var menuItems = document.querySelectorAll("header nav li");
var header = document.getElementById("header");
var menuIsOpen = false;

function openMenu() {
    if (menuIsOpen) {
        header.style.height = "8em";
        menuItems.forEach(function (item) {
            item.style.maxHeight = "100px";
        });
        menuIsOpen = false;
    } else {
        header.style.height = "3em";
        menuItems.forEach(function (item) {
            item.style.maxHeight = "0";
        });
        menuIsOpen = true;
    }
}

// Set initial max-height values when the page loads
window.onload = function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        // Apply styles for screens wider than 768px
        menuItems.forEach(function (item) {
            item.style.maxHeight = "0";
        });
        header.style.height = "3em";
    } else {
        // Apply styles for screens narrower than 768px
        menuItems.forEach(function (item) {
            item.style.maxHeight = "100px";
        });
        header.style.height = "8em";
    }
};

// Update styles on window resize
window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        // Apply styles for screens wider than 768px
        menuItems.forEach(function (item) {
            item.style.maxHeight = "0";
        });
        header.style.height = "3em";
    } else {
        // Apply styles for screens narrower than 768px
        menuItems.forEach(function (item) {
            item.style.maxHeight = "100px";
        });
        header.style.height = "8em";
    }
});

menuButton.addEventListener("click", openMenu);
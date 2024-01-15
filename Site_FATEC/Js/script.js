function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector(".hamburger-button");
    button.addEventListener('click', function () {
        button.classList.toggle("active");
    });
});

function toggleFooterDropdown() {
    var dropdown = document.querySelector(".footeritem .dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Adicione um evento de clique para chamar a função quando um .footeritem é clicado
var footerItems = document.querySelectorAll(".footeritem");
footerItems.forEach(function(item) {
    item.addEventListener("click", toggleFooterDropdown);
});

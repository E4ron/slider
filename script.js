let slider = document.querySelector(".slider");
let rightArrow = document.querySelector(".page-right");
rightArrow.onclick = function(event) {
    slider.append(slider.firstElementChild);
};

let slider1 = document.querySelector(".slider");
let leftArrow = document.querySelector(".page-left");
leftArrow.onclick = function(event) {
    slider1.append(slider1.firstElementChild);
};
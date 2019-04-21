//menu

const menuBtn = document.querySelector("#menuIcon"),
skills = document.querySelector("#skills"),
fullMenu = document.querySelector("ul"),
titles = document.querySelector("h1"),
crossMenu = document.querySelector("#menuClose"),
cm = document.querySelector("#cm"),
textH3 = document.querySelector("h3");

fullMenu.style.display = 'none';
crossMenu.style.display = 'none';

menuBtn.addEventListener("click", ()=>{
fullMenu.style.display = 'block';
skills.style.opacity = '0.5';
menuBtn.style.display = 'none';
crossMenu.style.display = 'block';
titles.style.opacity = '0.3';
textH3.style.opacity = '0.5';
});

crossMenu.addEventListener("click", closeMenu);
cm.addEventListener("click", closeMenu);
fullMenu.addEventListener("click", closeMenu);

function closeMenu() {
fullMenu.style.display = 'none';
skills.style.opacity = '1';
menuBtn.style.display = 'block';
crossMenu.style.display = 'none';
titles.style.opacity = '1';
textH3.style.opacity = '1';
}


//slider

const dot1 = document.querySelector("#first");
dot1.addEventListener('click', currentSlide1);
function currentSlide1() {currentSlide(1);}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.querySelectorAll(".mySlides");
var dots = document.querySelectorAll(".dot");

if (n > slides.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = slides.length
}
for (i=0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i=0; i< dots.length; i++){
dots[i].className = dots[i].className.replace("active","");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className+= " active";
}


//form

 const form = document.querySelector('.form'),
hide = document.querySelector('.hide'),
show = document.querySelector('.show'),
formButton = document.querySelector('[type="submit"]'),
formEmail = document.querySelector('[type$="email"]');

formEmail.addEventListener('input', changeBtn);
function changeBtn() {
if (formEmail !== '') {formButton.style.backgroundColor = '#3F7E3F';}
}

show.addEventListener('click', ()=> {form.style.display = 'block';});
hide.addEventListener('click', ()=> {form.style.display = 'none';});
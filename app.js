
// header-slider
let i = 0;
let images = [];
let time = 5000;


images[0] = "images/header/my-picture2.png";
images[1] = "images/header/my-picture3.png";
images[2] = "images/header/my-picture1.png";

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload = changeImg;



// progress bar
const skillsSection = document.querySelector(".about--progress-container");

const progressBars = document.querySelectorAll(".progress--bar");

function showProgress() {
	progressBars.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.width = `${value}%`;

	});
}

function hideProgress() {
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}

window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;

	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})

// slide-comment

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("fa-square");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "flex";
	dots[slideIndex - 1].className += " active";
}

// latest projects

filterSelection("all")
function filterSelection(c) {
	let x, i;
	x = document.getElementsByClassName("filterLi");
	if (c == "all") c = "";

	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

function addClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

function removeClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

let navbarUl = document.querySelector(".navbar-ul");
let btns = navbarUl.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		let current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}


// send form

const myForm=document.querySelector("#form");

myForm.addEventListener("submit", function(e){
	e.preventDefault();
	e.stopPropagation();

	const formData=new FormData(this);
	const searchParams= new URLSearchParams();

	for(const pair of formData){
		searchParams.append(pair[0],pair[1],pair[2], pair[3])
	}

	fetch("http://api.kesho.me/v1/user-test/contact", {
		method:'post',
		body: searchParams
	}).then(function(response){
		return response.text();
	}).then(function(text){
		console.log(text)
	}).catch(function(error){
		console.log(error)
	})
})




// modal
let modal = document.getElementById("myModal");
let btn = document.getElementById("sub-btn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
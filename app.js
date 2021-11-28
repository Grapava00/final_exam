
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

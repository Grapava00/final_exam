let i = 0;
let images = [];
let time = 5000;

images[0] = "images/personal_photos_welcome/tamu1.png";
images[1] = "images/personal_photos_welcome/tamu2.png";
images[2] = "images/personal_photos_welcome/tamu3.png";
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
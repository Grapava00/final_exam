let i = 0;
let images = [];
let time = 5000;


images[0]=  "images/header/my-picture2.png";
images[1]=  "images/header/my-picture3.png";
images[2]= "images/header/my-picture1.png";

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

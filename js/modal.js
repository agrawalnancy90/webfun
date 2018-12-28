// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var img6 = document.getElementById('img6');
var img7 = document.getElementById('img7');


var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
//alert("Hello! I am " + img);

img1.onclick = function(){
    imageOnModal(this);
}

img2.onclick = function(){
    imageOnModal(this);
}

img3.onclick = function(){
	imageOnModal(this);
}

img4.onclick = function(){
	imageOnModal(this);
}

img5.onclick = function(){
	imageOnModal(this);
}

img6.onclick = function(){
	imageOnModal(this);
}

img7.onclick = function(){
	imageOnModal(this);
}

function imageOnModal(x){
	modal.style.display = "block";
	modalImg.src = x.src;
	captionText.innerHTML = x.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
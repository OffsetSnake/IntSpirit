
let modal = document.getElementById("modal");
let btn = document.getElementById("openBtn");
let close = document.getElementById("closeBtn");
let closeForm = document.getElementById("closeBtnForm");

btn.onclick = function(){
	modal.style.display = "block";
}

close.onclick = function(){
	modal.style.display = "none";
}

closeForm.onclick = function(){
	modal.style.display = "none"
}
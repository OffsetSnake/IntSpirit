
let modal = document.getElementById("modal");
let btn = document.getElementById("openBtn");
let close = document.getElementById("closeBtn");

btn.onclick = function(){
	modal.style.display = "block";
}

close.onclick = function(){
	modal.style.display = "none";
}
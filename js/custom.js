
function makeClear(){
	 document.getElementById("bg").style.opacity = 1; 
	 setTimeout(function(){
	 document.getElementById("frontscreen").style.opacity = 1;
	 }, 800);
	 setTimeout(function(){
	 document.getElementById("fb").style.opacity = 1;
	 }, 1200);
	 setTimeout(function(){
	 	document.getElementById("ig").style.opacity = 1;
	 }, 1700);
	 setTimeout(function(){
	 	document.getElementById("gh").style.opacity = 1;
	 }, 2200);
	 setTimeout(function(){
	 	document.getElementById("res").style.opacity = 1;
	 }, 2700);
}

//SETS TIME OUT FOR FADE IN OF BACKGROUND PICTURE, HI, and BOXES.
function begin(){
	setTimeout(function() { makeClear() }, 900);
    //setTimeout(function() { showIcons() }, 1800)
}

//WHEN THE DOCS READY, START EXECUTING THIS ANIMATION CODE.
$(document).ready(begin)
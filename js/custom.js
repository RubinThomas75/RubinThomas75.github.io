
function makeClear(){
	 setTimeout(function(){
	 document.getElementById("frontscreen").style.opacity = 1;
	 }, 800);
	 setTimeout(function(){
	 document.getElementById("fb").style.opacity = 1;
	 }, 1600);
	 setTimeout(function(){
	 	document.getElementById("ig").style.opacity = 1;
	 }, 2100);
	 setTimeout(function(){
	 	document.getElementById("gh").style.opacity = 1;
	 }, 2600);
	 setTimeout(function(){
	 	document.getElementById("res").style.opacity = 1;
	 }, 3100);
}

//SETS TIME OUT FOR FADE IN OF BACKGROUND PICTURE, HI, and BOXES.
function begin(){
	setTimeout(function (){
			document.getElementById("status").style.opacity = 0;
		    document.getElementById("preloader").style.opacity = 0;
	}, 800);
	setTimeout(function() { makeClear() }, 900);
    //setTimeout(function() { showIcons() }, 1800)
}


//WHEN THE DOCS READY, START EXECUTING THIS ANIMATION CODE.


$(document).ready(begin)





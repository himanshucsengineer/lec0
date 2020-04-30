/* counter up*/
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

/* sidebar */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

/* slide */
var i=0 //start point
	var image=[];
	var time=3000;
	
	//image list
	image[0]='first.jpg';
	image[1]='second.jpg';
	image[2]='third.jpg';
	
	//change image
	
	function changeImg(){
		document.slide.src=image[i];
		
		
		if(i<image.length-1){
		i++;
		}else{
			i=0;
		}
		setTimeout("changeImg()",time);
	}
	window.onload=changeImg;  
// JavaScript Document

window.onload = init;

function init(){


	 var data = [{
        value: 30,
        color: "#F7464A"
    }, {
        value: 30,
        color: "#E2EAE9"
    }, {
        value: 30,
        color: "#D4CCC5"
    }, {
        value: 30,
        color: "#949FB1"
    }, {
        value: 30,
        color: "#4D5360"
    }

    ]

    var options = {
        animation: false
    };

    //Get the context of the canvas element we want to select
    var c = $('#myChart');
    var ct = c.get(0).getContext('2d');
    var ctx = document.getElementById("myChart").getContext("2d");
    /*************************************************************************/
    myNewChart = new Chart(ct).Doughnut(data, options);
    
	document.querySelector("#item1").onclick = moreinfo;



	$('#da-slider').cslider({
 
    current     : 0,    
    // index of current slide
     
    bgincrement : 50,   
    // increment the background position 
    // (parallax effect) when sliding
     
    autoplay    : false,
    // slideshow on / off
     
    interval    : 4000  
    // time between transitions
     
});


}

function moreinfo(){
	var background = document.createElement("div");
	var display = document.createElement("div");
		
	background.id = "background";
	display.className = "display";
	
	document.querySelector("body").appendChild(background);
	document.querySelector("#background").appendChild(display);
	
	var view = document.createElement("div");
	var info = document.createElement("div");
	var summary = document.createElement("div");
	var worktype = document.createElement("div");
	var worktype2 = document.createElement("div");
	var worktype3 = document.createElement("div");
	
	var img = document.createElement("img");
	
	display.appendChild(view);
	display.appendChild(info);
		
	view.className = "view";
	info.className = "info";
	
	info.appendChild(summary);
	summary.className = "summary";
	
	info.appendChild(worktype);
	worktype.className ="worktype";
	
	info.appendChild(worktype2);
	worktype2.className ="worktype";
	
	info.appendChild(worktype3);
	worktype3.className ="worktype";
	
	view.appendChild(img);
	img.src = "images/appicon.png";

	
	background.onclick = infoClose;	
}

function infoClose(){
	this.parentNode.removeChild(this);	
}
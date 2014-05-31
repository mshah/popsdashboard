goLiveArray = new Array();
var countDownNum = 0;
// this is the data, add or update events here
goLiveArray[countDownNum++] = new newDevelopment("3.02.1", "June 3, 2014 12:00");
goLiveArray[countDownNum++] = new newDevelopment("3.1.A", "June 10, 2014 12:00");
function newDevelopment(event, date){
	this.event = event;
	this.date = date;
}

function createPanel(place){
	countdown(goLiveArray[place]);
}

function countdown(newDevelopment){
	// set the date we're counting down to
	var target_date = new Date(newDevelopment.date).getTime();
	 
	// variables for time units
	var days, hours, minutes, seconds;
	 
	// get tag element
	var countdown = document.getElementById("countdown");
	 
	// update the tag with id "countdown" every 1 second
	setInterval(function () {
	 
		// find the amount of "seconds" between now and target
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;
	 
		// do some time calculations
		days = parseInt(seconds_left / 86400);
		seconds_left = seconds_left % 86400;
		 
		hours = parseInt(seconds_left / 3600);
		seconds_left = seconds_left % 3600;
		 
		minutes = parseInt(seconds_left / 60);
		seconds = parseInt(seconds_left % 60);
		 
		// format countdown string + set tag value
        document.getElementById('count2').style.display="none";
        document.getElementById('dday').innerHTML=days;
        document.getElementById('dhour').innerHTML=hours;
        document.getElementById('dmin').innerHTML=minutes;
        document.getElementById('dsec').innerHTML=seconds;

		document.getElementById('event').innerHTML=newDevelopment.event;
		document.getElementById('date').innerHTML=newDevelopment.date;
	}, 1000);
}
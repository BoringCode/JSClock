//Created by Bradley Rosenfeld for iPad's everywhere!
var timeDisplayElement = document.getElementById('timeDisplay');
var timeElement = document.getElementById('date');
timer();
today();
function timer() {
	var time = new Date();
	var second = time.getSeconds();
	var minute = time.getMinutes();
	var hour = time.getHours();
		if (second < 10) {
			second = "0" + second;
		}
		if (minute < 10) {
			minute = "0" + minute;
		}
		if (hour > 12 && hour < 24) {
			hour = hour - 12;
			period = "PM";
		} else {
			period = "AM";
		}
	var timeString = " <span class='period'>" + period + "</span>" + hour + ":" + minute + ":" + second;
	timeDisplayElement.innerHTML = timeString;
	window.setTimeout(today, 5000);
	window.setTimeout(timer, 100);
}
function today() {
	var date = new Date();
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"];
	var today = days[date.getDay()];
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var todayDate = date.getDate();
	var todayMonth = months[date.getMonth()];
	var todayYear = date.getFullYear();
	var dayString = today + ", " + todayMonth + " " + todayDate + " " + todayYear;
	timeElement.innerHTML = dayString;
}
//disable scrolling
document.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, false);
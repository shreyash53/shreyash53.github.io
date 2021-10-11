function changeContent(src){
console.log(src);
fetch(src + '.html')
	.then(response => response.text())
	.then(data => {
		// Do something with your data
		// console.log(data);
		changeContentHelper(data);
		addCurrentClass(src);
	});
}

var sectionContent = document.getElementById("center-pane-content");

changeContent('main');


var timeSection = document.getElementById('time');
// console.log(timeSection.innerText);
displayTime();
setInterval(displayTime, 1000);
function displayTime(){
	timeSection.innerHTML = new Date().toLocaleString();
	// timeSection.innerText = "simple";
}

function changeContentHelper(data){
	sectionContent.innerHTML = data;
}

function resetCurrentClass(){
	document.getElementById("main").classList.remove("current");
	document.getElementById("skill").classList.remove("current");
	document.getElementById("education").classList.remove("current");
	document.getElementById("contact").classList.remove("current");
}

function addCurrentClass(id){
	resetCurrentClass();
	document.getElementById(id).classList.add("current");
}

function email(){
	window.open('mailto:shreyash.agrawal@students.iiit.ac.in');
}
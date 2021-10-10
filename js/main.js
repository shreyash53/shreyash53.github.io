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

function changeContentHelper(data){
	sectionContent.innerHTML = data;
}

function resetCurrentClass(){
	document.getElementById("main").classList.remove("current");
	document.getElementById("skill").classList.remove("current");
	document.getElementById("education").classList.remove("current");
}

function addCurrentClass(id){
	resetCurrentClass();
	document.getElementById(id).classList.add("current");
}


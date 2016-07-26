var pageHeader = document.getElementById("mainHeader");
pageHeader.textContent = "javascript sports water";

var sandwichImagesElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichImagesElems);


var myButtons = document.getElementsByTagName("button");
console.log(myButtons);

myButtons[0].addEventListener("click", function () {
	//alert("you click me! yay! haha!");
    sandwichImagesElems[0].src = "http://img.foodnetwork.com/FOOD/2012/01/06/HE_sports-drinks_s4x3_lead.jpg";

});

















var fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction(){
	var a = document.getElementById("_input").value;
	fruits.push(a);
	var x=document.getElementById("demo");
	x.innerHTML=fruits;
}

function d() {
	fruits.pop();
	var b=document.getElementById("demo");
	b.innerHTML=fruits;

	}

"use strict";
var add = (function () {
	var counter = 0;
	return function () {
		return counter += 1;
	}
})();
function myFunction() {
	document.getElementById("demo").innerHTML = add();
}
// //function test() {
// 		x=document.getElementById("p1");
// 		document.write("<p>brfore the learn we should " + x.innerHTML + "!</p>");
// //}

// 	var bar = (function foo(x) {
// 	var tmp = 3;
// 	return function fo(y) {
// 		return x+y+(++tmp);
// 		}	
// 	})();
// 	foo(3);
// 	fo(2);
// 	var a = bar();
// function fb() {
// 	document.getElementById("p2").innerHTML = a;
// }

function fb() {
function foo(x) {
	var tmp =3;
	return function (y) {
		alert(x+y+(++tmp));
	}
}
var bar = foo(2);

document.getElementById("p2").innerHTML = bar(10);
}

var a = (function foo(m) {
	var t = 3;
	return function (n) {
		return 
	}
})();
function al() {
	if ( document.getElementById("img1").src != "file:///C:/Users/Administrator/Desktop/google.jpg" ) {
		document.getElementById("img1").src = "file:///C:/Users/Administrator/Desktop/google.jpg";
	} else {
		document.getElementById("img1").src = "file:///C:/Users/Administrator/Desktop/google.png";
	}
}
function changeTheColor() {
	document.getElementsByClassName("pp1")[0].style.color = "red";
}
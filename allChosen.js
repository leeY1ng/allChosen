"use strict";
function checkboxed(objName) {
	var objNameList = document.getElementsByName(objName);
	if ( objNameList != null) {
		for (var i = 0; i<objNameList.length; i++) {
			objNameList[i].checked = "checked";
		}
	}
}
function uncheckboxed(objName) {
	var objNameList = document.getElementsByName(objName);
	if ( objNameList != null) {
		for (var i = 0; i < objNameList.length; i++) {
			objNameList[i].checked = "";
		}
	}
}
function nowTheTime() {
	document.getElementById("ap").innerHTML=Date();
}
function bigImg(x) {
	x.style.width = "500px";
	x.style.height = "300px";
}
function  normalImg(x) {
	x.style.width = "150px";
	x.style.height = "100px";
}
function haha() {
var x = "";
	for (var i =0;i<10;i++) {
		if (i==1) {
			continue;
		}
		x=x+"现在的数字为"+i+"<br>";
	}
	document.getElementById("ap").innerHTML = x;
}
function date() {
	alert(new Date().getMilliseconds());
}


function regexp() {
	var str = "visit runoob! visit runoob!";
	var n = str.replace(/runoob/g,"apple");
	document.getElementById("ap").innerHTML = n;
}

function testInputData() {
	var x , text;
	x = document.getElementById("text1").value;
	if (isNaN(x) || x<1 || x>10) {
		text = "输入错误，请重新输入";
	} else {
		text = "输入正确";
	}
	
	document.getElementById("testData_p").innerHTML = text;
} 
function  mymy() {
	alert("haha");
}
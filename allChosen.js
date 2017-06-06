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
function time() {
	alert(document.getElementById('appear').innerHTML = Date());
}

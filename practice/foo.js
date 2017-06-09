var bar = function foo(x) {
	var tmp = 3;
	return function(y) {
    	return x+y+(++tmp);
	}
}
bar(foo(2));
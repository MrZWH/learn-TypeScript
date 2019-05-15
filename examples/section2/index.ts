// var 声明
function f() {
	var a = 10
	return function g() {
		var b = a + 1
		return b
	}
}

var g = f()
g()

for(var i = 0;i<10;i++) {
	(function(i) {
		setTimeout(function() {
			console.log(i)
		}, 100 * i)
	})(i)
}
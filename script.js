// tu codigo va aca
function callbackPromedio(a, b, c, callback) {
	var promedio = (a+b+c)/3;
	return callback(Promedio);
}

var segundo =1;

function segundero(){
	document.getElementById("titulo").innerHTML = segundo++;

	return segundo;
} 

setInterval(segundero,1000);


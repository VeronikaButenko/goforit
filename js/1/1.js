
function minimal (c,d) {
	return c>=1 && d>=1; 
}
function maximal (c,d) {
	return c<=50 && d<=50;
} 
var a = prompt ('ведите число');
var b = prompt ('ведите cтепень');
function pow (c,d) {
	if (minimal (c,d) && maximal (c,d)) {
	    var result =c;
   		for (var i=1; i<d; i++){
    		result = result*c;
		}
		
		return result;	
	}
    else {
    	var a = prompt ('ведите число');
		var b = prompt ('ведите cтепень');
    	console.log (pow (a,b));	
    }
}
console.log (pow (a,b));




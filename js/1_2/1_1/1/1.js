


var a = prompt ('ведите число');
var b = prompt ('ведите cтепень');

var x=pow (a,b);

function pow (c,d) {
	if (minimal (c,d) || maximal (c,d)) {
	    var result =c;
   		for (var i=1; i<d; i++){
    		result = result*c;
		}

		return result;	
	}
    else {
    	a = prompt ('ведите число');
		b = prompt ('ведите cтепень');
    	pow (a,b);	
    }
}

		alert(x);

		

function minimal (c,d) {
	return c>=1 && d>=1; 
}
function maximal (c,d) {
	return c<=50 && d<=50;
} 



varQ = 4;
var H = 4;
var x  = document.createElement('div');
x.className = "test";
var b = document.querySelector('body');
b.appendChild(x);
var y = document.createElement('h1');
y.innerHTML = "<strong>Тест по програмированию</strong>";
var QBox = document.createElement('div');
x.appendChild(QBox);
var w = document.createElement('h2');
for (var i =  1; i < H; i++) {
	w.innerHTML = (i + '.Вопрос N' + i);
QBox.appendChild(w);
};




// var userName = 'admin';
// var a = prompt ('Ведите свое имя');
// 	if (userName == a) {
// 		alert ('Hello, Аdmin!');
// 	} else {
//     	alert ('good bay!');		    
//     	}
	
// var name = [];
// var i
// var a = prompt ('введите имя для доступа');
// var b = prompt ('ведите свое имя');
// function pow (c,d) {
// 	if (name == 0) {
// 		var result = c;
// 	    {
// 		alert ('Hello name!');
// 		} else {
//     	alert ('Good bay!');		    
//     	}


// 		return result;	
// 	}


// function minimal (c,d) {
// 	return c>=1 && d>=1; 
// }
// function maximal (c,d) {
// 	return c<=50 && d<=50;
// } 
// var a = prompt ('ведите число');
// var b = prompt ('ведите cтепень');
// function pow (c,d) {
// 	if (minimal (c,d) && maximal (c,d)) {
// 	    var result =c;
//    		for (var i=1; i<d; i++){
//     		result = result*c;
// 		}
		
// 		return result;	
// 	}
//     else {
//     	var a = prompt ('ведите число');
// 		var b = prompt ('ведите cтепень');
//     	console.log (pow (a,b));	
//     }
// }
// console.log (pow (a,b));




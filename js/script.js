
// var arr = [];
// var i, myName, flag = false;

// for (i = 0; i < 5; i++) {
//     arr[i] = prompt('Ввведите имя'+ i);
//     console.log(arr);
// }
// console.log(arr);

/*
myName = prompt('Введите ваше имя'); 	

for (i = 0; i < 5; i++) {
	if ( myName == arr[i] && myName !== null) {
	flag = true;
	break;
	} 
}

if (flag && myName !== null) { 
	alert('Добро пожаловать '+ myName);
} else {
	alert('Вашего имени ' + myName +' нет в списке');
} 
*/


/*var a = prompt("a?", '');
var b = prompt("b?", '');

function pow (a, b) {
    var result = a;
    for (var i = 1; i < b; i++)
    {
        result  *= a ;}
    return result;
}

if (b <= 1) {
    alert('2 ' + a  );
} else {
    alert( pow(a, b) );
}
*/



//console.log (a, b);
//function c  (a, b) {
//    if (a == b){
//        alert ('Вы успешно вошли!');
//    } else {alert('Вход запрещен!');
//    }
//}
//c(a,b);



//
//
//
//function  check  (array,word ){
//    for(var i=0;i<array.lenght;i++){
//        if(array[i] === word)
//        {
//            alert ('Вы успешно вошли!');
//            return true;
//        }
//    }
//    return false;






//var b = prompt ('Введите свое имя');
//    console.log(arr);
//
//if(check(arr,b))
//{
//    alert ('Вы успешно вошли!');
//}
//else
//{
//    alert ('Не успешно вошли!');
//}
//

// var x;
// function sum () {
// 	 x = 5+5;
// }
// function iterator () { 
//     console.log (x);
// }

// sum ();
// iterator ();

var builder = {
   x: '',

    sum: function (){
    this.x = 5+5;
    },

    iterator: function () {
    console.log (this.x);
}
};

builder.sum ();
builder.iterator ();
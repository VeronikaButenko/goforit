var arr = [];
var i, myName, flag = false;

for (i = 0; i < 5; i++) {
arr[i] = prompt('Ввведите имя'+ i);
console.log(arr);
}
console.log(arr);


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
	alert('Вашего имени ' + myName + ' нет в списке');
}




function pow (a, b) {
    var result = a;
    for (var i = 1; i < b; i++)
    {
        result*= a ;}
    return result;
}

var a = prompt("a?");
var b = prompt("b?");


    alert( pow(a, b) );





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
function  check(array, word ){
    // alert('Hi!'+array.length+'t');
   for(var i=0; i<array.length; i++){
       if(array[i] == word)
       {
        // alert(i+'-'+array[i]+'-'+word);
           return true;
       }
      }

   return false;

}


 //  console.log(arr);
var arr = [''];
var i, myName, flag = false;


for (i = 1; i < 6; i++) {
    arr[i-1] = prompt('Вы успешно вошли! '+ i);

}
console.log(arr);
var b = prompt ('Вход запрещен!');
console.log(b);

if (check(arr,b))
{
   alert ('Вы успешно вошли!');
}
else
{
   alert ('Вход запрещен!');
}


// var x;
// function sum () {
// 	 x = 5+5;
// }
// function iterator () {
//     console.log (x);
// }

// sum ();
// iterator ();

/*var builder = {
   x: '',

    sum: function (){
    this.x = 5+5;
    },

    iterator: function () {
    console.log (this.x);
}
};

builder.sum ();
builder.iterator ();*/


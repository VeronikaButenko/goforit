// УСЛОВНЫЕ ОПЕРАТОРЫ
var user = 'admin';
if (user == 'admin') {alert ('hello');
    else {
        {alert ('good bye');}
    }
}

var user = 'admin';
user = prompt('Tnter you name');
if (user == 'admin') {alert ('hello');
else {
        {alert ('good bye');}
    }

//ТЕРНАРНЫЙ ОПЕРАТОР
    (user = 'admin')? ("alert ('hello')"): ("alert ('good bye')");

// МАСИВЫ
var arr = [1, true, 4, 5];
console.log ('arr', arr [2]);

console.log ('arr.length ', arr.length);
arr. push ('5');

console.log ("arr. push ('5');" );
var removedItem = arr.pop();
console.log ('removedItem', removedItem);

arr.unshift ('5');
console.log ("arr.unshift ('5');" );

arr ['10'] = '10 element';
console.log (arr);

// ЦИКЛЫ
  var i = 0;

while (condition i<4)
{
    alert ['test'];
    console.log('i = ', i);
    i++;
}

  var  i = 0;

do {console.log('i = ', i);
alert ('hello' +i);
i++;
} while(i<4);


for (var i = 0; i < 4; i++){
    debugger;
}
    consol.log ( 'out of cycle');
}

// DEBUGGER


alert('asd');

//ОБЕКТЫ
var arr = ['1', true, 'false'];

var obj = {
    0: '1',
    1: true,
    2: 'false'
};


var student = {
    age: 18,
    name: 'Vasya'
   'my second name': 'Pupkin',
    key: 'this is key'
};
console.log(student.age);


var key = 'my_second_name'
student[ my second name];
console.log(student[ my second name]];

if (key in student){
    console.log(key);
} else { console.log( 'no key');
}

for (var key in student){
    console.log('key' ,key);
    console.log('student'[key]), ;
    student [key]);
}

 //КЕЙС
var keyslist = object.keys(student);
console.log (keyslist);

//ГЛОБАЛЬНЫЕ ОБЕКТЫ ВИНДОВС пишеться в консоле
//сли писать без вар то засряется виндовс глобальная
//и если без функции тожже записывается в виндовс
var abc = '5'

//Стандартные методы масивов ДЛИНА СТРОЧНОГО МАСИВА
var str = 'test';
console.log(str.lenght);
console.log(str [0]);

// ИЩЕМ ПОДСТРОКУ
var str = 'test';
console.log(str.insexOf ('st'));

//Заменн переменой НЕ РАБОТАЕТ СО СТРОКАМИ

var str = 'test';
str = str.replace ('e', 'A');
console.log (str);

перевести в маленькие буквы
var str = 'TEST';
str = str.toLowerCese();
console.log(str);

еревести в маленькие буквы
var str = 'tEST';
str = str.toUpperCase();
console.log(str);

ИЩЕМ ПОДСТРАКУ ПО ПОЗИЦИИ
var str = 'TEST';
console.log(str.substring(1.3));


//ОТ СТРОК К ЧИСЛАм ПЕРЕХОЖ
var str = '12';
var num = +str  ;
console.log{typeof str};
console.log{typeof num};


var str = '12';
var num = +str  ;
console.log (num);
if (isNAN(num))
    console.log  ('not a number');
} else
console.log ( 'is not a number');
}

var str = '12px';
var num = parsInt(str);
console.log (srr);
console.log ('num = ', num);


var str = '12px';
var newStr = num + '';
console.log ('newStr', newStr);
console.log (typeof newStr);

//ОКРУГЛЕНИЕ
var newNumber = 12.9;
var roundResult = Meth.floor(newNumber);
console.log (roundResult);


var newNumber = 12.9;
var roundResult = Meth.cell(newNumber);
console.log (roundResult);

var newNumber = 12.9;
var roundResult = Meth.round(newNumber);
console.log (roundResult);

//РАЗБИВАЕМ НА МАСИВ
var str = '1, 2, test, 4';
var arr = str.split (',');
console.log (arr);

//ОБЕДИНЯЕМ МАСИВ В СТРОКУ
var arr = [1, 2, 3, 4, 'test'];
var str = arr.join(':');
console.log (arr);
var newArr = str.split (' :');
console.log (newArr);

//НЕОТСОРТИРОВАНЫЙ МАСИВ
var arr = [2, 3, 5, 7, 10, 1.1, 1.8];
var newArr = arr.sort();
console.log (newArr);

//По какму правилу сортировать
var arr = [2, 3, 5, 7, 10, 1.1, 1.8];
arr.push ('test string');
console.log (arr);
arr.pop();
console.log (arr);

//ФУНКЦИИ помогает вызвать несколько рас
function sayHi () {
alert ('hello world');
}
sayHi ();
sayHi ();
sayHi ();
sayHi ();
console.log ( sayHi);

function  calculate(a,b){
var test = 'test';
    console.log ('a =', a);
console.log ( 'calculate result = ', a + b}
calculate (2,5);


function  calculate(a,b,c){
    var test = 'test';
    var result;
    result = a+b+c;
    alert ('test');

           if (return  > 10) {return result} else {return 'bad parameters'}


return result;}

calculate (2,5,3);
var calculationResult = calculate (2,5,3);
console.log ('calculationResult', calculationResult);

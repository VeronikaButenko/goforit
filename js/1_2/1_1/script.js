var sum = (5+2);
console.log(sum);


var sum = (15.3+7);
var result = Math.floor(sum);
console.log(result);

var num = a;
var a = 7;
var sum = Math.ceil(a*12);
console.log(sum);

var sum = Math.round(a*10);
console.log(sum);

var num = Math.pow(5, 2);
console.log(num);



function pow(a, n) {
var b = a;
for (var i = 1; i < n; i++) {
b *= a;
}
return b;
}
alert(pow(2, 5));

function pow(a, n) {
var b = a;
for (var i = 1; i < n; i++) {
b *= a;
}
return b;
}
alert(Math.pow(2, 5));



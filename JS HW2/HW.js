console.log("Zadanie1")
let arr = [1,2,3,4,5,6,7,8]
console.log(arr.reduce((a, c) => a + (c % 2 ? 0 : c ** 0.5), 0))
console.log("Zadanie2")
let yab = 1.15
let pot = 2.30
console.log(yab+pot)
console.log("Zadanie3")
let s = ""
for (let i = 0; i < 6; i++){
    s= s + "*"
    console.log(s)
}
console.log("Zadanie4")
for (let i=1; i<100; i++){
    if ( i % 3 != 0 && i % 5 !== 0 ){
        console.log(i)
    }
    else {
        if (i % 5 == 0 && i % 3 !== 0)
        console.log("Buzz")
        if (i % 3 == 0 && i % 5 !== 0)
        console.log("Fizz")
        if (i % 5 == 0 && i % 3 == 0)
        console.log("FizzBuzz")
    }
}
console.log("Zadanie5")
console.log("kol-vo minut v 1 chase: " + 60*60)
console.log("Zadanie6")
//let name = prompt("Введите ваше ", "имя")
//alert("Ваше имя: " + name)
console.log("Zadanie7")
let str = 'abcde'
console.log(str[0])
console.log(str[2])
console.log(str[4])
console.log("Zadanie8")
var obj = {'коля':'1000','вася':'500','петя':'200'}
for (key in obj){
    if (key == 'коля')
        console.log(key + ' = '+ obj[key])
    if (key == 'петя')
        console.log(key + ' = '+ obj[key])
}
console.log("Zadanie9")
const arr1 = [2,5,3,9]
const result = arr1[0]*arr1[1] + arr1[2]*arr1[3]
console.log(result)
console.log("Zadanie10")
let min = 31
if (min <= 15){
    console.log("1 chetvert")
}
else if (min > 15 && min <= 30){
    console.log("2 chetvert")
}
else if (min > 30 && min <= 45){
    console.log("3 chetvert")
}
else if (min > 45 && min <= 60){
    console.log("4 chetvert")
}
console.log("Zadanie11")
let a = -3 
if (a < 0){
    console.log("True")
}
else {
    console.log("False")
}
console.log("Zadanie12")
let test1 = true
if (test1 == true) {
console.log('Верно');
} else {
console.log('Неверно');
};

let test2 = false;
test2 ? console.log('Верно') : console.log('Неверно');

console.log("Zadanie13")
let num = 1;
let result1;

switch (num) {
	case 1:
        result1 = 'зима';
        break;
	case 2:
		result1 = 'весна';
        break;
	case 3:
		result1 = 'лето';
        break;
    case 3:
        result1 = 'осень';
        break;
}

console.log(result1);

console.log("Zadanie14")
var arr2 = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
}

console.log("Zadanie15")
let a1 = 10;
let b1 = 3;
console.log(a1 % b1)

console.log("Zadanie16")
let st = Math.pow(2, 10);
console.log(st)

console.log("Zadanie17")
let bebra = Math.sqrt(379)
console.log(Math.round(bebra))
console.log(Math.round(bebra * 10)/10)
console.log(Math.round(bebra * 100)/100)

console.log("Zadanie18")
let jebra = [4, -2, 5, 19, -130, 0, 10]
console.log('Минимальное число: ', Math.min.apply(null, jebra))
console.log('Максимальное число: ', Math.max.apply(null, jebra))

console.log("Zadanie19")
console.log(Math.floor(Math.random() * 100))

console.log("Zadanie20")
let str1 = 'aaa bbb ccc'
console.log(str1.substr(4, 3))
console.log(str1.substring(4, 7))
console.log(str1.slice(4, 7))

console.log("Zadanie21")
let str2 = 'js'
console.log(str2.toUpperCase())

console.log("Zadanie22")
let str3 = 'я учу javascript!'
console.log(str3.length)

console.log("Zadanie23")
let str4 = 'я учу javascript!'
console.log(str4.indexOf('учу'))

console.log("Zadanie24")
let str5 = 'Я-учу-javascript!'
str6 = str5.replace(/-/g , '!')
console.log(str6)

console.log("Zadanie25")
let str7 = 'я учу javascript!'
let arrStr = str7.split('')
console.log(arrStr)

console.log("Zadanie26")
let arrStr1 = ['я', 'учу', 'javascript', '!']
console.log(arrStr1.join('+'));

console.log("Zadanie27")
let str8 = 'hello World!'
console.log(str8[0].toUpperCase() + str8.slice(1))
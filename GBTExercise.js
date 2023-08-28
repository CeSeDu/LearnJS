//1
var name = 'Sena';
var age = 21;
console.log('My Name is ' + name + ' my Age ' + age);

//2
var num = 10;
if(num == 10){
    console.log('Sayı 10 a eşit');
}else if(num > 10){
    console.log('sayı 10 dan büyük');
}else{
    console.log('sayı 10 dan küçük');
}

//3
for(let i =1; i <= 10;i++ ){
    console.log(i );}



//4
var num1 = Number(prompt('Bir sayı giriniz'));
var num2 = Number(prompt('Bir sayı giriniz'));

function total(total){
    var total = num1 + num2;
    document.write(total);
}
total();

//5
var fruit = ['strawbery','Banana','apple'];
console.log(fruit[1]);
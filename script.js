//!First subject
// alert('Merhaba');
console.log(1234);
console.log(true);
console.log([1, 2, 3, 4]);
console.error("Bir hata oluştu");
console.warn("Bir uyarı oluştu");

console.clear();

//!Second subject
//?Değişkenler
// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullName = 'Sadık Turan';
// console.log(fullName);

// fullname = 'Çınar Turan';
// console.log(fullname);

/*
DEĞİKEN TANIMLAMA KURALLARI:

1.Sayısal ifade ile başlayamaz.
2.Komut isimleriyle tanımlama yapılmaz
3.Birden fazla kelime ayrı ayrı kullanılamaz
4.case sensitive (büyük küçük duyarlılığı)
*/

//?var-let-const

// let city='Konya';
// console.log(city);

// const email='abc@gmail.com';
// console.log(email);

// email = 'bcd@gmail.com';//Hatalı kullanım örneği constta böyle bir değişiklik yapamayız.
// console.log(email);

//!Third Subject

//?Değişken Tipleri
//TODO:Primative Types
//?String Types
let firstName = "Çınar";

//?Number Types
let age = 20;
let money = 100.5;

//?Boolean Types

let isActive = false;

//?Null Types
let job = null;

//?Undefined Types
let car;

console.log(typeof money);

//TODO:Referance Types - Objects
//?Array
let names = ["ali", "ahmet", "zeynep"];

//?Object
let address = {
  city: "Kocaeli",
  country: "Türkiye",
};
//?Function
var calculateAge = function () {
  return 0;
};

console.log(typeof calculateAge);

console.clear();

//!Fourt Subject

//?Tür Dönüşümü

//Stirng to Number
let num1 = Number("5");
let num2 = Number("10");

console.log(num1 + num2);
console.log(typeof num1);

//Number to string
let val;
val = String(10);

//Bool to String
val = String(true);

//Date to string
val = String(new Date());

//array to string
val = String([1, 2, 3, 4, 5]);

//To string()
val = (10).toString();
val = false.toString();

//string to number

val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");

//parseInt
//parseFloat

val = parseInt("10");
val = parseInt("10.5");
val = parseFloat("10.5");

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

console.clear();

var customerName = "Fatih";
var customerSurname = "Şekercizade";
var customerCitizenshipNumber = 241526461452;
var customerOrderTotal = Number("3");
var customerGender = "Man";

var customerAddress = {
  city: "İstanbul",
  district: "Şişli",
};
var customerHobby = ["Walk", "Reading"];

var order1 = Number("100");
var order2 = Number("150");

var totalOrder = order1 + order2;
console.log(totalOrder);

var yearOfBirth = 2002;
console.log(new Date().getFullYear() - yearOfBirth); //SENSİN 21

console.clear();

//?Aritmatik-Atama-Larşılaştırma-Mantıksal Operatörler

//Aritmatik operatörleri
const a = 10;
const b = 5;
let c = 3;

val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = c++;
val = ++c;

//Atama Operatörleri

val = a;
val += a; // val + a;
val -= a; // val - a;
val *= a; // val * a;
val /= a; // val / a;
val %= a; // val % a;

//Karşılaştırma

val = a == b;
val = a === b; //Değer ve type
val = 5 === "5";
val = a != b;
val = a !== b;
val = a < b;
val = a > b;
val = a >= b;
val = a <= b;
val = 5 >= 5;

//Mantıksal

val = a > b && a > c;
val = a > b || a > c;
val = !(a > b);

console.log(val);
console.log(typeof val);

console.clear();

let IndexAda;

const kgAda = 90;

const heightAda = 1.5;

IndexAda = kgAda / (heightAda * heightAda);

console.log(IndexAda);

let adaZayif = IndexAda >= 0 && IndexAda <= 18.4;
let adaNormal = IndexAda >= 18.5 && IndexAda <= 24.9;
let adaKilolu = IndexAda >= 25 && IndexAda <= 29.9;
let adaSisman = IndexAda >= 30 && IndexAda <= 34.9;

console.log("ada zayıf mı ?" + adaZayif);
console.log("ada normal mi ?" + adaNormal);
console.log("ada Kilolu mı ?" + adaKilolu);
console.log("ada Sisman mı ?" + adaSisman);

console.clear();

//!Data Object

let d = new Date();

//Data object
let birthday = new Date(2002, 8, 18);
console.log(d.getFullYear() - birthday.getFullYear());

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getSeconds());

//Set Methods
d.setDate(3);
d.setMonth(5);
d.setHours(5);

console.log(d);
console.clear();

var dt = new Date();

// console.log(dt.getMonth(),dt.getDate(),dt.getFullYear());

let s = new Date();
s.setDate(30);
s.setMonth(11);
s.setFullYear(1989);

// console.log(s);

var start = new Date("1/1/2030");
var end = new Date("1/1/2050");

var milisecond = end - start;
var saniye = milisecond / 1000;
// var dakika = saniye / 60;

// console.log('milisecond :'+milisecond);
// console.log('saniye :' + saniye);

let today = new Date(2002, 08, 18);
// console.log(today.getFullYear() - d.getFullYear());

var birthdayy = new Date("8/1/1985");

//!DAte Konusunu tekrar et!!!

console.clear();
//?NUMBERS

let val1;

// val1 = Number('10');
val1 = parseInt("10"); //(Bir dizeyi bir tamsayıya dönüştürür.)
val1 = parseFloat("10.5"); //(küsüratlı sayıya dönüştürür.)
val1 = parseInt("a10a"); //(Bir dizeyi bir tamsayıya dönüştürür..)
val1 = isNaN("10"); //(Bir değerin NaN (sayı değil) olup olmadığını belirten bir Boolean değeri döndürür.)
val1 = isNaN("a10"); //(true=saysısal değer değil)

var num = 10.12456789;
val1 = num.toPrecision(6); //(Belirtilen sayıda basamakla üslü veya sabit nokta gösteriminde temsil edilen bir sayı içeren bir dize döndürür.)
val1 = num.toFixed(2); //(Ondalıkı sayıyının kaç basamağının gösterileceği)

val1 = Math.PI;
val1 = Math.round(2.4); //(En yakın sayıya yuvarlıyor)
val1 = Math.round(2.7);
val1 = Math.round(2.4);
val1 = Math.round(2.6);
val1 = Math.ceil(2.4); //(En büyük sayıya yuvarlıyor)
val1 = Math.floor(2.9); //(En Küçük sayıya yuvarlıyor)
val1 = Math.sqrt(21); //(Sayının karekökünü döndürür)
val1 = Math.pow(2, 4); //(Üssünu hesaplar)
val1 = Math.abs(-100); //(Pozitif sayıyı döndürür)
val1 = Math.min(1, 2, 3, 4, 5, 6, 7);
val1 = Math.max(1, 2, 3, 4, 5, 6, 7);
val1 = Math.floor(Math.random() * 100 + 1);

console.log(val1);
console.log(typeof val1);

console.clear();

var num3 = 15.123456789;
console.log(num3.toPrecision(3));

console.log(num3.toFixed(3));

console.log(Math.round(num3));
console.log(Math.floor(num3));
console.log(Math.ceil(num3));

console.log(Math.min(1, 2, 10, 56, 20));
console.log(Math.max(1, 2, 10, 56, 20));

var min = 50;
var max = 100;

console.log(Math.floor(min + Math.random() * (max - min)));

var maas = 3700;
var mesai = 10.3;
var aug = 42;

var total = maas + aug * mesai;
var toplam = total - total * 0.25;

console.log(total, toplam.toFixed(2));

console.clear();

const fullName2 = "Sena Durmuş";
const city = "City";
const yearOfBirt6 = 2002;

let val6;

val6 = `my name is ${fullName2}I\'m${
  2023 - yearOfBirt6 >= 18 ? "over 18" : "under 18"
}years old and I live in${city}`;

console.log(val6);

console.clear();

var sentence =
  "Set a conditional breakpoint quicker using the Control / Command + click keyboard shortcut in the Sources panel.";
var url =
  "The debugger will automatically ignore content scripts injected by extensions.şöüışç";

console.log(sentence.length);
console.log(sentence.split(" ").length);
console.log(sentence.toLowerCase());
console.log(sentence.trim());
console.log(sentence.replace("/", ""));

var str = "The debugger";
console.log(url.substr(str.length));
console.log(url.slice(str.length));
console.log(url.startsWith("The debugger"));
console.log(url.search("will"));
console.log(url.indexOf("willl"));
console.log(url.includes("will"));

console.log(
  url
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
);

console.clear();

//?Arrays

let naames = ["çınar", "sena", "ada", "yiğit"];
let years = [2017, 2002, 2012, 1980];
let mix = ["sena", "durmuş", 2002, null, undefined, ["sinema", "kitap"]];

console.log(naames);
console.log(typeof naames);
console.log(naames.length);

console.log(years);
console.log(mix);

console.log(naames[0]);
console.log(naames[3]);

//set array item
naames[naames.length] = "emel";

//add item
years.push(2017);
years.unshift(1999);

//remove item
years.pop();
years.shift();

//indexof
let index = naames.indexOf("çınar");
console.log("index:" + index);

//reverse
naames.reverse();
console.log(naames);

//sort
years.sort();
console.log(years);

//concat
let val5 = years.concat(naames);
console.log(val5);

//splice
naames.splice(2, 0, "seda");
console.log(naames);

//find
function over18(year) {
  let age = 2018 - year;
  return age >= 18;
}
// let val8 = years.find(over18);
// console.log(val8);

//filter
let val8 = years.filter(over18);
console.log(val8);

console.log(years);
console.clear();

let cars = ["BMW", "Mercedes", "Opel", "Mazda"];
console.log(cars.length);
// console.log('ilk eleman : ' + cars.shift());
// console.log('son eleman : ' + cars.pop());

console.log(cars[0]);
console.log(cars[cars.lenght - 1]);

// vall =  cars.push('Renault');
// console.log(vall);

cars[4] = "renault";
cars[cars.lenght] = "Toyota";

// console.log(cars.splite('BMW'));

console.log(cars.reverse());

cars.sort();

console.log(cars);

var number = [1, 2, 5, 8, 50];

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
console.log(number.sort(compare));

console.clear();

//?if-else statements

const firstName1 = "Sena";
const age1 = 19;
const isStudent = true;
const school = "universty";

if (firstName1 == "Sena") {
  console.log("merhaba Sena");
}

if (age1 == 19) {
  console.log("yaşınız 19");
} else {
  console.log("yaşı bilinmiyor");
}

if (age1 >= 18) {
  if (school == "universty") {
    console.log("ehiliyet alabilirisniz");
  } else {
    console.log("eğiitm durumunuz yetersiz");
  }
} else {
  console.log("ehliyet alamazsınız");
}

if (age1 > 0 && age1 < 12) {
  console.log(`${firstName1} is a child `);
} else if (age1 > 13 && age1 < 18) {
  console.log(`${firstName1} is a young`);
} else {
  console.log(`${firstName1}  is a adult`);
}

console.clear();

let category = "Telefon";

switch (category) {
  case "Telefon":
    console.log("telefon kategorisi");
    break;
  case "bilgisayar":
    console.log("bilgisayar kategorisi");
    break;
  default:
    console.log("yanlış kategori");
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "pazar";
    break;

  case 1:
    day = "pazartesi";
    break;

  case 2:
    day = "salı";
    break;

  case 3:
    day = "çarşamba";
    break;

  case 4:
    day = "perşembe";
    break;

  case 4:
    day = "cuma";
    break;

  case 6:
    day = "cumartesi";
    break;
}
console.log(`bugun günlerden ${day}`);

switch (true) {
  case age1 > 0 && age1 < 12:
    console.log(`${firstName1} is a child `);
    break;
  case (age1 > 13 && age1 < 18) :
    console.log(`${firstName1} is a young`);
    break;
  case age1 > 0 && age1 < 12:
    console.log(`${firstName1} is a child `);
    break;

default:
  console.log(`${firstName1}  is a adult`);
}

console.clear();

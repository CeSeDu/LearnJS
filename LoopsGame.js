var  claim = 5,can;
var tahmin,sayac = 0;
var num = Math.floor((Math.random()*10)+1);
can = Number(prompt('Kaç kerede bileceksiniz?'));
claim = can;

console.log(num);

while(claim>0){
    claim--;
    sayac++;
    tahmin = Number(prompt('Bir sayı giriniz'));

    if(num == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz`);
        console.log(`puan: ${100 - (100/can) * (sayac - 1)}`);
        break;
    }else if(num > tahmin){
        console.log('Büyük sayı');
    }else{
        console.log('küçük sayı');
    }

    if(claim ==0){
        console.log('hakkınız bitti ');
    }
}
 
 

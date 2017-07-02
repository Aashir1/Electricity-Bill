/*
Aashir Khan
68
Batch 4.2

*/




/**************************** task : 01 ****************************/








/*var ref = document.getElementById('inner-p');
var currDate = new Date();
var dob = new Date("Octuber 27, 2017" );
var dayDiff = dob.getTime() - currDate.getTime();
dayDiff = dayDiff / (1000 * 60 * 60 * 24);
ref.innerHTML = Math.floor(dayDiff) + " days left in your birthday";*/






          /**************************** task : 02 ****************************/





/*
var ref = document.getElementById('inner-p');
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var birthDate = prompt('enter your birthDate');
var currDate = new Date(birthDate);
ref.innerHTML = 'day of your birth is ' + dayNames[currDate.getDay()];
*/

        /**************************** task : 03 ****************************/



/*var ref = document.getElementById('inner-p');
var arrayMonth = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octuber', 'november', 'december'];
 var currDate = new Date();
 var month = currDate.getMonth();
 console.log(month);
 ref.innerHTML = 'current month is ' + arrayMonth[month];*/




 /**************************** task : 04 ****************************/

/*var ref = document.getElementById('inner-p');
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currDate = new Date();
if(dayNames[currDate.getDay()] === 'Sat'){
    ref.innerHTML = 'Its Fun day';
}
else{
    ref.innerHTML = currDate;
}*/


 /**************************** task : 05 ****************************/

/* var ref = document.getElementById('inner-p');
 var currDate = new Date();
 if(currDate.getDate() <= 15){
    ref.innerHTML = 'First fifteen days of the month';
 }
 else if(currDate.getDate() > 15 && currDate.getDate() < 32){
    ref.innerHTML = 'Last fifteen days of the month';   
 }*/


    /**************************** task : 06 ****************************/


/*var ref = document.getElementById('inner-p');
var currDate = new Date();
console.log(currDate.getHours());
if(currDate.getHours() <= 11){
    ref.innerHTML = 'its Pm';
}
else if(currDate.getHours() > 11 && currDate.getHours() <=23){
    ref.innerHTML = 'its Am';
}
*/


    /**************************** task : 07 ****************************/


/*var ref = document.getElementById('inner-p');
var currDate = new Date("December 31, 2020");
console.log(currDate);*/



    /**************************** task : 08 ****************************/

/*var ref = document.getElementById('inner-p');
var ramdanDate = new Date("June 18, 2015");
var currDate = new Date();
var dateDiff = currDate.getTime() - ramdanDate.getTime();
console.log(dateDiff);
ref.innerHTML = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) + ' days have passed since 1st ramadamn, 2015';*/



    /**************************** task : 09 ****************************/

/*var ref = document.getElementById('inner-p');
var ramdanDate = new Date("January 1, 2017");
var currDate = new Date();
var dateDiff = currDate.getTime() - ramdanDate.getTime();
ref.innerHTML = Math.floor(dateDiff / (1000)) + 'seconds had passed since begining of 2017';*/


 /**************************** task : 10 ****************************/

/*
var ref = document.getElementById('inner-p');
var currDate = new Date();
currDate.setHours(2);
ref.innerHTML = currDate;*/


    /**************************** task : 11 ****************************/

/*var ref = document.getElementById('inner-p');
var currDate = new Date();
currDate.setFullYear(1917);
ref.innerHTML = currDate*/


/**************************** task : 12 ****************************/
var units = +prompt('Enter total units: ');
var unitPrice = +prompt('Enter charges per unit');
var latePayment = +prompt('Enter Late payment');
var total = units * unitPrice;
var currDate = new Date();
var dueDate = new Date('July 1, 2017');
console.log(dueDate.getDate());
var arrayMonth = ['january', 'feburary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'octuber', 'november', 'december'];
document.getElementById('customer-name').innerHTML = 'Wajahat' ;
document.getElementById('month').innerHTML = arrayMonth[new Date().getMonth()] ;
document.getElementById('units').innerHTML = units ;
document.getElementById('charges').innerHTML = unitPrice ;
document.getElementById('net-amount').innerHTML = total ;
document.getElementById('net-amount-t').innerHTML = total ;
document.getElementById('late-payment').innerHTML = latePayment ;
document.getElementById('late-payment-t').innerHTML = latePayment ;
document.getElementById('after-duedate').innerHTML = total + latePayment ;

if(currDate.getDate() <= dueDate.getDate()){
    document.getElementById('paid-charges').innerHTML = total ;
}
else if(currDate.getDate() > dueDate.getDate()){
    document.getElementById('paid-charges').innerHTML = total + latePayment;
}





















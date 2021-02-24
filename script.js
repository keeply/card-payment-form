var validated; //set a variable to check on whether a card is expired

function validate() { 
////////////INPUT EXPIRY DATE///////////////////  
var inputMonth = document.getElementById("exMM").value;
var inputYear = document.getElementById("exYY").value;

var today = new Date(); // gets the current date
var someday = new Date();
    
var year = today.getFullYear() % 100;  ///changes 2021 to 21
var month = today.getUTCMonth() + 1;  ///because months count from 0-January to 11-December

// если значение месяца < 10, добавляем к нему 0
if (month < 10) { 
   month = '0' + month;
}

//проверка срока действия карты
if (inputYear == year && inputMonth <= month)  {
   alert("Your card is expired! Please use another card.");
   return validated = false;
} else validated = true;
}
  
function checkForm() {
//checking all required fields
  
  let inputCardNum = document.getElementById("cardNum");
  let inputName = document.getElementById("name");
  let inputCVV = document.getElementById("cvv");

 if (inputCardNum.value !== "" && inputName.value !== "" && inputCVV.value !== "") {
   if (validated && inputCardNum.value.length >= 19 && inputCVV.value.length === 3) {
     alert("Your payment is being processed.. Please wait!");
   } else {
     alert("Invalid card!");
   }
 } else {
   alert("Please fill all required fields!");
 }
}

//////////////Проверка платежной системы - CHECKING PAY SYSTEM////////////////

function checkPaySystem() {

let firstNumber = document.getElementById("cardNum").value[0];
  
  console.log(firstNumber);
  switch (firstNumber) {
  case '2':
    //МИР
    document.getElementById("img-pay-sys").src = "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mir-logo.SVG.svg";
    break;
  case '3':
    //MAESTRO
    document.getElementById("img-pay-sys").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Maestro_logo.svg/1280px-Maestro_logo.svg.png";
       
    break;
      case '4':
    //VISA
    document.getElementById("img-pay-sys").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/320px-Old_Visa_Logo.svg.png";
    
    break;
      case '5':
      //MASTER CARD
    document.getElementById("img-pay-sys").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/320px-Mastercard_2019_logo.svg.png";
    break;
    default:
    console.log('Undefined pay system');
}
}
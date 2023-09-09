


const buttonOk = document.getElementById("button1");
const buttonHide = document.getElementById("button2")
const showTicket = document.getElementById("show-ticket");

buttonHide.addEventListener("click", function () {
 showTicket.className =  " d-none";
  
})


buttonOk.addEventListener("click", function(){
  
  const name = document.getElementById("name").value;

  const inputKilometres = document.getElementById("kilometres");
  let kmValue = inputKilometres.value;
  const kmPrice = 0.21;
  const ticketPrice = (kmPrice * kmValue).toFixed(2);

  const age = document.getElementById("age");

  let message = "";
  let finalPrice 
  

  if (age.value == "underage") {
    const discountYoung = ((ticketPrice*20)/100).toFixed(2);
    message = "In quanto minorenne, pagherai solo "
    finalPrice = (ticketPrice - discountYoung).toFixed(2);

  } else if (age.value == "elder") {
    const discountElder = ((ticketPrice*40)/100).toFixed(2);
    console.log(discountElder);
    message = "In quanto Over65, pagherai solo "
    finalPrice = (ticketPrice - discountElder).toFixed(2);

  } else if (age.value == "adult") {
    finalPrice = ticketPrice;
    message = "In quanto maggiorenne, la tua tariffa è "
  }


let justPay = document.getElementById("message-pr");
  justPay.innerHTML = message + finalPrice + "€";
  justPay.classList.add("color-txt-sp");


document.getElementById("pr-ticket").innerHTML = finalPrice + "€";


document.getElementById("name-pass").innerHTML = name.toUpperCase();

document.getElementById("barcode").innerHTML = 
Math.floor(Math.random(1) * 100000000);            
})

         













// const kilometres = document.getElementById("kilometres").value;
// const kmPrice = 0.21;
// const ticketPrice = kmPrice * kilometres;
// let discount = 0;
// let age = document.getElementById("age");
// const buttonOk = document.getElementById("button1");
// let finalPrice = (ticketPrice - discount).toFixed(2) + "€";
// const showTicket = document.getElementById("show-ticket"); 



// const name = document.getElementById("name");
// let age = document.getElementById("age");

// // bottoni //
// const buttonOk = document.getElementById("button1");
// const buttonHide = document.getElementById("button2");
// const showTicket = document.getElementById("show-ticket"); 


// let kilometres = document.getElementById("kilometres").value;
// const kilometerPrice = 0.21;
// const ticketPrice = kilometerPrice * kilometres;
// let discount = 0;







// buttonHide.addEventListener("click", function(){
//   showTicket.className = " d-none";
//  })


 
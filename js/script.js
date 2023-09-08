const name = document.getElementById("name").value;
let kilometres = document.getElementById("kilometres").value;
let age = document.getElementById("age");

const underAge = age.options[0];
const adultAge = age.options[1];
const over65 = age.options[2].text;


// costo biglietto //
const kilometerPrice = 0.21;
const ticketPrice = kilometerPrice * kilometres;
let discount = 0;
let finalPrice = (ticketPrice - discount).toFixed(2) + "€";



console.log(finalPrice);





// bottoni //
const buttonOk = document.getElementById("button1");
const buttonHide = document.getElementById("button2");
const showTicket = document.getElementById("show-ticket"); 














// buttonOk.addEventListener("click", function(){
//  showTicket.className = " d-block";
// })

// buttonHide.addEventListener("click", function(){
//   showTicket.className = " d-none";
//  })
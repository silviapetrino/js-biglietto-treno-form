

const buttonOk = document.getElementById("button1");


buttonOk.addEventListener("click", function(){

  const inputKilometres = document.getElementById("kilometres");
  const kmValue = inputKilometres.value;
  const kmPrice = 0.21;
  const ticketPrice = kmPrice * kmValue;
  let discount = 0;
  let finalPrice = (ticketPrice - discount).toFixed(2) + "€";

  console.log(ticketPrice);

  console.log(finalPrice);

  const age = document.getElementById("age").value;
  
  console.log(age);


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


 
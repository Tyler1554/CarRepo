
let pickupDate = document.getElementById("pickupDate");
let numberOfDays = document.getElementById("numberOfDays");
let tollTagBox = document.getElementById("tollTagBox");
let gpsBox = document.getElementById("gpsBox");
let roadsideAssistanceBox = document.getElementById("roadsideAssistanceBox");
let under25 = document.getElementById("under25");
let over25 = document.getElementById("over25");
let price = 0;
let displayParagraph = document.getElementById("paymentBreakdown");
let displayCostButton = document.getElementById("displayCostButton");

function totalPricePerDay() {
  let numberofDayValue = Number(numberOfDays.value);
  let dailyprice = 29.99;
  let totalPrice = dailyprice * numberofDayValue;
  return totalPrice;
}

function options() {
  let priceOfOptions=0;
  let numberofDayValue = Number(numberOfDays.value);
  if (tollTagBox.checked) {
    priceOfOptions += 3.95 * numberofDayValue;
  }
  if (gpsBox.checked) {
    priceOfOptions += 2.95 * numberofDayValue;
  }
  if (roadsideAssistanceBox.checked) {
    priceOfOptions += 2.95 * numberofDayValue;
  }
  return priceOfOptions;
}

function ageRadio() {
  if (under25.checked) {
    return totalPricePerDay() * 0.3;
  } else {
    return 0;
  }
}

function finalCost() {
  let finalCost = totalPricePerDay() + options() + ageRadio();
  return finalCost;
}

function display() {
   displayParagraph.innerText = `Car Rental: $${totalPricePerDay().toFixed(2)} \n options: $${options().toFixed(2)} \n Under 25 surcharge: $${ageRadio().toFixed(2)} \n Total Cost: $${finalCost().toFixed(2)}`;
   
}

displayCostButton.onclick = display;
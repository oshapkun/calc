'use strict';

const squareInput = document.querySelector('#square_input');
const squareRange = document.querySelector('#square_range');
const inputs = document.querySelectorAll('input');
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrice = 2700;
const totalPriceElement = document.getElementById("total_price");
const priceTextElement = document.getElementById("price_text");

squareRange.addEventListener('input', function() {
  squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function() {
  squareRange.value = squareInput.value;
})

function calculate() {
  let totalPrice = basePrice * +squareInput.value;

  for (const radio of radioType) {
    if (radio.checked === true) {
      totalPrice *= +radio.value;
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked === true) {
      totalPrice *= +radio.value;
    }
  }

  for (const radio of radioRooms) {
    if (radio.checked === true) {
      totalPrice *= +radio.value;
    }
  }

  if(ceiling.checked) {
    totalPrice += +ceiling.value * +squareInput.value;
  }

  if(walls.checked) {
    totalPrice *= +walls.value;
  }

  if(floor.checked) {
    totalPrice *= +floor.value;
  }

  // const formatter = new Intl.NumberFormat('ua');
  // totalPriceElement.innerText = formatter.format(Math.round(+totalPrice));
  totalPriceElement.innerText = Math.round(+totalPrice);

  if (totalPriceElement) {
    const totalPriceNumber = totalPriceElement.innerText;

    if (!isNaN(totalPriceNumber)) {
        const lastDigit = totalPriceNumber % 10;
        
        if (lastDigit === 1) {
            priceTextElement.innerText = "гривня";
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            priceTextElement.innerText = "гривні";
        } else {
            priceTextElement.innerText = "гривень";
        }
    }
  }
}

calculate();

for (const input of inputs) {
  input.addEventListener('input', function() {
    calculate()
  })
}

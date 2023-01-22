//* MAIN DIV

const bag = document.querySelector(".bag");
const shoes = document.querySelector(".shoes");
const clock = document.querySelector(".clock");

//* PRICES

const bagPrice = document.getElementById("bag-price");
const shoesPrice = document.getElementById("shoes-price");
const clockPrice = document.getElementById("clock-price");

//* COUNTERS DIV

const bagCounter = document.querySelector(".bag-counter");
const shoesCounter = document.querySelector(".shoes-counter");
const clockCounter = document.querySelector(".clock-counter");

//* COUNTERS SPAN

const bagCounterSpan = document.getElementById("bag-counter-span");
const shoesCounterSpan = document.getElementById("shoes-counter-span");
const clockCounterSpan = document.getElementById("clock-counter-span");

//* PRODUCT TOTALS

const bagTotal = document.getElementById("bag-total");
const shoesTotal = document.getElementById("shoes-total");
const clockTotal = document.getElementById("clock-total");

//* REMOVE BUTTONS

const removeBag = document.getElementById("bag-remove");
const removeShoes = document.getElementById("shoes-remove");
const removeClock = document.getElementById("clock-remove");

//* TOTAL SUMS

const subtotal = document.getElementById("subtotal-span");
const tax = document.getElementById("tax-span");
const shipping = document.getElementById("shipping-span");
const total = document.getElementById("total-span");

window.addEventListener("load", () => {
  shipping.textContent = 0;
});

//! REMOVE EVENTS

removeBag.addEventListener("click", (e) => {
  e.preventDefault();
  bag.classList.toggle("removed");
  bagTotal.textContent = 0;
  subtotalSum();
  taxSum();
  totalSum();
});

removeShoes.addEventListener("click", (e) => {
  e.preventDefault();
  shoes.classList.toggle("removed");
  shoesTotal.textContent = 0;
  subtotalSum();
  taxSum();
  totalSum();
});

removeClock.addEventListener("click", (e) => {
  e.preventDefault();
  clock.classList.toggle("removed");
  clockTotal.textContent = 0;
  subtotalSum();
  taxSum();
  totalSum();
});

//! PLUS MINUS

let counterBag = 0;
let counterShoes = 0;
let counterClock = 0;

//? BAG PLUS MINUS !!!

bagCounter.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    counterBag += 1;
    bagCounterSpan.textContent = counterBag;
  } else if (e.target.classList.contains("fa-minus")) {
    counterBag !== 0 && (counterBag -= 1);
    bagCounterSpan.textContent = counterBag;
  }
  bagTotal.textContent =
    Number(bagPrice.textContent) * Number(bagCounter.textContent);
  subtotalSum();
  shipping.textContent = 15;
  taxSum();
  totalSum();
});

//? SHOES PLUS MINUS !!!

shoesCounter.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    counterShoes += 1;
    shoesCounterSpan.textContent = counterShoes;
  } else if (e.target.classList.contains("fa-minus")) {
    counterShoes !== 0 && (counterShoes -= 1);
    shoesCounterSpan.textContent = counterShoes;
  }
  shoesTotal.textContent =
    Number(shoesPrice.textContent) * Number(shoesCounter.textContent);
  subtotalSum();
  shipping.textContent = 15;
  taxSum();
  totalSum();
});

//? CLOCK PLUS MINUS !!!

clockCounter.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    counterClock += 1;
    clockCounterSpan.textContent = counterClock;
  } else if (e.target.classList.contains("fa-minus")) {
    counterClock !== 0 && (counterClock -= 1);
    clockCounterSpan.textContent = counterClock;
  }
  clockTotal.textContent =
    Number(clockPrice.textContent) * Number(clockCounter.textContent);

  subtotalSum();
  shipping.textContent = 15;
  taxSum();
  totalSum();
});

//* PRODUCT TOTALS

bagTotal.textContent =
  Number(bagPrice.textContent) * Number(bagCounter.textContent);

shoesTotal.textContent =
  Number(shoesPrice.textContent) * Number(shoesCounter.textContent);

clockTotal.textContent =
  Number(clockPrice.textContent) * Number(clockCounter.textContent);

//* GENERAL SUM

const subtotalSum = () => {
  subtotal.textContent =
    Number(bagTotal.textContent) +
    Number(shoesTotal.textContent) +
    Number(clockTotal.textContent);
};

const taxSum = () => {
  tax.textContent = Number(subtotal.textContent) * 0.18;
};

const totalSum = () => {
  total.textContent =
    Number(subtotal.textContent) +
    Number(tax.textContent) +
    Number(shipping.textContent);
};

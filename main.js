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
  bagTotalPrice();
  shoesTotalPrice();
  clockTotalPrice();
  subtotalSum();
  taxSum();
  totalSum();
});

//! REMOVE EVENTS

removeBag.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm(`${e.target.closest(".text").querySelector("h2").innerText} will be removed`)) {
    bag.classList.toggle("removed");
    bagTotal.textContent = 0;
    subtotalSum();
    if (subtotal.innerText == 0) {
      shipping.innerText = 0;
    }
    taxSum();
    totalSum();
  }
});

removeShoes.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm(`${e.target.closest(".text").querySelector("h2").innerText} will be removed`)) {
    shoes.classList.toggle("removed");
    shoesTotal.textContent = 0;
    subtotalSum();
    if (subtotal.innerText == 0) {
      shipping.innerText = 0;
    }
    taxSum();
    totalSum();
  }
});

removeClock.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm(`${e.target.closest(".text").querySelector("h2").innerText} will be removed`)) {
    clock.classList.toggle("removed");
    clockTotal.textContent = 0;
    subtotalSum();
    if (subtotal.innerText == 0) {
      shipping.innerText = 0;
    }
    taxSum();
    totalSum();
  }
});

//! PLUS MINUS

let counterBag = 1;
let counterShoes = 1;
let counterClock = 1;

//? BAG PLUS MINUS !!!

bagCounter.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    counterBag += 1;
    bagCounterSpan.textContent = counterBag;
  } else if (e.target.classList.contains("fa-minus")) {
    counterBag > 1 && (counterBag -= 1);
    bagCounterSpan.textContent = counterBag;
  }
  bagTotalPrice();
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
    counterShoes > 1 && (counterShoes -= 1);
    shoesCounterSpan.textContent = counterShoes;
  }
  shoesTotalPrice();
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
    counterClock > 1 && (counterClock -= 1);
    clockCounterSpan.textContent = counterClock;
  }

  clockTotalPrice();
  subtotalSum();
  shipping.textContent = 15;
  taxSum();
  totalSum();
});

//* GENERAL SUM

const subtotalSum = () => {
  subtotal.textContent = (
    Number(bagTotal.textContent) +
    Number(shoesTotal.textContent) +
    Number(clockTotal.textContent)
  ).toFixed(2);
};

const taxSum = () => {
  tax.textContent = (Number(subtotal.textContent) * 0.18).toFixed(2);
};

const totalSum = () => {
  total.textContent = (Number(subtotal.textContent) + Number(tax.textContent) + Number(shipping.textContent)).toFixed(
    2
  );
};

const bagTotalPrice = () => {
  bagTotal.textContent = (Number(bagPrice.textContent) * Number(bagCounter.textContent)).toFixed(2);
};

const shoesTotalPrice = () => {
  shoesTotal.textContent = (Number(shoesPrice.textContent) * Number(shoesCounter.textContent)).toFixed(2);
};

const clockTotalPrice = () => {
  clockTotal.textContent = (Number(clockPrice.textContent) * Number(clockCounter.textContent)).toFixed(2);
};

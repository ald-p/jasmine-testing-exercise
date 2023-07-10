window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 2.75
  };
  const amountEl = document.getElementById('loan-amount');
  const yearsEl = document.getElementById('loan-years');
  const rateEl = document.getElementById('loan-rate');

  amountEl.value = values.amount;
  yearsEl.value = values.years;
  rateEl.value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment({amount, years, rate}) {
  const periodicInterestRate = (rate / 100) / 12;
  const totalPaymentNum = years * 12;
  const monthly = (amount * periodicInterestRate) / (1 - Math.pow(1 + periodicInterestRate, -totalPaymentNum));
  return monthly.toFixed(2).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyEl = document.getElementById('monthly-payment');
  monthlyEl.innerText = `$${monthly}`;
}

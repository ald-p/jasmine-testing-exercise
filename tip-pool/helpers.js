
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// expects a table row element, appens a new td element with 'X' as text
function appendDeleteBtn(tr) {
  const newDeleteBtn = document.createElement('td');
  newDeleteBtn.innerText = 'X';
  newDeleteBtn.addEventListener('click', deleteEl);
  
  tr.append(newDeleteBtn);
}

function deleteEl(e) {
  const el = e.target.parentElement;

  delete allServers[el.id];

  el.remove();
  updateServerTable();
}

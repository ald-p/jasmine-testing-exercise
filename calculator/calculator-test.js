
it("should calculate the monthly payment correctly", function () {
  const values = {
    amount: 12000,
    years: 10,
    rate: 2.65
  }
  expect(calculateMonthlyPayment(values)).toEqual('113.94');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 35000,
    years: 7,
    rate: 4.67
  }
  expect(calculateMonthlyPayment(values)).toEqual('489.28');
});

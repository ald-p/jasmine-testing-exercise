describe('Payment tests', function() {
  beforeEach(function() {
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
  })

  it('should add a payment object to allPayments on submitPaymentInfo()', function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);
  })

  it('should not add a new payment if bill or tip amount inputs are blank on submitPaymentInfo()', function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  })

  it('should create a new payment on createCurPayment()', function() {
    const expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20
    }
    let curPayment = createCurPayment();

    expect(curPayment).toEqual(expectedPayment);
  })

  it('should not create a new payment when inputs are empty or negative on createCurPayment()', function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';

    expect(createCurPayment()).toEqual(undefined);

    billAmtInput.value = '-100';
    tipAmtInput.value = '-2';

    expect(createCurPayment()).toEqual(undefined);
  })

  it('should add table row and input values on appendPaymentTable()', function() {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);

    const curPaymentData = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curPaymentData[0].innerText).toEqual('$100');
    expect(curPaymentData[1].innerText).toEqual('$20');
    expect(curPaymentData[2].innerText).toEqual('20%');
    expect(curPaymentData[3].innerText).toEqual('X');
  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  })
})
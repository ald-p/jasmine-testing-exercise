describe('Helpers tests', function() {
  beforeEach(function() {
    billAmtInput.value = '100';
    tipAmtInput.value = '20';
    submitPaymentInfo();
  })
  
  it('should calculate the correct billAmt total on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = '200';
    tipAmtInput.value = '40';
    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  })

  it('should calculate the correct tipAmt total on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = '200';
    tipAmtInput.value = '40';
    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(60);   
  })

  it('should calculate the correct tipPercent total on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = '200';
    tipAmtInput.value = '40';
    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);  
  })

  it('should convert billAmt and tipAmt to tipPercent on calculateTipPercent()', function() {
    expect(calculateTipPercent(100, 20)).toEqual(20);
    expect(calculateTipPercent(1000, 2)).toEqual(0);
    expect(calculateTipPercent(10, 100)).toEqual(1000);
  })

  it('should add a table row element and row data on appendTd()', function() {
    const tr = document.createElement('tr');
    const value = 'sample-text';
    appendTd(tr, value)

    expect(tr.children.length).toEqual(1);
    expect(tr.children[0].innerText).toEqual('sample-text');
  })

  it('should add a column with value "X" to a given table row element on appendDeleteBtn(tr)', function() {
    const tr = document.createElement('tr');
    appendDeleteBtn(tr);

    expect(tr.children.length).toEqual(1);
    expect(tr.children[0].innerText).toEqual('X');
  })

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;   
  })
});
'use strict';

describe('simpleBanker App', function() {
  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Simple Banker app');
  });

  describe('transactions list', function() {
    it('should filter the transactions list as a user types into the search box', function() {
      var transactions = element.all(by.repeater('transaction in transactionList.transactions'));
      var query = element(by.model('query'));

      expect(transactions.count()).toBe(2);

      query.sendKeys('taxi');
      expect(transactions.count()).toBe(1);

      query.clear();
      query.sendKeys('lottery');
      expect(transactions.count()).toBe(0);
    });

    it('should archive selected transaction when click on Archive button', function(){
      var $totalBalance = $("#total_balance");

      expect($totalBalance.getText()).toBe('$1,050.00');

      element.all(by.css('input[type="checkbox"]')).first().click();
      $('#archive').click();

      expect($totalBalance.getText()).toBe('$50.00');
    });
  });

  describe('Transaction details', function() {
    it('should display transaction details', function() {
      expect(element.all(by.css('.js-transaction-text')).get(0).getText()).toBe('Salary');
      expect(element.all(by.css('.js-transaction-text')).get(1).getText()).toBe('taxi');
      expect(element.all(by.css('.js-transaction-amount')).get(0).getText()).toBe('1000');
      expect(element.all(by.css('.js-transaction-amount')).get(1).getText()).toBe('50');
    });
  });

  it('should add new transaction when submit form and order by date', function(){
    var $totalBalance = $("#total_balance");
    var date = element(by.model('transactionList.transactionDate'));
    var text = element(by.model('transactionList.transactionText'));
    var amount = element(by.model('transactionList.transactionAmount'));

    expect($totalBalance.getText()).toBe('$1,050.00');

    text.sendKeys('Ice cream');
    amount.sendKeys('-15');
    date.sendKeys('03/09/2015');
    $('#submit_form').click();

    expect(element.all(by.css('.js-transaction-date')).first().getText()).toBe('03/09/2015');
    expect(element.all(by.css('.js-transaction-text')).first().getText()).toBe('Ice cream');
    expect(element.all(by.css('.js-transaction-amount')).first().getText()).toBe('-15');
    expect($totalBalance.getText()).toBe('$1,035.00');
  });
});

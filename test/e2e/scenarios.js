'use strict';

describe('simpleBanker App', function() {
  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Simple Banker app');
  });

  describe('transactions list', function() {
    it('should filter the phone list as a user types into the search box', function() {
      var transactions = element.all(by.repeater('transaction in transactionList.transactions'));
      var query = element(by.model('query'));

      expect(transactions.count()).toBe(2);

      query.sendKeys('taxi');
      expect(transactions.count()).toBe(1);

      query.clear();
      query.sendKeys('lottery');
      expect(transactions.count()).toBe(0);
    });

    it('should reorder when date is changed', function(){});
  });

  describe('Transaction details', function() {
    it('should display transaction details', function() {
      expect(element(by.xpath('/html/body/div/div/div[2]/table/tbody/tr[1]/td[1]')).getText()).toBe('Salary');
      expect(element(by.xpath('/html/body/div/div/div[2]/table/tbody/tr[1]/td[2]')).getText()).toBe('1000');

      expect(element(by.xpath('/html/body/div/div/div[2]/table/tbody/tr[2]/td[1]')).getText()).toBe('taxi');
      expect(element(by.xpath('/html/body/div/div/div[2]/table/tbody/tr[2]/td[2]')).getText()).toBe('50');
    });
  });

  it('should add new transaction when submit form', function(){});
  it('should archive selected transaction when click on Archive button', function(){});
  it('should show current balance', function(){});
});

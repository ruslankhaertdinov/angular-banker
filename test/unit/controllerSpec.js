describe('TransactionListController', function() {
  beforeEach(module('bankerApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.checkDate', function() {
    it('returns message if argument is not date representation', function() {
      var $scope = {};
      var controller = $controller('TransactionListController', { $scope: $scope });
      expect($scope.checkDate('not_date')).toEqual('Should be correct date!');

      var correctDateStr = 'Mon Aug 31 2015 19:44:03 GMT+0300 (MSK)';
      expect($scope.checkDate(correctDateStr)).toEqual(null);
    });
  });

  describe('$scope.currentDate', function() {
    it('returns current date', function() {
      var $scope = {};
      var controller = $controller('TransactionListController', { $scope: $scope });
      expect($scope.currentDate).toEqual(new Date());
    });
  });

  describe('this.transactions', function() {
    it('returns preset transactions', function() {
      var $scope = {};
      var controller = $controller('TransactionListController', { $scope: $scope });
      var transactionFixtures = [
        { text: 'Salary', amount: 1000, datetime: new Date(), checked: false },
        { text: 'taxi', amount: 50, datetime: new Date(), checked: false } ];
      expect(controller.transactions).toEqual(transactionFixtures);
    });
  });

  describe('this.balance', function() {
    it('returns total balance', function() {
      var $scope = {};
      var controller = $controller('TransactionListController', { $scope: $scope });
      expect(controller.balance()).toEqual(1050);
    });
  });

  describe('this.archive', function() {
    it('deletes checked transactions', function() {
      var $scope = {},
        controller = $controller('TransactionListController', { $scope: $scope }),
        archiveCandidate = controller.transactions[0],
        restTransaction = controller.transactions[1];
      archiveCandidate.checked = true;
      controller.archive();
      expect(controller.transactions).toEqual([restTransaction]);
    });
  });

  describe('this.addTransaction', function() {
    it('adds new transaction to transactions list', function() {
      var $scope = {},
        controller = $controller('TransactionListController', { $scope: $scope });
      controller.transactionAmount = '11,7';
      controller.transactionText = 'This is new transaction';
      controller.transactionDate = new Date();
      controller.addTransaction();

      var lastTransaction = controller.transactions[2];
      expect(controller.transactions.length).toEqual(3);
      expect(lastTransaction.amount).toEqual('11.7');
      expect(lastTransaction.text).toEqual('This is new transaction') ;
      expect(lastTransaction.checked).toEqual(false);

      var transactionDate = new Date(lastTransaction.datetime).setHours(0,0,0,0);
      var currentDate = new Date().setHours(0,0,0,0);
      expect(transactionDate).toEqual(currentDate);
    });
  });
});

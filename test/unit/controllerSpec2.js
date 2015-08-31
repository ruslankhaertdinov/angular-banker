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
});

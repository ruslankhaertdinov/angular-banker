var app = angular.module('bankerApp', ['xeditable']);

app.controller('TransactionListController', function($scope) {
  var transactionList = this;
  transactionList.transactions = [
    { text: 'Salary', amount: 1000, datetime: new Date(), checked: false },
    { text: 'taxi', amount: 50, datetime: new Date(), checked: false }
  ];

  transactionList.addTransaction = function() {
    var correctedAmount = transactionList.transactionAmount.replace(',', '.');
    transactionList.transactions.push({
      text: transactionList.transactionText,
      amount: correctedAmount,
      datetime: transactionList.transactionDate,
      checked: false
    });
    transactionList.transactionText = '';
    transactionList.transactionAmount = '';
    transactionList.transactionDate = new Date();
    // TODO: uncomment and fix specs: document.getElementById('transaction_text').focus();
  };

  transactionList.archive = function() {
    var oldTransactions = transactionList.transactions;
    transactionList.transactions = [];
    angular.forEach(oldTransactions, function(transaction) {
      if (!transaction.checked) transactionList.transactions.push(transaction);
    });
  };

  transactionList.balance = function() {
    var sum = 0;
    angular.forEach(transactionList.transactions, function(transaction) {
      sum += parseFloat(transaction.amount);
    });
    return sum;
  };

  $scope.currentDate = new Date();

  $scope.checkDate = function(str) {
    if (!Date.parse(str)) {
      return "Should be correct date!";
    }
  };
});

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

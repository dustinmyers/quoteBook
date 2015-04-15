var app = angular.module('quoteBook');

app.controller('mainControl', function($scope, mainService) {

	$scope.addDataQuote;
	$scope.addDataAuthor;
	$scope.removeDataInput;
	$scope.filterData;
	$scope.removeQuote;

	$scope.quotes = mainService.getData();

	$scope.addData =  function() {
		var newObj = {
			text: $scope.addDataQuote,
			author: $scope.addDataAuthor
		}
		mainService.addData(newObj);
	}

	$scope.removeQuote = function(index) {
        mainService.removeQuote(index);
		console.log("Remove button clicked")
	}


});
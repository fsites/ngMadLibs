angular.module('madlibs', ['ngMessages'])
.controller('MyCtrl', ['$scope', function($scope){

	$scope.onSubmit = function (){
		if ($scope.madlib.$valid) {
			console.log('valid form')
			$scope.display = 1;
		} else {
			console.log('go fuck yourself')
		}
	};

	$scope.reset = function() {
		$scope.display = 0
		$scope.femaleName = '';
		$scope.dirtyTask = '';
		$scope.obnxiousCelebrity = '';
		$scope.jobTitle = '';
		$scope.celebrity = '';
		$scope.hugeNumber = '';
		$scope.tediousTask = '';
		$scope.adjective = '';
	};

	$scope.display = 0;

}]);
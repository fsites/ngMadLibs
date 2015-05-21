angular.module('madlibs', [])
.controller('MyCtrl', ['$scope', function($scope){

	$scope.display = 0;

	$scope.onSubmit = function (){
		if ($scope.madlib.$valid) {
			console.log('valid form')
			$scope.display = 1;
		} else {
			null
		}
	};

	$scope.reset = function() {
		$scope.femaleName = '';
		$scope.dirtyTask = '';
		$scope.obnoxiousCelebrity = '';
		$scope.jobTitle = '';
		$scope.celebrity = '';
		$scope.hugeNumber = '';
		$scope.adjective = '';
		$scope.tediousTask = '';
		$scope.uselessSkill = '';
		$scope.display = 0
	};

}]);
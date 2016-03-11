angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return{
			restrict: 'E',
			templateUrl: 'template.html',
			scope: '=',
			//transclude: true,
			link: function($scope, element, attrs) {
			$scope.range = CalendarRange.getMonthlyRange(new Date());
			$scope.days = $scope.range.days;
			console.log($scope.range);
			console.log($scope.range.days)
				
				
			$scope.init = function () {
				$scope.range = CalendarRange.getMonthlyRange(new Date('"'+$scope.yearModel+','+ $scope.monthModel+'"'));
				$scope.days = $scope.range.days;
				}
			}
			
		}
	})
	
	// .controller('cntrl',[
	// 	'$scope',
	// 	 function($scope) {
			
	// 		//console.log("controller works");
	// 		//console.log(range);
	// }])
		
	
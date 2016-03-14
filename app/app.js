angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return{
			restrict: 'E',
			templateUrl: 'template.html',
			scope: '=',
			link: function($scope, element, attrs) {
			var now = new Date();
			
		    $scope.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		    $scope.monthModel = $scope.months[now.getMonth()];
			$scope.yearModel = now.getFullYear();
			
			$scope.range = CalendarRange.getMonthlyRange(now);
			$scope.days = $scope.range.days;
			$scope.current = $scope.range.days[10].month;
			$scope.years = [];
			for (var i = $scope.range.days[0].year-20; i < $scope.range.days[0].year+21; i++) {
				 	$scope.years.push(i);

				};
				
				
			$scope.init = function () {
				$scope.range = CalendarRange.getMonthlyRange(new Date('"'+$scope.yearModel+','+ $scope.monthModel+'"'));
				$scope.days = $scope.range.days;
				$scope.current = $scope.range.days[10].month;
				}
			}
			
		}
	})
	
	
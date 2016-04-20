angular.module('calendarDemoApp', [])
		
	.directive('calendar', ['$http', function($http){
		_$http=$http;
		return{
			restrict: 'E',
			templateUrl: 'template.html',
			scope: '=',
			
			link: function($scope, element, attrs) {
				var now = new Date();
				$scope.now = now;
				//console.log(headline);
			    $scope.months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
			    $scope.monthModel = $scope.months[now.getMonth()];
			    $scope.headline= "Headline will appear here!";
				$scope.yearModel = now.getFullYear();
				
				$scope.range = CalendarRange.getMonthlyRange(now);
				$scope.days = $scope.range.days;
				$scope.current = $scope.range.days[10].month;
				$scope.years = [];
				for (var i = $scope.range.days[0].year-150; i < $scope.range.days[0].year+1; i++) {
					 	$scope.years.push(i);

					};

				
				$scope.init = function () {
					$scope.range = CalendarRange.getMonthlyRange(new Date('"'+$scope.yearModel+','+ $scope.monthModel+'"'));
					$scope.days = $scope.range.days;
					$scope.current = $scope.range.days[10].month;
					
					}
				
				
				$scope.getHeadline = function(d) {
			 		date=d;
			 		var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=' + date +'&end_date=' + date +'&api-key=b7a5aeb55c2cc96f89d0c7ce999ddcb4:12:74992683';
				
				 	
				 	$http.get(url).then(function(response) {
				 		console.log(response);
				 		$scope.headline=response.data.response.docs[0].headline.main;
				 		$scope.link=response.data.response.docs[0].web_url;
				 		


					})  
				}

			}
			
		}
	}])
	
	
(function () {
	angular.module('chatphidelis').constant('APP_SETTINGS',{
		"URL_BANCO" : "https://chatphidelis.firebaseio.com/"
	});

	angular.module('chatphidelis').run(function($rootScope, $location){
		//$rootScope.user = null;

		$rootScope.$on("$routeChangeStart", function(event, next, current){ 
			if ($rootScope.user == null) {
				$location.path("/login");
			}

		});
	});

})();
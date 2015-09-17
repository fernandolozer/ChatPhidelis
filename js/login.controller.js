(function(){
	
	'use strict';
	angular.module('chatphidelis').controller('LoginCtrl', LoginCtrl);

	LoginCtrl.$inject = ['$scope', '$rootScope', '$location','APP_SETTINGS'];

	function LoginCtrl ($scope, $rootScope, $location,APP_SETTINGS ){
		var vm = this; // recebe o escopo do controller
		
		var ref = new Firebase(APP_SETTINGS.URL_BANCO);

		vm.facebookLogin = doFacebookLogin;
		vm.logout = logout;

		function doFacebookLogin(){
			ref.authWithOAuthPopup("facebook", function (error, authData){
				if (error) {console.log("falha no login", error);}
				else{
					$rootScope.user = {
						name : authData.facebook.displayName, 
						email : authData.facebook.email,
						image : authData.facebook.profileImageURL
					};
					console.log(authData);
					$location.path('/');
					$scope.$apply();
				}
			});
		}

		function logout(){
			console.log("entrou logout");
			ref.unauth();	
			$rootScope.user = null;
			localStorage.removeItem("firebase:session::chatphidelis");
			$location.path("#/login");
			$scope.$apply();

		}
	};

})();
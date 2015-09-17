(function(){
	
	'use strict';
	angular.module('chatphidelis').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope', '$rootScope', '$location','APP_SETTINGS','$firebaseArray'];

	function HomeCtrl ($scope, $rootScope, $location,APP_SETTINGS,  $firebaseArray){
		var vm = this;
		var url = APP_SETTINGS.URL_BANCO + 'messages';
		$scope.messages = [];
		
		var ref = new Firebase(url);
		activate();

		function activate(){
			vm.messages = $firebaseArray(ref);
		};

		vm.message = '';

		vm.post = function (){
			var mensagem= {
				texto: vm.message,
				usuario: $rootScope.user.name,
				userImage: $rootScope.user.image

			};
			console.log($rootScope.user);
			ref.push(mensagem);
			vm.message = '';

		};

	};

})();
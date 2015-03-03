(function(module) {

    'use strict';
    
    module.controller('RegisterCtrl', ['$scope', '$ionicPopup', '$timeout', '$http', '$state', '$window', function($scope, $ionicPopup, $timeout, $http, $state, $window) {
        $scope.registerUser = function() {
            $http.post('http://grand-engine-76-195116.usw1.nitrousbox.com:8080/' + 'register', {
                username: $scope.username,
                password: $scope.password
            }).success(function(res) {
                $window.localStorage.setItem('accessToken', res.token);

                //$state.go('home');

               var myPopup = $ionicPopup.alert({
                    title: 'Successful',
                    template: 'Succesfully signing up ' + $scope.username
                })

                myPopup.then(function(res) {
                    myPopup.close();
                    $state.go('login');
                });

                $timeout(function() {
                    myPopup.close(); //close the popup after 3 seconds
                    $state.go('login');
                }, 3000);
            });
        };

        $scope.loginUser = function() {
            $state.go('home');
        };
    }]);
})(angular.module('app'));
    
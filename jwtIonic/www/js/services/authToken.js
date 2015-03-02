(function() {

    'use strict'; 

    angular.module('app').factory('authToken', function($window) {
        var storage = $window.localStorage;
        var BEARER_TOKEN = 'bearer-token';
        var isAuthenticated = false;

        return {
            setToken: function(token) {
                storage.setItem(BEARER_TOKEN, token);
                isAuthenticated = true;
            },
            getToken: function() {
                return storage.getItem(BEARER_TOKEN);
            },
            removeToken: function() {
                storage.removeItem(BEARER_TOKEN);
                isAuthenticated = false;
            },
            isAuthenticated: function () {
                return !!autToken.getToken();
            }
        };
    });
})();
"use strict";
(function () {
    myApp.factory('userModel', ['$http', '$location', '$cookies', function ($http, $location, $cookies) {

        var userModel = {};
        userModel.checkEmail = function (email) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'checkemail',
                method: "POST",
                data: {
                    email: email
                }
            });
        }
        userModel.doLogin = function (loginData) {

            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'auth',
                method: "POST",
                data: loginData

            });
        }

        userModel.doSignUp = function (data) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'signup',
                method: "POST",
                data: data
            });


        }
        userModel.getAuthStatus = function () {
            var status = angular.fromJson($cookies.get('auth'));
            if (status) {
                return true;
            } else {
                return false;
            }
        }

        userModel.doUserLogout = function () {
            $cookies.remove('auth', true);
            $cookies.remove('isAdmin', true);

        }

        userModel.getUserObject = function () {
            return angular.fromJson($cookies.get('auth'));

        }
        userModel.isAdmin = function () {
            if ($cookies.get('isAdmin') == 1) {
                return true;
            }
            else {
                return false;
            }
        }


        return userModel;

    }]);

})();


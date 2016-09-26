var myApp = angular.module('myApp', ['ngRoute', 'ngCookies',]);


myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/users/login.html',
            controller: 'userController',
            authenticated: false

        });
        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/users/dashboard.html',
            controller: 'userController',
            authenticated: true
        });
        $routeProvider.when('/dashboard/invoice', {
            templateUrl: 'templates/dashboard/invoice-view.html',
            controller: 'userController',
            authenticated: true
        });
        $routeProvider.when('/dashboard/fileno', {
            templateUrl: 'templates/dashboard/fileno-view.html',
            controller: 'userController',
            authenticated: true
        });
        $routeProvider.when('/dashboard/coversheet', {
            templateUrl: 'templates/dashboard/coversheet-view.html',
            controller: 'coverSheetController',
            authenticated: true
        });
        $routeProvider.when('/logout', {
            templateUrl: 'templates/users/logout.html',
            controller: 'userController',
            authenticated: true
        });
        $routeProvider.otherwise('/');
    }

]);

myApp.run(['$rootScope', '$location', 'userModel',
    function ($rootScope, $location, userModel) {
        $rootScope.$on("$routeChangeStart",
            function (event, next, current) {

                if (next.authenticated) {
                    if (!userModel.getAuthStatus()) {
                        $location.path('/');
                    }
                }
                if (next.originalPath == '/') {
                    if (userModel.getAuthStatus()) {
                        console.log(current.originalPath);
                        $location.path(current.originalPath);
                    }
                }

            })


    }])


myApp.controller('navController', ['$scope', 'userModel', '$location', function ($scope, userModel, $location) {

    angular.extend($scope, {
        // user: userModel.getUserObject(),
        navUrl: [{
            link: 'Home',
            url: '#/dashboard'
        }, {
            link: 'Coversheet',
            url: '#/dashboard/coversheet'
        }, {
            link: 'Invoice',
            url: '#/dashboard/invoice'
        }, {
            link: 'FileNo',
            url: '#/dashboard/fileno'
        },]
    });
    angular.extend($scope, {
        doLogout: function () {
            userModel.doUserLogout();

            $location.path('/');
        },
        checkActiveLink: function (routeLink) {
            if ('#' + $location.path() == routeLink) {
                return 'active';
            }

        }

    });


}]);

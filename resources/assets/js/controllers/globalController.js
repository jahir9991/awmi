myApp.controller('globalController', ['$scope', 'userModel', function ($scope, userModel) {
    $scope.global = {};
    $scope.global.navUrl = 'templates/partials/nav.html';
    $scope.global.user = userModel.getUserObject();
    $scope.global.isAdmin = userModel.isAdmin();
    $scope.$on('updateUser', function (value) {
        $scope.global.user = userModel.getUserObject();
    });
    $scope.$on('updateRole', function (value) {
        $scope.global.isAdmin = userModel.isAdmin();
    });

}])

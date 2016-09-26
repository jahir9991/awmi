myApp.controller('invoiceController', ['$scope', 'invoiceModel', '$location', function ($scope, invoiceModel, $location) {

    /*variable*/
    angular.extend($scope, {
        newCoverSheet: {},
        errorDiv: false,
        errorMessage: [],
        md: false

    });
    /*function*/
    angular.extend($scope, {
        mdShow: function () {
            $scope.md = true;


        },
        mdClose: function () {
            $scope.md = false;

        },
        newCoverSheet: {}
        ,
        saveNewCoverSheet: function (addCoverSheetForm) {
            console.log(addCoverSheetForm);
            if (addCoverSheetForm.$valid) {
                $scope.formSubmitted = false;
                console.log('correct')
            } else {
                $scope.formSubmitted = true;
                console.log('error');

            }

        }

    })
    ;


}]);

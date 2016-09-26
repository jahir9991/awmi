myApp.controller('coverSheetController', ['$scope', 'coverSheetModel', '$location', function ($scope, coverSheetModel, $location) {

    /*variable*/
    angular.extend($scope, {

        errorDiv: false,
        errorMessage: [],
        detailCoversheet: {},
        newCoversheet: {},
        // allCoversheet: [],
        modelInsert: false,
        modelDetail: false,
        isSaving: false,
    });

    coverSheetModel.getCoverSheet().success(function (res) {
        console.log(res);
        $scope.allCoversheet = res;
    });


    /*function*/
    angular.extend($scope, {
        currentDate: function () {
            $scope.newCoversheet.date = new Date();
            $scope.newCoversheet.time = new Date()
        },
        modelInsertShow: function () {
            $scope.modelInsert = true;


        },
        modelDetailShow: function (id) {


            $scope.detailCoversheet = id;
            $scope.modelDetail = true;

        },
        modelinsertClose: function () {
            $scope.modelInsert = false;

        },
        modelDetailClose: function () {
            $scope.modelDetail = false;

        },

        insertCoverSheet: function (coversheetForm) {

            $scope.isSaving = true;
            // console.log(coversheetForm);
            if (coversheetForm.$valid) {
                $scope.coversheetFormSubmitted = false;
                coverSheetModel.saveCoverSheet($scope.newCoversheet)
                    .success(function (response) {

                        console.log(response);

                    }).error(function (err) {

                    console.log(err);
                })

            } else {
                $scope.coversheetFormSubmitted = true;
                console.log('invalid form');

            }

        }
    });


}]);

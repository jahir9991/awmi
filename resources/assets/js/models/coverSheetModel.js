myApp.factory('coverSheetModel', ['$http', function ($http) {
    return {
        saveCoverSheet: function (coverSheetFormData) {
            return $http({
                header: {
                    'X-CSRF-TOKEN': csrftoken
                },
                url: baseUrl + 'api' + '/insertcoversheet',
                method: 'POST',
                data: coverSheetFormData
            })

        }    ,
        getCoverSheet: function () {
            return $http({
                header: {
                    'X-CSRF-TOKEN': csrftoken
                },
                url: baseUrl + 'api' + '/getcoversheet',
                method: 'GET'
            })

        }
    }

}]);

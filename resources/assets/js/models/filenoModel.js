myApp.factory('filenoModel', ['$http', function ($http) {
    return {
        saveCoverSheet: function (coverSheetData) {
            return $http({
                header: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'api' + '/coversheet',
                method: 'POST',
                data: coverSheetData
            })

        }
    }

}]);

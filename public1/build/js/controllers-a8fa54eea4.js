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

myApp.controller('userController', ['$scope', '$cookies', 'userModel', '$location', function ($scope, $cookies, userModel, $location) {
    $scope.$emit('updateUser', userModel.getUserObject());
    $scope.$emit('updateRole', userModel.isAdmin());

    /*variable*/
    angular.extend($scope, {
        user: userModel.getUserObject(),
        login: {},
        signup: {},
        signupSuccess: false
    })
    ;
    /*functions*/
    angular.extend($scope, {
        doLogin: function (loginForm) {
            if (loginForm.$valid) {
                $scope.loging = true;
                $scope.loginFormSubmitted = false;
                var loginData = {
                    email: $scope.login.email,
                    password: $scope.login.password
                };

                userModel.doLogin(loginData)
                    .success(function (response) {
                        console.log(response);
                        var user = JSON.stringify(response);
                        if (response.role !== 3) {
                            $cookies.put('auth', user);
                            $cookies.put('isAdmin', response.role);
                            $location.path('/dashboard');
                        }
                    })
                    .error(function (data, status, header) {
                        $scope.loginError = data;
                        if (status == 423) {
                            $scope.loginstatus = 'alert-warning'
                        } else {
                            $scope.loginstatus = 'alert-danger'
                        }
                        // $scope.loginError.status= status;
                        $scope.loging = false;
                        $scope.login = {};
                    });
            }
            else {
                $scope.loginFormSubmitted = true;
                console.log('login form invalid');
                $scope.login = {};
            }

        }, /*end doLogin*/

        doSignUp: function (signupForm) {
            if (signupForm.$valid && !$scope.emailCheckError) {   //chek Validation
                $scope.signupFormSubmitted = false;

                var signupData = {
                    name: $scope.signup.name,
                    email: $scope.signup.email,
                    password: $scope.signup.password
                };

                userModel.doSignUp(signupData)
                    .success(function (response) {
                        console.log(response);
                        $scope.signupSuccess = true;
                        $scope.signup = {};
                        $scope.user = response;
                    })
                    .error(function (data, status, header) {
                        console.log(data);
                    });

            }
            else {
                $scope.signupFormSubmitted = true;
                console.log(signupForm);
            }
        },
        /*end doSignUp*/

        checkEmail: function () {
            userModel.checkEmail($scope.signup.email).success(function (data) {
                if (data == 0) {
                    $scope.emailCheckError = true;
                    console.log($scope.emailCheckError);
                } else {
                    $scope.emailCheckError = false;
                    console.log($scope.emailCheckError);
                }

            })

        },
        closesignup: function () {

                  $scope.signupSuccess=false;
        }

    });


}]);




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

myApp.controller('filenoController', ['$scope', 'filenoModel', '$location', function ($scope, filenoModel, $location) {

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

//# sourceMappingURL=controllers.js.map

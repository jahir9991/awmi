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




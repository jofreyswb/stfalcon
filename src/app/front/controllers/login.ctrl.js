import app from "./../application";
app.controller("LoginController", function ($scope, $state, $stateParams, AuthService) {
  $scope.state = $state;
  $scope.user = {};

  AuthService.chackAuthenticate().then(function () {
    return $state.go("front");
  });

  $scope.login = function () {
    $scope.errors = false;
    AuthService.signIn($scope.user).then(function () {
      location.href = "/";
    }).catch(e => {
      $scope.error = true;
    });
  };
});
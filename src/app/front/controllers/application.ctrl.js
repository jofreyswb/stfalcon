import app from "./../application";

import modalTpl from "./../../themes/front/templates/popUp/product.html"
app.controller("SuperController", function ($scope, AuthService, $uibModal, $http) {
  $scope.logout = () => {
    AuthService.logout();
  };

  $http.get("products.json").then((products)=> {
    $scope.products = products.data;

  });

  $scope.user = AuthService.getUser();
  $scope.show = (product)=> {
    $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: modalTpl,
      controller: function ($scope, product,$uibModalInstance) {
        $scope.product = product;
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };

      },
      size: 'sm',
      resolve: {
        product: ()=> product
      }
    });


  }

});
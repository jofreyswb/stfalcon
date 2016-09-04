import app from "../application";

import indexTpl from "./../../themes/front/templates/index.html";
import authTpl from "./../../themes/front/templates/auth.html";


app.config(function ($stateProvider, $resourceProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("sign", {
      abstract: true,
      template: "<ui-view></ui-view>"
    })
    .state("sign.in", {
      url: "/login",
      controller: "LoginController",
      templateUrl: authTpl,
      //resolve: {
      //  authenticate: function (Auth, $state) {
      //    return Auth.authenticate()
      //      .then(() => {
      //        console.log("authenticated");
      //        $state.go("company");
      //      }).catch(() => {
      //        console.log("unauthenticated");
      //      });
      //  }
      //},
    })

    .state("front", {
      url: "/",
      templateUrl: indexTpl,
      controller: "SuperController",
      resolve: {
        authenticate: function (AuthService, $state, $rootScope) {
          return AuthService.chackAuthenticate().then(user=> {
            if (user.data) {
              $rootScope.user = user.data;
            } else {
              $rootScope.user = user;
            }
          }).catch(()=> {
            $state.go("sign.in")
          });

        }
      }
    })

  ;


});

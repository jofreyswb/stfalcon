import angular from "angular";
import "angular-ui-router";
import "angular-resource";
import "ui-bootstrap-js";
import "ui-bootstrap-css";
import "ui-bootstrap-tpls-js";
import "bootstrap-css";


export default angular.module("testStFalcon.front", [
  "auth.services",
  'ui.router',
  'ngResource',
  'ui.bootstrap'
]);

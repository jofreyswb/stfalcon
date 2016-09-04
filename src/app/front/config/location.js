import app from "../application";

app.config(function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

});
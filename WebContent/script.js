'use strict';
// Declare (or Register, Create) an Angular module.
var app = angular.module('myApp', ['ngRoute']);

// ---------- Config route(s). ----------
// Inject $routeProvider dependency for routing.
app.config(['$routeProvider', function($routeProvider) {
  // Home 
  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });
  // Food
  $routeProvider.when('/register', {
    templateUrl: 'register.html',
    controller: 'RegisterController'
  });
  // Drinks
  $routeProvider.when('/signup', {
    templateUrl: 'signup.html',
    controller: 'SignupController'
  });
  // Otherwise, redirect to Home
  $routeProvider.otherwise({redirectTo: '/'});
}]);

// ---------- Create Controller(s). ----------
// HomeCotnroller
app.controller('HomeController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'Welcome to CSS DNA SPA Demo!';
}]);

// FoodCotnroller
app.controller('RegisterController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'This is Food page.';
}]);

// DrinksCotnroller
app.controller('SignupController', ['$scope', function($scope){
  // Bind "message" to display to html pages
  $scope.message = 'This is Drinks page.';
}]);
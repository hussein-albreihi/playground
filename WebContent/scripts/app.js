'use strict';

/**
 * @ngdoc overview
 * @name webContentApp
 * @description
 * # webContentApp
 *
 * Main module of the application.
 */
angular
  .module('webContentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login',{
    	templateUrl: 'views/login.html',
    	controller: 'LoginCtrl'
      })
      .when('/register', {
    	templateUrl: 'views/register.html',
    	controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

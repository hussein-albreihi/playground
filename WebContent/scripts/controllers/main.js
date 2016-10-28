'use strict';

/**
 * @ngdoc function
 * @name webContentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webContentApp
 */
angular.module('webContentApp')
  .controller('MainCtrl' , function ($scope, $location) {
    
    $scope.loginPage = function() {
    	$location.path('login');
    }
    
    $scope.registerPage = function() {
    	$location.path('register');
    }
    
  });

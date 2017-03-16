'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/empresa', {
        templateUrl: 'views/empresa.html',
        controller: 'Empresa',
        controllerAs: 'emp'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'Empresa',
        controllerAs: 'emp'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'Empresa',
        controllerAs: 'emp'
      })
      .when('/acceso', {
        templateUrl: 'views/acceso.html', 
        controller: 'Empresa',
        controllerAs: 'emp'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

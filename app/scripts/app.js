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
    'ngRoute', 'ngCookies'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'home',
        controllerAs: 'main'
      })
      .when('/empresa', {
        templateUrl: 'views/empresa.html',
        controller: 'home',
        controllerAs: 'emp'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'home',
        controllerAs: 'emp'
      })
      .when('/contacto', {
        templateUrl: 'views/tcontent.html',
        controller: 'home',
        controllerAs: 'email'
      })
      .when('/acceso', {
        templateUrl: 'views/acceso.html',
        controller: 'home',
        controllerAs: 'acceso'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'home',
        controllerAs: 'perfil'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

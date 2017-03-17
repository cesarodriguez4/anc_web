'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('app')
  .controller('home', function () {
    var vm = this; 

    vm.a1 = "Lideres en Refrigeracion";
    vm.a1p = "Es considerada hoy por hoy la empresa de Almacenamiento Congelado y refrigerado de más rápido crecimiento en el centro del país y la empresa de Transporte Refrigerado más grande de Venezuela.";
    
    vm.b1 = "Transportamos tu mercancia";
    vm.b1p = "Contamos con servicio de transporte para llevar tu mercancia a donde necesites";

    vm.c1 = "Ubicacion";
    vm.c1p = "Oficinas Administrativas y de Operaciones/logística ubicadas en Ctra  Nacional   Valencia-Campo de Carabobo,  Local parcelas Nro 14, 15 y 16  Sector  Parque   Agrinco-Manzana A-27, Tocuyito  Carabobo con 2000 metros de construcción terminada, modernamente equipada.";
    
    vm.d1 =  "Personal de primer nivel";
    vm.d1p = "Además contamos con un excelente personal, Obrero, Técnico, Administrativo y Gerencial, capaz de reaccionar inmediatamente ante cualquier reto.";
  })
  .controller('Empresa', function() {
  	this.hey = "Hey";
  });

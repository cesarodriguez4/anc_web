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
    vm.a1 = {
      text: "Lideres en Refrigeracion",
      bg: "url('../images/avenues/alma_b.png')"
    };
    vm.a1p = { text:"Es considerada hoy por hoy la empresa de Almacenamiento Congelado y refrigerado de más rápido crecimiento en el centro del país y la empresa de Transporte Refrigerado más grande de Venezuela.",
              bg: "white"};
    vm.a = vm.a1;
    vm.b1 = {text:"Transportamos tu mercancia", bg: "url('../images/avenues/trans.jpg')"};
    
    vm.b1p = { text:"Contamos con servicio de transporte para llevar tu mercancia a donde necesites",
    bg: "white"};
    vm.b = vm.b1;

    vm.c1 = {text: "Ubicacion", bg: "url('../images/avenues/maps.jpg')"};
    vm.c1p = {text:"Oficinas Administrativas y de Operaciones/logística ubicadas en Ctra  Nacional   Valencia-Campo de Carabobo,  Local parcelas Nro 14, 15 y 16  Sector  Parque   Agrinco-Manzana A-27, Tocuyito  Carabobo con 2000 metros de construcción terminada, modernamente equipada.",
    bg: "white"};
    vm.c = vm.c1;

    vm.d1 = { text:"Personal de primer nivel",
    bg: "url('../images/avenues/traba.jpg')"};
    vm.d1p = { text: "Además contamos con un excelente personal, Obrero, Técnico, Administrativo y Gerencial, capaz de reaccionar inmediatamente ante cualquier reto.",
    bg: "white"};
    vm.d = vm.d1;

  })
  .controller('Empresa', function() {
  	this.hey = "Hey";
  });

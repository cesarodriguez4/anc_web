'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the publicApp
 */
angular.module('app')
  .controller('home',['$scope', '$http', '$cookies', '$location', function ($scope, $http, $cookies, $location) {
    var vm = this;

    $scope.perfil = true;

    vm.islogged = false;
    if ($cookies.get('session')) {
      vm.islogged = true;
    }
    // Perfil & contenido
    $http.get('https://agroapi.herokuapp.com/data')
    .then(success => {
      const datos = success.data[0];
      vm.muno = datos.bienvenida_1;
      vm.mdos = datos.bienvenida_2;
      vm.mtres = datos.bienvenida_3;
      vm.mcuatro = datos.bienvenida_4;
      vm.runo = datos.razones_1;
      vm.rdos = datos.razones_2;
      vm.rtres = datos.razones_3;
      vm.rcuatro = datos.razones_4;
      vm.natera = datos.cita;
      vm.nosotros = datos.quienes_somos;
      vm.vision = datos.vision;
      vm.mision = datos.mision;

      vm.title = [
    {
      text:vm.muno,
      image: "../../images/collage3.jpg"
    },
    {
      text: vm.mdos,
      image: "../../images/growth.jpg"
    }, 
    {
      text: vm.mtres,
      image: "../../images/clock.jpg"
     }, 
    {
      text: vm.mcuatro, 
      image: "../../images/galeria/gerente.jpg"
    }
    ]; 

    }, () => {
      console.log('Ha ocurrido un error recibiendo datos.');
    });

    function sendUp(obj, disabled) {
      $http.post('https://agroapi.herokuapp.com/updateData',
        obj).then( () => {
          disabled = true;
        }, error => {
          console.log(error);
        });
    }
    
    vm.mensajeLog = "El campo ha sido enviado satisfactoriamente";
    vm.showMensajeLog = false;

    vm.closeMensajeLog = () => {
      vm.showMensajeLog = false;
    };

    vm.openMessage = () => {
      vm.showMensajeLog = true;
    };

    vm.emaildelivered = () => {
      alert('Tu correo ha sido enviado satisfactoriamente');
    };

      vm.enviarMensaje = () => {
          const emailNombre = vm.emailNombre;
          const emailCorreo = vm.emailCorreo;
          const emailAsunto = vm.emailAsunto;
          const emailMensaje = vm.emailMensaje;

      $http.post('https://agroapi.herokuapp.com/email',
        {emailNombre, emailCorreo, emailAsunto, emailMensaje}, response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
    };

    

    vm.i = 0;

    setInterval(function() {
      var it = vm.i;
      if(it >= vm.title.length -1) {
        $scope.$apply(function(){
           vm.i = 0;
         }); 
      } else {
        $scope.$apply(function(){
           vm.i = it + 1;
         }); 
      }
    }, 5000);

    //Contenido de los cuadros con imagenes
    vm.a1 = {
      text: "LÍDERES EN REFRIGERACIÓN",
      bg: "url('../images/avenues/093.JPG')"
    };
    vm.a1p = { text:"Es considerada hoy por hoy la empresa de Almacenamiento Congelado y refrigerado de más rápido crecimiento en el centro del país y la empresa de Transporte Refrigerado más grande de Venezuela.",
              bg: "white"};
    vm.a = vm.a1;
    
    vm.b1 = {text:"TRANSPORTAMOS TU MERCANCÍA", bg: "url('../images/avenues/camion.jpg')"};
    vm.b1p = { text:"Contamos con servicio de transporte para llevar tu mercancia a donde necesites",
    bg: "white"};
    vm.b = vm.b1;

    vm.c1 = {text: "UBICACIÓN", bg: "url('../images/avenues/maps.jpg')"};
    vm.c1p = {text:"Oficinas Administrativas y de Operaciones/logística ubicadas en Ctra  Nacional   Valencia-Campo de Carabobo,  Local parcelas Nro 14, 15 y 16  Sector  Parque   Agrinco-Manzana A-27, Tocuyito  Carabobo con 2000 metros de construcción terminada, modernamente equipada.",
    bg: "white"};
    vm.c = vm.c1;

    vm.d1 = { text:"PERSONAL DE PRIMER NIVEL",
    bg: "url('../images/avenues/097.jpg')"};
    vm.d1p = { text: "Además contamos con un excelente personal, Obrero, Técnico, Administrativo y Gerencial, capaz de reaccionar inmediatamente ante cualquier reto.",
    bg: "white"};
    vm.d = vm.d1;


    //Login
    vm.sendQuery = function() {
      const usuario = vm.user;
      const password = vm.password;

      $http.post('https://agroapi.herokuapp.com/login',
        {usuario, password})
      .then(success => {
        const res = success.data;
        if (res.error) {
          vm.error = res.error;
        } else {
           $cookies.put('session', true);
           $location.path('/perfil');
        }
      }, error => {
        vm.error = error;
      });
    };

    // Actualizar informacion
    vm.update = query => {
      if (query === 'main') {
        sendUp({
          bienvenida_1: vm.muno,
          bienvenida_2: vm.mdos,
          bienvenida_3: vm.mtres,
          bienvenida_4: vm.mcuatro
        }, vm.button1);
      } else if (query === 'razones') {
        sendUp({
          razones_1: vm.runo,
          razones_2: vm.rdos,
          razones_3: vm.rtres,
          razones_4: vm.ruatro
        }, vm.button2);
      } else if (query === 'cita') {
         sendUp({
          cita: vm.natera
        }, vm.button3);
      } else {
         sendUp({
          quienes_somos: vm.nosotros,
          mision: vm.mision,
          vision: vm.vision
        }, vm.button4);
      }
    };

    // Enviar correo


    



  }]);
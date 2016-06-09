function AltaCtrl($filter,AltaSrv,$state) { //Pendiente de cambiar loginSrv

    //ZONA DE DICCIONARIO
    var vm = this;
    vm.errorMsg = null;

    vm.email = "";
    vm.password = "";
    vm.verPass = "";
    //FUNCIONES AUXILIARES

    //EVENTOS

    vm.AltaAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email)) || ($filter('VerPassFilter')(vm.verPass)); //Pendiente de cambiar nombres
        var service = new AltaSrv();
        
        if (!disable && (vm.password===vm.verPass)) {
            service.doAlta(vm.email, vm.password, vm.verPass).then(function(data){ 
               console.log('Alta con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
        vm.verPass="";
    };
    
    vm.login = function () {
        $state.go('login');
    };
}

module.exports = angular.module('alta').controller('AltaCtrl', ['$filter','AltaSrv','$state', AltaCtrl]);
function LoginCtrl($filter,LoginSrv,$state) {

    //ZONA DE DICCIONARIO
    var vm = this;
    vm.errorMsg = null;

    vm.email = "";
    vm.password = "";

    //FUNCIONES AUXILIARES

    //EVENTOS

    vm.loginAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email));
        var service = new LoginSrv();
        
        if (!disable) {
            service.doLogin(vm.email, vm.password).then(function(data){
               console.log('Login con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
    };
    
    vm.alta = function () {
        $state.go('alta');
    };

    starup();
}

module.exports = angular.module('login').controller('LoginCtrl', ['$filter','LoginSrv','$state', LoginCtrl]);
function AltaController (){
    var vm = this;
    vm.email="";
    vm.password="";
    vm.passwordRepeat="";
    

    vm.loginAction = function () {
        var disable = ($filter('PassFilter')(vm.password)) || ($filter('EmailFilter')(vm.email) || $filter('PassFilter')(vm.password, vm.passwordRepeat));
        var service = new LoginSrv();
        
        if (!disable) {
            service.doAlta(vm.email, vm.password, wm.passwordRepeat).then(function(data){
               console.log('Login con exito'); 
            },function (error) {
                vm.errorMsg = error.usuario.msg;
            });
        }
    };

    vm.clean = function () {
        vm.email="";
        vm.password="";
        vm.passwordRepeat="";
    };

}

module.exports = angular.module('alta').controller('AltaCtrl',AltaController);
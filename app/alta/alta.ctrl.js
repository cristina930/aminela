function AltaController (){
    var mv = this;
    vm.email="";
    vm.password="";
    vm.passwordRepeat="";
}

module.exports = angular.module('alta').controller('AltaCtrl',AltaController);
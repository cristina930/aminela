function AltaController (){
    var vm = this;
    vm.email="";
    vm.password="";
    vm.passwordRepeat="";
}

module.exports = angular.module('alta').controller('AltaCtrl',AltaController);